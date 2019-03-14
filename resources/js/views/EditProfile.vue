<template>
    <div class="animated slideUp">
        <div class="fullscreen row pb-5" :style="'background-image:url('+bgImageSrc+');'">
            <div class="mt-5 mb-5">
                <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">

                    <div class="card transparent animated zoomIn">

                        <h4 class="card-header text-center">Edit Profile</h4>

                        <div class="card-body">

                            <div class="form-group" v-show="avatar != null">
                                <div class="col-6 offset-4">
                                    <img :src="avatar" class="img-fluid img-thumbnail square-240" alt="Responsive image">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="name" class="col-md-4 col-form-label text-md-right">Profile Image</label>
                                <div class="col-md-6">
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" accept="image/*" v-show="true" ref="FileInput" @change="onFileSelected">
                                        <label class="custom-file-label" for="customFile">Choose image</label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" :class="[ errors != null && errors.hasOwnProperty('name') ? 'is-invalid' : '']" name="name" v-model="user.name" @keydown="errors = null" required autocomplete="off">

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
                                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                                <div class="col-md-6">
                                    <input type="email" class="form-control" :class="[ errors != null && errors.hasOwnProperty('email') ? 'is-invalid' : '']" name="email" v-model="user.email" @keydown="errors = null" required autocomplete="off">

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
                                <label for="bio" class="col-md-4 col-form-label text-md-right">Bio</label>

                                <div class="col-md-6">

                                    <textarea text="textarea" class="form-control" placeholder="Bio..." :class="[ errors != null && errors.hasOwnProperty('bio') ? 'is-invalid' : '']" name="bio" v-model="user.photographer.bio" @keydown="errors = null" required autocomplete="off"></textarea>

                                    <template v-if="errors != null && errors.hasOwnProperty('bio')">
                                        <span class="text-danger" role="alert">
                                            <strong>
                                                {{ errors.bio[0] }}
                                            </strong>
                                        </span>
                                    </template>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="location" class="col-md-4 col-form-label text-md-right">Location</label>

                                <div class="col-md-6">
                                    <input type="location" class="form-control" :class="[ errors != null && errors.hasOwnProperty('location') ? 'is-invalid' : '']" name="location" v-model="user.photographer.location" @keydown="errors = null" required>

                                    <template v-if="errors != null && errors.hasOwnProperty('location')">
                                        <span class="text-danger" role="alert">
                                            <strong>
                                                {{ errors.location[0] }}
                                            </strong>
                                        </span>
                                    </template>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="specialization" class="col-md-4 col-form-label text-md-right">Specialization</label>

                                <div class="col-md-6">
                                    <input type="specialization" class="form-control" :class="[ errors != null && errors.hasOwnProperty('specialization') ? 'is-invalid' : '']" name="specialization" v-model="user.photographer.specialization" @keydown="errors = null" required>

                                    <template v-if="errors != null && errors.hasOwnProperty('specialization')">
                                        <span class="text-danger" role="alert">
                                            <strong>
                                                {{ errors.specialization[0] }}
                                            </strong>
                                        </span>
                                    </template>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-md-4 col-form-label text-md-right">Radios</label>
                                <div class="col-">
                                    <div class="form-check">
                                        <input class="" type="radio" name="maleRadio" value="male" v-model="user.photographer.sex" checked>
                                        <label class="form-check-label" for="maleRadio">
                                            Male
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="" type="radio" name="femaleRadio" value="female" v-model="user.photographer.sex">
                                        <label class="form-check-label" for="femaleRadio">
                                            Female
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="" type="radio" name="otherRadio" value="other" v-model="user.photographer.sex">
                                        <label class="form-check-label" for="otherRadio">
                                            Other
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="mobile" class="col-md-4 col-form-label text-md-right">Mobile</label>

                                <div class="col-md-6">
                                    <input type="mobile" class="form-control" :class="[ errors != null && errors.hasOwnProperty('mobile') ? 'is-invalid' : '']" name="mobile" v-model="user.photographer.mobile" @keydown="errors = null" required>

                                    <template v-if="errors != null && errors.hasOwnProperty('mobile')">
                                        <span class="text-danger" role="alert">
                                            <strong>
                                                {{ errors.mobile[0] }}
                                            </strong>
                                        </span>
                                    </template>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="age" class="col-md-4 col-form-label text-md-right">Age</label>

                                <div class="col-md-6">
                                    <input type="number" min="5" class="form-control" :class="[ errors != null && errors.hasOwnProperty('age') ? 'is-invalid' : '']" name="age" v-model="user.photographer.age" @keydown="errors = null" required>

                                    <template v-if="errors != null && errors.hasOwnProperty('age')">
                                        <span class="text-danger" role="alert">
                                            <strong>
                                                {{ errors.age[0] }}
                                            </strong>
                                        </span>
                                    </template>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="charges" class="col-md-4 col-form-label text-md-right">Charges</label>

                                <div class="col-md-6">
                                    <input type="charges" class="form-control" :class="[ errors != null && errors.hasOwnProperty('charges') ? 'is-invalid' : '']" name="charges" v-model="user.photographer.charges" @keydown="errors = null" required>

                                    <template v-if="errors != null && errors.hasOwnProperty('charges')">
                                        <span class="text-danger" role="alert">
                                            <strong>
                                                {{ errors.charges[0] }}
                                            </strong>
                                        </span>
                                    </template>
                                </div>
                            </div>


                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-primary" v-on:click="attemptRegister()">
                                        Save Changes
                                    </button>
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
                bgImageSrc: '/storage/images/edit-profile-page-background.jpeg',

                errors: null,
                avatar: null,
                imageFile: null,
                password: '',
                user: {
                    name: '',
                    email: '',
                    email_verified_at: '',
                    photographer: {
                        sex: '',
                        dob: '',
                        location: '',
                        mobile: '',
                        specialization: '',
                        charges: '',
                    }
                },
            }
        },
        mounted(){
            this.fetchUserInfo();
        },
        methods: {
            onFileSelected(event) {
                this.imageFile = event.target.files[0];
                let reader = new FileReader();
                reader.readAsDataURL(this.imageFile);
                reader.onload = event => {
                    console.log(event);
                    this.avatar = event.target.result;
                }
            },
            fetchUserInfo() {
                let url = '/api/editProfile';
                axios.post(url)
                .then((response) => {
                    let json = response.data;
                    console.log(json);
                    this.user = json;
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>
