
@extends('layouts.app')

@section('title', 'Home')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    {!! Form::open(['method' => 'POST', 'route' => 'routeName', 'class' => 'form-horizontal']) !!}

                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                            {!! Form::label('email', 'Email address') !!}
                            {!! Form::email('email', null, ['class' => 'form-control', 'required' => 'required', 'placeholder' => 'eg: foo@bar.com']) !!}
                            <small class="text-danger">{{ $errors->first('email') }}</small>
                        </div>

                        <div class="form-group{{ $errors->has('inputname') ? ' has-error' : '' }}">
                            {!! Form::label('inputname', 'Input label') !!}
                            {!! Form::text('inputname', null, ['class' => 'form-control', 'required' => 'required']) !!}
                            <small class="text-danger">{{ $errors->first('inputname') }}</small>
                        </div>

                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                            {!! Form::label('password', 'Password') !!}
                            {!! Form::password('password', ['class' => 'form-control', 'required' => 'required']) !!}
                            <small class="text-danger">{{ $errors->first('password') }}</small>
                        </div>

                        <div class="form-group{{ $errors->has('password_confirmation') ? ' has-error' : '' }}">
                            {!! Form::label('password_confirmation', 'Password') !!}
                            {!! Form::password('password_confirmation', ['class' => 'form-control', 'required' => 'required']) !!}
                            <small class="text-danger">{{ $errors->first('password_confirmation') }}</small>
                        </div>

                        <div class="btn-group pull-right">
                            {!! Form::reset("Reset", ['class' => 'btn btn-warning']) !!}
                            {!! Form::submit("Add", ['class' => 'btn btn-success']) !!}
                        </div>

                    {!! Form::close() !!}

                </div>
            </div>

            <div id="example"></div>
        </div>
    </div>
</div>
@endsection
