<template>
    <div class="container mt-5" :style="'background-image:url('+bgImageSrc+');'">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Login</div>

                    <div class="card-body">

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control" :class="[ errors != null ? 'is-invalid' : '']" name="email" v-model="email" @keydown="errors = null" v-on:keyup.enter="attemptLogin()" required autofocus>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control" :class="[ errors != null ? 'is-invalid' : '']" name="password" v-model="password" @keydown="errors = null"v-on:keyup.enter="attemptLogin()" required>

                                <template v-if="errors != null">
                                    <span class="text-danger" role="alert">
                                        <strong v-for="error in errors">
                                            {{ error }}
                                        </strong>
                                    </span>
                                </template>
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" v-model="keep">

                                    <label class="form-check-label" for="remember">
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="button" class="btn btn-primary" :class="[errors != null ? 'disabled' : '']" v-on:click="attemptLogin()">
                                    Login
                                </button>
                                <router-link to="/password-reset" class="btn btn-link">Forgot Your Password?</router-link>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        props: [],
        data() {
            return {
                bgImageSrc: 'auth-page-backgroud.jpg',
                email: '',
                password: '',
                keep: '',

                errors: null,
                user: null
            }
        },
        methods: {
            ...mapActions([
                'login'
            ]),
            attemptLogin() {
                let url = '/api/login';
                axios.post(url, {
                    'email': this.email,
                    'password': this.password
                })
                .then((response) => {
                    let json = response.data;
                    console.log(json);
                    if (json.success == true) {
                        this.user = json.user;
                        this.login({user: this.user});
                        this.$router.push('/');
                    } else {
                        this.errors = json.error;
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>
