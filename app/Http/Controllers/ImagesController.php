<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Image;
use App\Models\Keyword;
use App\Models\Purchase;
use App\Models\Photographer;
use Illuminate\Http\Request;

use Auth;
use File;
use Intervention;

class ImagesController extends Controller
{
    function __construct()
    {
        $this->middleware('jwt')->only(['store', 'download', 'uploaded', 'resize']);

        $filesPath = storage_path('/app/public/images/files/');
        if (!file_exists($filesPath)) {
            mkdir($filesPath, 666, true);
        }
        $profilesPath = storage_path('/app/public/images/profiles/');
        if (!file_exists($profilesPath)) {
            mkdir($profilesPath, 666, true);
        }
        $thumbnailsPath = storage_path('/app/public/images/thumbnails/');
        if (!file_exists($thumbnailsPath)) {
            mkdir($thumbnailsPath, 666, true);
        }
        $watermarkPath = storage_path('/app/public/images/watermarks/');
        if (!file_exists($watermarkPath)) {
            mkdir($watermarkPath, 666, true);
        }
        $compressedPath = storage_path('/app/public/compressed/');
        if (!file_exists($compressedPath)) {
            mkdir($compressedPath, 666, true);
        }
        $tempPath = storage_path('/app/public/temp/images/');
        if (!file_exists($tempPath)) {
            mkdir($tempPath, 666, true);
        }
    }

    public function uploadedImagesId()
    {
        if (auth()->user())
        {
            return auth()->user()->images->map(function($image) {
                return $image->id;
            })->toArray();
        } else {
            return [];
        }
    }

    public function purchasedImagesId()
    {
        if (auth()->user())
        {
            return auth()->user()->purchases
                ->filter(function($purchase) {
                    return $purchase->payment_id;
                })
                ->map(function($purchase) {
                    return $purchase->image_id;
                })->toArray();
        } else {
            return [];
        }
    }

    public function uploaded()
    {
        return Image::with('user')
            ->whereIn('id', $this->uploadedImagesId())
            ->get()
            ->map(function($image) {
                $image['purchased'] = false;
                $image['own'] = true;
                return $image;
            });
    }

    public function purchased()
    {
        return Image::with('user')
            ->whereNotIn('id', $this->uploadedImagesId())
            ->whereIn('id', $this->purchasedImagesId())
            ->get()
            ->map(function($image) {
                $image['purchased'] = true;
                $image['own'] = false;
                return $image;
            });
    }

    public function unpurchased()
    {
        return Image::with('user')->get()
            ->whereNotIn('id', $this->uploadedImagesId())
            ->whereNotIn('id', $this->purchasedImagesId())
            ->map((function($image) {
                    $image['purchased'] = false;
                    $image['own'] = false;
                    return $image;
                })
            );
    }

    public function fetch(Request $request, $id)
    {
        return Image::with('user')->with('keywords')->where('id', $id)->get()->map(function ($image) {
            $image['own'] = in_array($image->id, $this->uploadedImagesId()) ? true : false;
            $image['purchased'] = in_array($image->id, $this->purchasedImagesId()) ? true : false;
            $image['photographer'] = Photographer::where('user_id', $image->user->id)->first();
            return $image;
        })->first();
    }

    public function similar(Request $request, $id)
    {
        $keywordIds = Image::with('user')->with('keywords')->where('id', $id)
            ->get()
            ->map(function($image) {
                return $image->keywords;
            })
            ->first()
            ->map(function($keyword) {
                return $keyword->id;
            });
        $imageIds = Keyword::with('images')->whereIn('id', $keywordIds)
            ->distinct()
            ->get()
            ->map(function ($keyword) {
                foreach($keyword->images as $image)
                    return $image->id;
            })->toArray();

        $images = Image::with('user')->whereIn('id', $imageIds)->get();

        $images = $images
            ->map(function ($image) {
                $image['own'] = in_array($image->id, $this->uploadedImagesId()) ? true : false;
                $image['purchased'] = in_array($image->id, $this->purchasedImagesId()) ? true : false;
            $image['photographer'] = Photographer::where('user_id', $image->user->id)->first();
                return $image;
            });
        return $images;
    }

