<template>
    <span>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <button class="btn text-white" data-toggle="modal" data-target="#modalVM"><i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;Cart</button>
            </li>
            <!-- Authentication Links -->
            <template v-if="guest">
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
    import { mapState, mapMutations, mapActions } from 'vuex';

    export default {
        computed: {
            ...mapState([
                'guest', 'auth'
            ])
        },
        methods: {
            ...mapActions([
                'logout'
            ]),
            attemptLogout() {
                let url = '/api/logout';
                axios.post(url)
                .then((response) => {
                    let json = response.data;
                    console.log(json);
                    if (json.success == true) {
                        this.user = json.user;
                        this.logout();
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
