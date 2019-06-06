<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Keyword;
use App\Models\Photographer;
use Illuminate\Http\Request;

use Auth;
use File;
use Intervention;

class ImagesController extends Controller
{
    function __construct()
    {
        $this->middleware('jwt')->only(['store', 'download']);
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
    }

    public function categories()
    {
        return [ 'Abstract', 'Animal/Wildlife', 'Background/Textures', 'Beauty/Fashion', 'Building/Landmarks', 'Business/Finance', 'Cartoon', 'Celebrities', 'Editorial', 'Education', 'Festival', 'Food/Drink', 'Healthcare/Medical', 'Holidays', 'Illustrations/Clip-Art', 'Industrial', 'Interiors', 'Miscellaneous', 'Music', 'Nature', 'Objects', 'Parks/Outdoor', 'People', 'Religion', 'Science', 'Signs/Symbols', 'Sports/Recreation', 'Technology', 'The Arts', 'Transportation', 'Vectors', 'Vintage',
        ];
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

    public function purchasedImagesIDs()
    {
        if (auth()->user())
        {
            return auth()->user()->purchases
                ->filter(function($purchase) {
                    return $purchase->payment_id;
                })
                ->map(function($purchase) {
                        return $purchase->image_id;
                });
        } else {
            return [];
        }
    }

    /** Purchaeses **/
    public function purchased()
    {
        return Image::with('user')->get()->whereIn('id', $this->purchasedImagesIDs())->map(function($purchase) {
            $purchase['purchased'] = true;
            return $purchase;
        });
    }

    public function unpurchased()
    {
        return Image::with('user')->get()->whereNotIn('id', $this->purchasedImagesIDs())->map((function($purchase) {
            $purchase['purchased'] = false;
            return $purchase;
        }));
    }

    public function fetchAll()
    {
        return $this->purchased()->merge($this->unpurchased())->sortByDesc(function ($image) {
            return $image->id;
        })->values()->all();
    }

    public function fetch(Request $request, Image $id)
    {
        return Image::with('user')->with('keywords')->where('id', $id->id)->get()->map(function ($image){
            $image['photographer'] = Photographer::where('user_id', $image->user->id)->first();
            return $image;
        })->first();
    }

    public function download(Request $request, Image $id)
    {
        // $purchases = $this->purchased();
        // return $purchases->;
        // // if ($image  $purchases)
        //     return "yes";
        // return "no";
        $image = Image::where('id', $id->id)->first();
        $imagename = $image->slug;
        $abspath = 'app/public/images/files/'.$imagename;
        $source = storage_path($abspath);
        $headers = ['Content-Type: application/octet-stream', 'Content-Disposition: attachment'];
        return response()->download($source, basename($source), $headers);
    }
}
