<template>
    <span>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <button class="btn text-white" data-toggle="modal" data-target="#CartModal" @click="cartModal({showCartModal: true})">
                    <i class="fas fa-shopping-cart">
                    </i>&nbsp;&nbsp;Cart&nbsp;&nbsp;
                    <span class="badge badge-light">{{ cartCount }}</span>
                </button>
            </li>
            <!-- Authentication Links -->
            <template v-if="!(auth.user)">
                <router-link tag="li" to="/login" class="nav-item">
                    <a class="nav-link">Login</a>
                </router-link>
                <router-link tag="li" to="/register" class="nav-item">
                    <a class="nav-link">Register</a>
                </router-link>
            </template>
            <!-- User Profile Options -->
            <template v-else>
                <li class="nav-item dropdown">
                    <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{ auth.user.name }} <span class="caret"></span>
                    </a>

                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <router-link tag="a" to="/edit-profile" class="dropdown-item">Edit Profile</router-link>
                        <Logout></Logout>
                    </div>
                </li>
            </template>
        </ul>
    </span>
</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
    import Logout from './../auth/Logout';

    export default {
        components: {
            Logout: Logout,
        },
        computed: {
            ...mapState([
                'auth', 'showCartModal'
            ]),
            ...mapGetters([
                'cartCount'
            ]),
        },
        methods: {
            ...mapActions([
                'cartModal'
            ]),
        }
    }
</script>
