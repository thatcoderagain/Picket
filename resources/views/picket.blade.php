@extends('layouts.app')

@section('title', 'Picket')

@section('content')
    <div class="container-fuild">
        @if ($message = Session::get('success'))
        <div class="alert-success">
            <p>{!! $message !!}</p>
        </div>
        <?php Session::forget('success');?>
        @endif
        @if ($message = Session::get('error'))
        <div class="alert-danger">
            <p>{!! $message !!}</p>
        </div>
        <?php Session::forget('error');?>
        @endif
        <Navbar></Navbar>
        <CartModal ></CartModal>
        <router-view></router-view>
    </div>
@endsection
