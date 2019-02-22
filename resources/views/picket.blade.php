@extends('layouts.app')

@section('title', 'Picket')

@section('content')
    <div class="container-fuild">
        @include('layouts.header')
        <router-view></router-view>
    </div>
@endsection
