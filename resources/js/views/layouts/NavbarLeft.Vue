<template>
    <ul class="navbar-nav mr-auto">

        <router-link tag="li" to="/" class="nav-item">
            <a class="nav-link">Home</a>
        </router-link>

        <!-- <router-link tag="li" to="/plans" class="nav-item">
            <a class="nav-link">Plans</a>
        </router-link> -->

        <router-link tag="li" to="/images" class="nav-item">
            <a class="nav-link">Images</a>
        </router-link>

        <template v-if="auth.user">
            <router-link tag="li" to="/upload" class="nav-item">
                <a class="nav-link">Upload</a>
            </router-link>
        </template>

        <template v-if="auth.user">
            <router-link tag="li" to="/resizer" class="nav-item">
                <a class="nav-link">Resize Image</a>
            </router-link>
        </template>

    </ul>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        computed: {
            ...mapState([
                'auth'
            ])
        },
    }


</script>
