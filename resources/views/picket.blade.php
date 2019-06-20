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

        <CartModal></CartModal>
        <router-view></router-view>
        <Navbar style="position: absolute; top: 0; left: 0; right: 0;"></Navbar>
        {{-- <Footbar></Footbar> --}}
    </div>
@endsection