    public function fetchAll()
    {
        return Image::with('user')->orderBy('id', 'desc')
            // ->skip(2)->take(2)
            ->get()
            ->map(function ($image) {
                $image['own'] = in_array($image->id, $this->uploadedImagesId()) ? true : false;
                $image['purchased'] = in_array($image->id, $this->purchasedImagesId()) ? true : false;
                return $image;
            });
    }

    function photographerImages(Request $request, $username)
    {
        $user = User::where('username', $username)->select(['id'])->firstOrFail();
        return Image::with('user')->where('user_id', $user->id)->orderBy('id', 'desc')
            // ->skip(2)->take(2)
            ->get()
            ->map(function ($image) {
                $image['own'] = in_array($image->id, $this->uploadedImagesId()) ? true : false;
                $image['purchased'] = in_array($image->id, $this->purchasedImagesId()) ? true : false;
                return $image;
            })
        ;
    }

    public function searchImages($query)
    {
        $words = array_filter(explode(" ", $query), function ($word) {
            return (strlen($word) > 2);
        });

        $captionResult = Image::with('user');
        foreach ($words as $word) {
            $captionResult = $captionResult->orWhere('caption', 'like', '%'.$word.'%');
        }

        $captionResult = $captionResult->get();

        $categoriesResult = Image::with('user');
        foreach ($words as $word) {
            $categoriesResult = $categoriesResult->orWhere('category', 'like', '%'.$word.'%');
        }

        $categoriesResult = $categoriesResult->get();

        $queryKeywords = Keyword::with('images');
        foreach ($words as $word) {
                $queryKeywords = $queryKeywords->where('keyword','like','%'.$query.'%');
        }
        $queryKeywords = $queryKeywords->distinct()
            ->get()
            ->map(function ($keyword) {
                foreach($keyword->images as $image)
                    return $image->id;
            })->toArray();

        $keywordResult = Image::with('user')->whereIn('id', $queryKeywords)->get();
        $images = $keywordResult->merge($categoriesResult)->merge($captionResult);

        $images = $images
            ->map(function ($image) {
                $image['own'] = in_array($image->id, $this->uploadedImagesId()) ? true : false;
                $image['purchased'] = in_array($image->id, $this->purchasedImagesId()) ? true : false;
                return $image;
            });
        return $images;
    }

    public function categoryImages($category)
    {
        return Image::with('user')->where('category', implode('/', explode('-', $category)))
            ->get()
            ->map(function ($image) {
                $image['own'] = in_array($image->id, $this->uploadedImagesId()) ? true : false;
                $image['purchased'] = in_array($image->id, $this->purchasedImagesId()) ? true : false;
                return $image;
            });
    }


    public function categories()
    {
        return [ 'Abstract', 'Animal/Wildlife', 'Background/Textures', 'Beauty/Fashion', 'Building/Landmarks', 'Business/Finance', 'Cartoon', 'Celebrities', 'Editorial', 'Education', 'Festival', 'Food/Drink', 'Healthcare/Medical', 'Holidays', 'Illustrations/Clip-Art', 'Industrial', 'Interiors', 'Miscellaneous', 'Music', 'Nature', 'Objects', 'Parks/Outdoor', 'People', 'Religion', 'Science', 'Signs/Symbols', 'Sports/Recreation', 'Technology', 'The Arts', 'Transportation', 'Vectors', 'Vintage',
        ];
    }

    public function download(Request $request, $id)
    {
        $owned = Image::where('id', $id)->where('user_id', auth()->user()->id)->get()->count() > 0 ? true : false;
        $purchased = Purchase::where('user_id', auth()->user()->id)->where('image_id', $id)->get()->count() > 0 ? true : false;
        if (!$purchased && !$owned)
            return response()->json(['error' => 'Image is not purchased'], 404);

        $image = Image::where('id', $id)->first();
        Image::where('id', $id)->update([
            'downloads' => $image->downloads + 1
        ]);
        $abspath = 'app/public/images/files/'.$image->slug;
        $source = storage_path($abspath);
        $headers = ['Content-Type: application/octet-stream', 'Content-Disposition: attachment'];
        return response()->download($source, basename($source), $headers);
    }

