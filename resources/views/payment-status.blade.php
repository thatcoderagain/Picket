@extends('layouts.app')

@section('title', 'Picket')

@section('content')
        Payment STATUS
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
@endsection
