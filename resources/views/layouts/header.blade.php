<nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
    <div class="container-fluid">
        <router-link to="/">
            <a class="navbar-brand btn-link">{{ config('app.name', 'Laravel') }}</a>
        </router-link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Left Side Of Navbar -->
            @include('layouts.navbar-left')

            <!-- Right Side Of Navbar -->
            @include('layouts.navbar-right')
        </div>
    </div>
</nav>
