@extends('layouts.app')

@section('title', 'Picket')

@section('content')
    <div class="container-fuild">

        @if ($message = Session::get('success'))
            <Notification msg="{{ $message }}" status="primary"></Notification>
            <?php Session::forget('success');?>
        @endif
        @if ($message = Session::get('error'))
            <Notification msg="{{ $message }}" status="danger"></Notification>
            <?php Session::forget('error');?>
        @endif

        <Navbar></Navbar>
        <CartModal ></CartModal>
        <router-view></router-view>
        {{-- <Footbar></Footbar> --}}
    </div>
@endsection
