@extends('layouts.app')

@section('title', 'Picket')

@section('content')
        Payment STATUS
        @if ($message = Session::get('success'))
            <div class="w3-panel w3-green w3-display-container">
                <p>{!! $message !!}</p>
            </div>
            <?php Session::forget('success');?>
        @endif
        @if ($message = Session::get('error'))
            <div class="w3-panel w3-red w3-display-container">
                <p>{!! $message !!}</p>
            </div>
            <?php Session::forget('error');?>
        @endif
@endsection
