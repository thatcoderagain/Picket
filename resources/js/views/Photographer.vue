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
                    <img class="border border-white rounded square-240 animated slideInLeft" :src="StorageImageProfiles(image)">
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
                    <h4 class="text-success text-capitalize text-right animated slideInRight">
                        <span class="small text-muted">Specialization </span><br>{{ specialization }}
                    </h4>
                    <hr class="w-100">
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
                    this.sex = this.hideNullWithUnavailable(json.photographer.sex);
                    this.dob = this.hideNullWithUnavailable(json.photographer.dob);
                    this.mobile = this.hideNullWithUnavailable(json.photographer.mobile);
                    this.specialization = this.hideNullWithUnavailable(json.photographer.specialization);
                    this.location = this.hideNullWithUnavailable(json.photographer.location);
                    this.charges = this.hideNullWithUnavailable(json.photographer.charges);
                    this.bio = this.hideNull(json.photographer.bio);
                    this.image = json.photographer.image;
                })
                .catch((error) => {
                    console.log(error);
                });
            },
        }
    }
</script>
