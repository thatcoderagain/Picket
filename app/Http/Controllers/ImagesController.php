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
        return Image::all();
    }

    public function getCategories()
    {
        return [
            'Art',
            'Cartoon',
            'Education',
            'Festival',
            'Music',
            'Medicinal',
            'Tourism',
        ];
    }

    public function uploadImage(Request $request)
    {
        if ($request->hasFile('imageFile'))
        {
            if ($request->file('imageFile')->isValid())
            {
                // $fileName = $request->file('imageFile')->getClientOriginalName();
                $extension = $request->file('imageFile')->getClientOriginalExtension();
                $meme_type = $request->file('imageFile')->getMimeType();
                $size = $request->file('imageFile')->getSize();
                $imageData = getimagesize($request->file('imageFile'));
                $resolution = $imageData[0].' x '.$imageData[1];
                $category = $request->input('category');
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
                        'meme_type' => $meme_type,
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
