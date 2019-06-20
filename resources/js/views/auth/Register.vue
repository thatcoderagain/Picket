<template>
    <div class="container-fluid">
        <div class="fullscreen row h-100 blur" :style="'background-image:url('+bgImageSrc+');'"></div>
        <div class="pt-5 pb-5">

            <div class="container mt-5">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-header">Register</div>

                            <div class="card-body">

                                <div class="form-group row">
                                    <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                                    <div class="col-md-6">
                                        <input type="text" class="form-control" :class="[ errors != null && errors.hasOwnProperty('name') ? 'is-invalid' : '']" name="name" v-model="name" @keydown="errors = null" required autofocus autocomplete="off">

                                        <template v-if="errors != null && errors.hasOwnProperty('name')">
                                            <span class="text-danger" role="alert">
                                                <strong>
                                                    {{ errors.name[0] }}
                                                </strong>
                                            </span>
                                        </template>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="username" class="col-md-4 col-form-label text-md-right">Username</label>

                                    <div class="col-md-6">
                                        <input id="username" type="text" class="form-control" :class="[ errors != null && errors.hasOwnProperty('username') ? 'is-invalid' : '']" name="username" v-model="username" @keydown="errors = null" required autocomplete="off">

                                        <template v-if="errors != null && errors.hasOwnProperty('username')">
                                            <span class="text-danger" role="alert">
                                                <strong>
                                                    {{ errors.username[0] }}
                                                </strong>
                                            </span>
                                        </template>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                    <div class="col-md-6">
                                        <input id="email" type="email" class="form-control" :class="[ errors != null && errors.hasOwnProperty('email') ? 'is-invalid' : '']" name="email" v-model="email" @keydown="errors = null" required>

                                        <template v-if="errors != null && errors.hasOwnProperty('email')">
                                            <span class="text-danger" role="alert">
                                                <strong>
                                                    {{ errors.email[0] }}
                                                </strong>
                                            </span>
                                        </template>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                    <div class="col-md-6">
                                        <input id="password" type="password" class="form-control" :class="[ errors != null && errors.hasOwnProperty('password') ? 'is-invalid' : '']" name="password" v-model="password" @keydown="errors = null" required>

                                        <template v-if="errors != null && errors.hasOwnProperty('password')">
                                            <span class="text-danger" role="alert">
                                                <strong>
                                                    {{ errors.password[0] }}
                                                </strong>
                                            </span>
                                        </template>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="password_confirmation" class="col-md-4 col-form-label text-md-right">Password Confirmation</label>

                                    <div class="col-md-6">
                                        <input id="password_confirmation" type="password" class="form-control" :class="[ errors != null && errors.hasOwnProperty('password') ? 'is-invalid' : '']" name="password_confirmation" v-model="password_confirmation" @keydown="errors = null" required>

                                        <template v-if="errors != null && errors.hasOwnProperty('password')">
                                            <span class="text-danger" role="alert">
                                               <strong>
                                                   {{ errors.password[0] }}
                                               </strong>
                                            </span>
                                        </template>
                                    </div>
                                </div>

                                <div class="form-group row mb-0">
                                    <div class="col-md-6 offset-md-4">
                                        <button type="submit" class="btn btn-primary" v-on:click="attemptRegister()">
                                            Register
                                        </button>
                                    </div>
                                </div>
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
                bgImageSrc: this.StorageWebImages('authentication-page-background.jpeg'),
                name: '',
                username: '',
                email: '',
                password: '',
                password_confirmation: '',

                errors: null
            }
        },
        methods: {
            attemptRegister() {
                let url = '/api/auth/register';
                axios.post(url, {
                    'name': this.name,
                    'username': this.username,
                    'email': this.email,
                    'password': this.password,
                    'password_confirmation': this.password_confirmation
                })
                .then((response) => {
                    let json = response.data;
                    console.log(json);
                    if (json.success == true) {
                        this.user = json.user;
                        this.$router.push('/login');
                    } else {
                        this.errors = json.errors;
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>
