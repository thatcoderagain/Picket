<template>
    <span>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <button class="btn text-white" data-toggle="modal" data-target="#CartModal" @click="cartModal({showCartModal: true})">
                    <i class="fas fa-shopping-cart"></i>
                    <span class="badge badge-default">{{ cartCount }}</span>
                    Cart&nbsp;
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
                        <router-link tag="a" to="/gallery" class="dropdown-item">Gallery</router-link>
                        <router-link tag="a" to="/purchases" class="dropdown-item">Purchases</router-link>
                        <router-link tag="a" to="/transactions" class="dropdown-item">Transactions</router-link>
                        <router-link tag="a" to="/edit-profile" class="dropdown-item">Edit Profile</router-link>
                        <router-link tag="a" to="/logout" class="dropdown-item">Logout</router-link>
                    </div>
                </li>
            </template>
        </ul>
    </span>
</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

    export default {
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
