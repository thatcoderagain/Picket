<template>
    <div class="animated slideUp">
        <div class="fullscreen row h-100 blur" :style="'background-image:url('+bgImageSrc+');'"></div>
        <div class="pt-5 pb-5">
            <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-5">

                <div class="card transparent animated zoomIn">

                    <h4 class="card-header text-center">Edit Profile</h4>

                    <div class="card-body mb-5">

                        <transition-group enter-active-class="animated zoomIn" leave-active-class="animated zoomOut" mode="in-out">

                            <div key="form" class="position-relative">
                                <div class="form-group" v-show="avatar != null">
                                    <div class="col-6 offset-4">
                                        <img :src="avatar" class="img-fluid img-thumbnail square-240" alt="Responsive image">
                                    </div>
                                </div>
                                <div class="form-group" v-show="avatar == null">
                                    <div class="col-6 offset-4">
                                        <img :src="StorageImageProfiles(image)" class="img-fluid img-thumbnail square-240" alt="Responsive image">
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="name" class="col-md-4 col-form-label text-md-right">Profile Image</label>
                                    <div class="col-md-6">
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" accept="image/*" v-show="true" @change="onFileSelected">
                                            <label class="custom-file-label" for="customFile">Choose image</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="username" class="col-md-4 col-form-label text-md-right">Username</label>
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" :class="[ errors != null && errors.hasOwnProperty('username') ? 'is-invalid' : '']" name="username" v-model="username" @keydown="errors = null" autocomplete="off" readonly="true">

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
                                    <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" :class="[ errors != null && errors.hasOwnProperty('name') ? 'is-invalid' : '']" name="name" v-model="name" @keydown="errors = null" autocomplete="off">

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
                                        <input type="email" class="form-control" :class="[ errors != null && errors.hasOwnProperty('email') ? 'is-invalid' : '']" name="email" v-model="email" @keydown="errors = null" autocomplete="off" readonly="true">

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
                                    <label for="bio" class="col-md-4 col-form-label text-md-right">Bio</label>

                                    <div class="col-md-6">

                                        <textarea text="textarea" class="form-control" placeholder="Bio..." :class="[ errors != null && errors.hasOwnProperty('bio') ? 'is-invalid' : '']" name="bio" v-model="bio" @keydown="errors = null" autocomplete="off"></textarea>

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
                                        <input type="location" class="form-control" :class="[ errors != null && errors.hasOwnProperty('location') ? 'is-invalid' : '']" name="location" v-model="location" @keydown="errors = null" autocomplete="off">

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
                                        <input type="specialization" class="form-control" :class="[ errors != null && errors.hasOwnProperty('specialization') ? 'is-invalid' : '']" name="specialization" v-model="specialization" @keydown="errors = null" autocomplete="off">

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
                                    <label class="col-md-4 col-form-label text-md-right">Sex</label>

                                    <div class="col-6">
                                        <div class="form-check">
                                            <input class="" type="radio" name="maleRadio" value="male" v-model="sex" checked>
                                            <label class="form-check-label" for="maleRadio">
                                                Male
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="" type="radio" name="femaleRadio" value="female" v-model="sex">
                                            <label class="form-check-label" for="femaleRadio">
                                                Female
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="" type="radio" name="otherRadio" value="other" v-model="sex">
                                            <label class="form-check-label" for="otherRadio">
                                                Other
                                            </label>
                                        </div>

                                        <template v-if="errors != null && errors.hasOwnProperty('sex')">
                                            <span class="text-danger" role="alert">
                                                <strong>
                                                    {{ errors.sex[0] }}
                                                </strong>
                                            </span>
                                        </template>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="mobile" class="col-md-4 col-form-label text-md-right">Mobile</label>

                                    <div class="col-md-6">
                                        <input type="mobile" class="form-control" :class="[ errors != null && errors.hasOwnProperty('mobile') ? 'is-invalid' : '']" name="mobile" v-model="mobile" @keydown="errors = null" autocomplete="off">

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
                                    <label for="dob" class="col-md-4 col-form-label text-md-right">Date of Birth</label>

                                    <div class="col-md-6">
                                        <input type="date" min="5" class="form-control" :class="[ errors != null && errors.hasOwnProperty('dob') ? 'is-invalid' : '']" name="dob" v-model="dob" @keydown="errors = null" autocomplete="off">

                                        <template v-if="errors != null && errors.hasOwnProperty('dob')">
                                            <span class="text-danger" role="alert">
                                                <strong>
                                                    {{ errors.dob[0] }}
                                                </strong>
                                            </span>
                                        </template>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="charges" class="col-md-4 col-form-label text-md-right">Charges</label>

                                    <div class="col-md-6">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="basic-addon1"><i class="fas fa-rupee-sign"></i></span>
                                            </div>
                                            <input type="charges" class="form-control" :class="[ errors != null && errors.hasOwnProperty('charges') ? 'is-invalid' : '']" name="charges" v-model="charges" @keydown="errors = null" autocomplete="off">
                                            <div class="input-group-append">
                                                <span class="input-group-text">Per Day</span>
                                            </div>
                                        </div>

                                        <template v-if="errors != null && errors.hasOwnProperty('charges')">
                                            <span class="text-danger" role="alert">
                                                <strong>
                                                    {{ errors.charges[0] }}
                                                </strong>
                                            </span>
                                        </template>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                    <div class="col-md-6">
                                        <div class="input-group">
                                            <input id="password" :type="[ showPassword ? 'text' : 'password']" class="form-control" :class="[ errors != null && errors.hasOwnProperty('password') ? 'is-invalid' : '']" name="password" v-model="password" @keydown="errors = null" autocomplete="off">
                                            <div class="input-group-append" @click="showPassword=!showPassword">
                                                <button class="btn" type="button" v-show="showPassword"> <i class="fas fa-eye"></i> </button>
                                                <button class="btn" type="button" v-show="!showPassword"> <i class="fas fa-eye-slash"></i> </button>
                                            </div>
                                        </div>

                                        <template v-if="errors != null && errors.hasOwnProperty('password')">
                                            <span class="text-danger" role="alert">
                                                <strong>
                                                    {{ errors.password[0] }}
                                                </strong>
                                            </span>
                                        </template>
                                    </div>
                                </div>

                                <div class="form-group row" v-if="password.length > 0">
                                    <label for="password" class="col-md-4 col-form-label text-md-right">Old Password</label>

                                    <div class="col-md-6">
                                        <div class="input-group">
                                            <input id="password" :type="[ showOldPassword ? 'text' : 'password']" class="form-control" :class="[ errors != null && errors.hasOwnProperty('old_password') ? 'is-invalid' : '']" name="old_password" v-model="old_password" @keydown="errors = null" autocomplete="off">
                                            <div class="input-group-append" @click="showOldPassword=!showOldPassword">
                                                <button class="btn" type="button" v-show="showOldPassword"> <i class="fas fa-eye"></i> </button>
                                                <button class="btn" type="button" v-show="!showOldPassword"> <i class="fas fa-eye-slash"></i> </button>
                                            </div>
                                        </div>

                                        <template v-if="errors != null && errors.hasOwnProperty('old_password')">
                                            <span class="text-danger" role="alert">
                                                <strong>
                                                    {{ errors.old_password[0] }}
                                                </strong>
                                            </span>
                                        </template>
                                    </div>
                                </div>

                                <div class="form-group row mb-0">
                                    <div class="col-md-6 offset-md-4">
                                        <button type="submit" class="btn btn-primary" @click="updateUserInfo()">
                                            <i class="fas fa-save"></i>&nbsp;&nbsp;&nbsp;Save Changes
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div key="alert" class="col-8 offset-2 alert alert-success" v-if="updated">
                                <span class="text-muted font-weight-bold">Profile Update Successfully.</span>
                            </div>

                        </transition-group>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

    export default {
        props: [],
        data() {
            return {
                bgImageSrc: this.StorageWebImages('edit-profile-page-background.jpeg'),

                errors: null,
                avatar: null,
                image: null,
                imageFile: null,
                password: '',
                showPassword: false,
                showOldPassword: false,
                updated: false,
                old_password: '',

                username: '',
                name: '',
                email: '',
                email_verified_at: '',
                sex: '',
                dob: '',
                mobile: '',
                specialization: '',
                location: '',
                charges: '',
                bio: '',
            }
        },
        created(){
            this.fetchUserInfo();
        },
        computed: {
            ...mapState([
                'auth'
            ]),
        },
        methods: {
            onFileSelected(event) {
                if(event != null)
                    this.imageFile = event.target.files[0];
                if (this.imageFile != null) {
                    let reader = new FileReader();
                    reader.readAsDataURL(this.imageFile);
                    reader.onload = (event) => {
                        console.log(event);
                        this.avatar = event.target.result;
                    }
                }
            },
            fetchUserInfo() {
                let url = '/api/user/fetch';
                axios.post(url)
                .then((response) => {
                    let json = response.data;
                    console.log(json);

                    this.username = json.username;
                    this.name = json.name;
                    this.email = json.email;
                    this.sex = json.photographer.sex;
                    this.dob = this.hideNull(json.photographer.dob);
                    this.mobile = this.hideNull(json.photographer.mobile);
                    this.specialization = this.hideNull(json.photographer.specialization);
                    this.location = this.hideNull(json.photographer.location);
                    this.charges = this.hideNull(json.photographer.charges);
                    this.bio = this.hideNull(json.photographer.bio);
                    this.image = json.photographer.image;
                    this.onFileSelected();
                })
                .catch((error) => {
                    console.log(error);
                });
            },
            updateUserInfo() {
                let url = '/api/user/update';
                let formData = new FormData();
                formData.append('username', this.username);
                formData.append('name', this.name);
                formData.append('email', this.email);
                formData.append('sex', this.sex);
                formData.append('dob', this.dob);
                formData.append('mobile', this.mobile);
                formData.append('specialization', this.specialization);
                formData.append('location', this.location);
                formData.append('charges', this.charges);
                formData.append('bio', this.bio);
                formData.append('image', this.imageFile);

                if(this.password.length > 0) {
                    formData.append('password', this.password);
                    formData.append('old_password', this.old_password);
                }

                axios.post(url, formData)
                .then((response) => {
                    let json = response.data;
                    console.log(json);

                    if (json.hasOwnProperty('success') && json.success) {
                        this.updated = true;
                        setTimeout(() => {this.updated = false}, 3000);
                    }
                    else {
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
