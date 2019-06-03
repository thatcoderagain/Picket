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
                        <router-link tag="a" to="/edit-profile" class="dropdown-item">Edit Profile
                        </router-link>

                        <a class="dropdown-item" href="/logout"
                           @click.prevent="attemptLogout()">
                            Logout
                        </a>
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
                'logout', 'cartModal'
            ]),
            attemptLogout() {
                let url = '/api/auth/logout';
                axios.post(url)
                .then((response) => {
                    let json = response.data;
                    console.log(json);
                    if (json.success == true) {
                        this.user = json.user;
                        this.logout();
                        delete window.axios.defaults.headers.common["Authorization"];
                        this.$router.push('/login');
                    } else {
                        this.errors = json.error;
                    }
                })
                .catch((e) => {
                    console.error(e);
                });
            }
        }
    }
</script>
