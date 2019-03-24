<template>
    <ul class="navbar-nav mr-auto">

        <router-link tag="li" to="/" class="nav-item">
            <a class="nav-link">Home</a>
        </router-link>

        <router-link tag="li" to="/about" class="nav-item">
            <a class="nav-link">About</a>
        </router-link>

        <router-link tag="li" to="/plans" class="nav-item">
            <a class="nav-link">Plans</a>
        </router-link>

        <router-link tag="li" to="/gallery" class="nav-item">
            <a class="nav-link">Gallery</a>
        </router-link>

        <!-- @auth -->
            <router-link tag="li" to="/upload" class="nav-item">
                <a class="nav-link">Upload</a>
            </router-link>
        <!-- @endauth -->

    </ul>
</template>