    public function store(Request $request)
    {
        if ($request->hasFile('imageFile'))
        {
            if ($request->file('imageFile')->isValid())
            {
                $originalImage = $request->file('imageFile');
                $extension = $originalImage->getClientOriginalExtension();
                $mime_type = $originalImage->getMimeType();
                $size = $originalImage->getSize();
                $checksum = md5_file($originalImage);
                $imageData = getimagesize($originalImage);
                $resolution = $imageData[0].' x '.$imageData[1];
                $caption = $request->input('caption');
                $category = $request->input('category');
                $keywords = $request->input('keywords');

                do {
                    $slug = str_random(24);
                }while(Image::where('slug', $slug)->first() != null);

                if (Image::where('checksum', $checksum)->first() == null)
                {
                    # Store File
                    $originalImage->storeAs('public/images/files/', $slug.'.'.$extension);

                    $height = 100;
                    $width = 100;
                    $thumbnailPath = storage_path('/app/public/images/thumbnails/');
                    $thumbnailImage = Intervention::make($originalImage);
                    $thumbnailImage->resize($width, $height);
                    $thumbnailImage->save($thumbnailPath.$slug.'.'.$extension);

                    $height = $imageData[0];
                    $width = $imageData[1];
                    $ratio = ($width + $height) / ( ($width * $height) / 576);
                    $new_width = $height * $ratio;
                    $new_height = $width * $ratio;
                    $new_width/=($new_height/576);
                    $new_height/=($new_height/576);
                    $watermarkPath = storage_path('/app/public/images/watermarks/');
                    $watermarkImage = Intervention::make($originalImage);
                    $watermarkImage->resize($new_width, $new_height);
                    $WATERMARK = Intervention::make(storage_path('/app/public/web-images/watermark.png'));

                    for ($i = -100; $i < $new_width; $i+=200)
                        for ($j = -100; $j < $new_height; $j+=200)
                            $watermarkImage->insert($WATERMARK, 'top-left', $i, $j);

                    $watermarkImage->save($watermarkPath.$slug.'.'.$extension);

                    $image = Image::create([
                        'user_id' => auth()->user()->id,
                        'category' => $category,
                        'caption' => $caption,
                        'mime_type' => $mime_type,
                        'resolution' => $resolution,
                        'size' => $size,
                        'slug' => $slug.'.'.$extension,
                        'checksum' => $checksum
                    ]);

                    foreach (explode(',', $keywords) as $keyword) {
                        $thekeyword = Keyword::firstOrCreate([
                            'keyword' => $keyword
                        ]);
                        $image->keywords()->attach($thekeyword->id);
                    }
                    return response()->json(['image' => $image->id], 200);
                }
                return response()->json(['error' => 'Duplication Image'], $status = 200);
            }
        }
    }

    public function resize(Request $request)
    {
        if ($request->hasFile('imageFile'))
        {
            if ($request->file('imageFile')->isValid())
            {
                $originalImage = $request->file('imageFile');
                $extension = $originalImage->getClientOriginalExtension();
                $mime_type = $originalImage->getMimeType();
                $size = $originalImage->getSize();
                $imageData = getimagesize($originalImage);
                $resolution = $imageData[0].' x '.$imageData[1];

                $slug = time().str_random(24);

                # Store File
                $originalImage->storeAs('public/temp/images/', $slug.'.'.$extension);

                $new_width = $request->input('width');
                $new_height = $request->input('height');

                $resizePath = storage_path('/app/public/temp/images/');
                $newImage = Intervention::make($originalImage);
                $newImage->resize($new_width, $new_height);
                $newImage->save($resizePath.$slug.'-resized.'.$extension);

                $abspath = 'app/public/temp/images/'.$slug.'-resized.'.$extension;
                return $this->pushDownload($abspath);
            }
        }
    }

    public function pushDownload($abspath)
    {
        $source = storage_path($abspath);
        $headers = ['Content-Type: application/octet-stream', 'Content-Disposition: attachment'];
        return response()->download($source, basename($source), $headers);
    }
}
