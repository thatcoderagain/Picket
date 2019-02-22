<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Login</div>

                    <div class="card-body">

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control" name="email" v-model="email" required autofocus>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control" name="password" v-model="password" required>

                                <template v-if="errors">
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ errors }}</strong>
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
                                <button type="button" class="btn btn-primary" v-on:click="attemptLogin()">
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
    export default {
        props: [],
        data() {
            return {
                email: '',
                password: '',
                keep: '',

                errors: null,
                user: null
            }
        },
        methods: {
            attemptLogin() {
                let url = '/api/login';
                axios({
                    method: 'post',
                    responseType: 'json',
                    url: url,
                    withCredentials: false,
                    data: {
                        'email': this.email,
                        'password': this.password
                    }
                })
                .then((response) => {
                    let json = response.data;
                    console.log(json);
                    alert(json);
                    if (json.success == true) {
                        this.user = json.user;
                    } else {
                        this.errors = json.error;
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        },
        computed: {

        }
    }
</script>
