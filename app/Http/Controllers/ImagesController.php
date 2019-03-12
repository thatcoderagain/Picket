<?php

namespace App\Http\Controllers;

use Auth;
use App\Image;
use App\Keyword;
use Illuminate\Http\Request;

class ImagesController extends Controller
{
    public function getImages()
    {
        return Image::orderBy('id', 'DESC')->get();
    }

    public function getCategories()
    {
        return [
            'Abstract',
            'Animal/Wildlife',
            'Background/Textures',
            'Beautify/Fashion',
            'Building/Landmarks',
            'Business/Finance',
            'Cartoon',
            'Celebrities',
            'Editorial',
            'Education',
            'Festival',
            'Food and Drink',
            'Healthcare/Medical',
            'Holidays',
            'Illustrations/Clip-Art',
            'Industrial',
            'Interiors',
            'Miscellaneous',
            'Music',
            'Nature',
            'Objects',
            'Parks/Outdoor',
            'People',
            'Relegion',
            'Science',
            'Signs/Symnols',
            'Sports/Recreation',
            'Technology',
            'The Arts',
            'Transportation',
            'Vectors',
            'Vintage',
        ];
    }

    public function getImageInfo(Request $request, Image $id)
    {
        return Image::with('keywords')->where('id', $id->id)->first();
    }

    public function uploadImage(Request $request)
    {
        if ($request->hasFile('imageFile'))
        {
            if ($request->file('imageFile')->isValid())
            {
                // $fileName = $request->file('imageFile')->getClientOriginalName();
                $extension = $request->file('imageFile')->getClientOriginalExtension();
                $mime_type = $request->file('imageFile')->getMimeType();
                $size = $request->file('imageFile')->getSize();
                $imageData = getimagesize($request->file('imageFile'));
                $resolution = $imageData[0].' x '.$imageData[1];
                $category = $request->input('category');
                $caption = $request->input('caption');
                $checksum = md5_file($request->file('imageFile'));
                $keywords = $request->input('keywords');

                do {
                    $slug = str_random(24);
                }while(Image::where('slug', $slug)->first() != null);

                if (Image::where('checksum', $checksum)->first() == null)
                {
                    # Store File
                    $uploaded = $request->file('imageFile')->storeAs('public/image-files', $slug.'.'.$extension);

                    $image = Image::create([
                        'user_id' => Auth::user()->id,
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
}
