@extends('layouts.app')

@section('title', 'Picket')

@section('content')
    <div class="container-fuild">
        <Navbar></Navbar>
        <router-view></router-view>
    </div>
@endsection
