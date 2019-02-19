@extends('layouts.app')

@section('title', 'Ankita')

@section('content')
<div className="row justify-content-center">
    <div className="col-md-8">
        <div className="card">
            <div className="card-header">{{ __('Login') }}</div>

            <div className="card-body">
                <form method="POST" action="{{ route('login') }}">
                    @csrf

                    <div className="form-group row">
                        <label for="email" className="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                        <div className="col-md-6">
                            <input id="email" type="email" className="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus>

                            @if ($errors->has('email'))
                                <span className="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('email') }}</strong>
                                </span>
                            @endif
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="password" className="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                        <div className="col-md-6">
                            <input id="password" type="password" className="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                            @if ($errors->has('password'))
                                <span className="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('password') }}</strong>
                                </span>
                            @endif
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-md-6 offset-md-4">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                <label className="form-check-label" for="remember">
                                    {{ __('Remember Me') }}
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group row mb-0">
                        <div className="col-md-8 offset-md-4">
                            <button type="submit" className="btn btn-primary">
                                {{ __('Login') }}
                            </button>

                            @if (Route::has('password.request'))
                                <a className="btn btn-link" href="{{ route('password.request') }}">
                                    {{ __('Forgot Your Password?') }}
                                </a>
                            @endif
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection
