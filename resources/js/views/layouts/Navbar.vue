<template>
    <div>
        <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
            <div class="container-fluid">
                <router-link to="/">
                    <a class="navbar-brand btn-link">Picket</a>
                </router-link>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <NavbarLeft></NavbarLeft>

                    <!-- Right Side Of Navbar -->
                    <NavbarRight></NavbarRight>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    import NavbarLeft from './NavbarLeft';
    import NavbarRight from './NavbarRight';

    export default {
        components: {
            NavbarLeft: NavbarLeft,
            NavbarRight: NavbarRight,
        }
    }
</script>
