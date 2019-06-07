<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Image;
use App\Models\Keyword;

class SearchController extends Controller
{
    public function search($query)
    {
        $words = explode(" ", $query);

        $captionResult = Image::query();
        foreach ($words as $word){
            $captionResult = $captionResult->orWhere('caption', 'like', '%'.$word.'%');
        }

        $captionResult = $captionResult->get();

        $categoriesResult = Image::query();
        foreach ($words as $word){
            $categoriesResult = $categoriesResult->orWhere('category', 'like', '%'.$word.'%');
        }

        $categoriesResult = $categoriesResult->get();


        $queryKeywords = Keyword::with('images');
        foreach ($words as $word){
                $queryKeywords = $queryKeywords->where('keyword','like','%'.$query.'%');
        }
        $queryKeywords = $queryKeywords->distinct()
            ->get()
            ->map(function ($keyword) {
                foreach($keyword->images as $image)
                    return $image->id;
            })->toArray();

        $keywordResult = Image::whereIn('id', $queryKeywords)->get();
        $images = $keywordResult->merge($categoriesResult)->merge($captionResult);

        return $images;
    }
}
