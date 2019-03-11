<?php

namespace App\Http\Controllers;

use Auth;
use App\Image;
use App\Keyword;
use Illuminate\Http\Request;

class UploadController extends Controller
{
    public function uploadFile(Request $request)
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

                foreach (explode(',', $keywords) as $keyword) {
                    Keyword::firstOrCreate([
                        'keyword' => $keyword
                    ]);
                }

                do {
                    $slug = str_random(24);
                }while(Image::where('slug', $slug)->first() != null);

                if (Image::where('checksum', $checksum)->first() == null)
                {
                    $image = Image::create([
                        'user_id' => Auth::user()->id,
                        'category' => $category,
                        'meme_type' => $meme_type,
                        'resolution' => $resolution,
                        'size' => $size,
                        'slug' => $slug.$extension,
                        'checksum' => $checksum
                    ]);
                    # Store File
                    $uploaded = $request->file('imageFile')->storeAs('public/image-files', $slug.$extension);
                    return response()->json(['image' => $image->id], 200);
                }
                return response()->json(['error' => 'Duplication Image'], $status = 200);
            }
        }
    }
}
