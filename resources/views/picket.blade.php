@extends('layouts.app')

@section('title', 'Picket')

@section('content')
    <div class="container-fuild">
        <Navbar></Navbar>
        <CartModal ></CartModal>
        <router-view></router-view>
    </div>
@endsection
