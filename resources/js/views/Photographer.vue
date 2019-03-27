<template>
    <div class="bg-dark border border-white p-5">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <h2 class="font-weight-bold text-white text-center animated shake">{{ name }}</strong></h2>
                </div>
                <div class="col-md-9">
                    <div class="animated pulse">
                        <router-link tag="a" to="/edit-profile" class="btn btn-outline-success float-right">Edit Profile</router-link>
                        <router-link tag="a" to="/edit-profile" class="btn btn-outline-success float-right">Book Photographer</router-link>
                    </div>
                </div>
            </div>

            <div class="row mt-3">
                <div class="col-md-3">
                    <img class="border border-white rounded square-240 animated slideInLeft" src="https://as.ftcdn.net/r/v1/pics/ea2e0032c156b2d3b52fa9a05fe30dedcb0c47e3/landing/images_photos.jpg">
                </div>

                <div class="col-md-5 w-100">
                    <div class="animated slideInUp">
                        <h3 class="text-success">Age: <span class="text-white float-right">{{ dob | age }}</span></h3>
                        <h3 class="text-success">Gender: <span class="text-white float-right text-capitalize">{{ sex }}</span></h3>
                        <h4 class="text-success">Location: <span class="text-white float-right text-capitalize">{{ location }}</span></h4>
                        <h3 class="text-success">Charges: <span class="text-white float-right">{{ charges | inr }}&nbsp;<span class="text-muted">per/day</span></span></h3>
                    </div>
                </div>

                <div class="col-md-4">
                    <h4 class="text-success text-capitalize text-right animated slideInRight">{{ specialization }}</h4>
                    <p class="text-white text-right animated slideInRight">{{ bio }}</p>
                    <p class="text-white text-right animated slideInRight"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: this.$route.params.username,
                image: null,
                name: '',
                email: '',
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
        methods: {
            fetchUserInfo() {
                let url = '/api/user/fetch/'+this.username;
                axios.post(url)
                .then((response) => {
                    let json = response.data;
                    console.log(json);

                    this.name = json.name;
                    this.email = json.email;
                    this.sex = json.photographer.sex;
                    this.dob = json.photographer.dob;
                    this.mobile = json.photographer.mobile;
                    this.specialization = json.photographer.specialization;
                    this.location = json.photographer.location;
                    this.charges = json.photographer.charges;
                    this.bio = json.photographer.bio;
                    this.image = json.photographer.image;
                })
                .catch((error) => {
                    console.log(error);
                });
            },
            updateUserInfo() {
                let url = '/api/user/update';
                let formData = new FormData();
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
