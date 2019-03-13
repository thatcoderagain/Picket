<style>
#back
{
    background-image: url("https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940/bmw-i8-1600x900_75778-mm-90.jpg");
}
#cardheader
{
    background-color: #B2B9C6 ;
    text-align: center;
    font-family: -webkit-pictograp;
}
</style>

<template>
<div class="">
<div class="fullscreen" id="back">
    <div class="container mt-5 mb-5">
        <div class="row justify-content-center">
            <div class="col-md-8 mb-5">
                <div class="card transparent animated zoomIn">
                    <div class="card-header" id="cardheader"><b>EDIT PROFILE</b></div>

                    <div class="card-body">

                        <div class="form-group" v-show="avatar != null">
                            <div class="col-6 offset-3">
                                <img :src="avatar" class="img-fluid img-thumbnail h-100" alt="Responsive image" width="200px" height="200px;">
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
                                <input id="name" type="text" class="form-control" :class="[ errors != null && errors.hasOwnProperty('name') ? 'is-invalid' : '']" name="name" v-model="name" @keydown="errors = null" required autofocus autocomplete="off">

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
                                <input type="email" class="form-control" :class="[ errors != null && errors.hasOwnProperty('email') ? 'is-invalid' : '']" name="email" v-model="email" @keydown="errors = null" required autofocus autocomplete="off">

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

                        <div class="form-group row">
                            <label for="bio" class="col-md-4 col-form-label text-md-right">Bio</label>

                            <div class="col-md-6">
                                <input type="text" class="form-control" :class="[ errors != null && errors.hasOwnProperty('bio') ? 'is-invalid' : '']" name="bio" v-model="bio" @keydown="errors = null" required autocomplete="off">

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
                                <input type="location" class="form-control" :class="[ errors != null && errors.hasOwnProperty('location') ? 'is-invalid' : '']" name="location" v-model="location" @keydown="errors = null" required>

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
                            <label for="specialisation" class="col-md-4 col-form-label text-md-right">Specialisation</label>

                            <div class="col-md-6">
                                <input type="specialisation" class="form-control" :class="[ errors != null && errors.hasOwnProperty('specialisation') ? 'is-invalid' : '']" name="specialisation" v-model="specialisation" @keydown="errors = null" required>

                                <template v-if="errors != null && errors.hasOwnProperty('specialisation')">
                                    <span class="text-danger" role="alert">
                                        <strong>
                                            {{ errors.specialisation[0] }}
                                        </strong>
                                    </span>
                                </template>
                            </div>
                        </div>

                     <div class="form-group row">
                    <legend class="col-md-4 col-form-label text-md-right">Radios</legend>
                    <div class="col-">
                <div class="form-check">
                 <input class="" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                <label class="form-check-label" for="gridRadios1">
                 Male
                </label>
            </div>
                <div class="form-check">
                    <input class="" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                    <label class="form-check-label" for="gridRadios2">
                     Female
                    </label>
                </div>
        </div>
    </div>

                <div class="form-group row">
                            <label for="mobile" class="col-md-4 col-form-label text-md-right">Mobile</label>

                            <div class="col-md-6">
                                <input type="mobile" class="form-control" :class="[ errors != null && errors.hasOwnProperty('mobile') ? 'is-invalid' : '']" name="mobile" v-model="mobile" @keydown="errors = null" required>

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
                                <input type="mobile" class="form-control" :class="[ errors != null && errors.hasOwnProperty('age') ? 'is-invalid' : '']" name="age" v-model="age" @keydown="errors = null" required>

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
                                <input type="charges" class="form-control" :class="[ errors != null && errors.hasOwnProperty('charges') ? 'is-invalid' : '']" name="charges" v-model="charges" @keydown="errors = null" required>

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
</div>
</template>

<script>
    export default {
        props: [],
        data() {
            return {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
                location: '',
                bio:'',
                gender:'',
                specialisation:'',
                errors: null,

                avatar: null,
                imageFile: null,
            }
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
                // UNCOMMNET TO PUT SIZE CONDITION BACK
                //this.sizeMB(this.imageFile.size) < 2 ? this.sizeError = true : this.sizeError = false;
            },
            attemptRegister() {
                let url = '/api/register';
                
            }
        }
    }
</script>
