@extends('layouts.app')

@section('title', 'Picket')

@section('content')
    <div class="container-fuild">
        @include('layouts.header')

        <router-view class="mt-3 container-fluid"></router-view>
    </div>
@endsection
