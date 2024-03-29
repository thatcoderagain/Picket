<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- Fonts -->
        <link rel="dns-prefetch" href="//fonts.gstatic.com">

        <!-- Title -->
        <title>@yield('title', config('app.name', 'Laravel'))</title>

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        @yield('style')
    </head>

    <body>
        <div id="app">
            @yield('content')
        </div>

        <!-- Scripts -->
        {{-- <script src="{!! asset('js/alert.js') !!}" defer></script> --}}
        <script src="{!! asset('js/app.js') !!}" defer></script>
        {{-- @yield('script') --}}
    </body>
</html>
