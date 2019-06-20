<template>
    <div class="container-fluid">
        <div class="fullscreen row h-100 blur" :style="'background-image:url('+bgImageSrc+');'"></div>

        <div class="pt-5">
            <div class="animated zoomIn p-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <h2 class="font-weight-bold text-white text-center animated shake">{{ username }}</strong></h2>
                        </div>
                        <div class="col-md-9">
                            <div class="animated pulse">
                                <router-link v-if="auth.user.username == $route.params.username" tag="a" to="/edit-profile" class="btn btn-outline-success float-right">Edit Profile</router-link>
                                <!-- <router-link tag="a" to="/edit-profile" class="btn btn-outline-success float-right">Book Photographer</router-link> -->
                            </div>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-3">
                            <img class="border border-white rounded square-240 animated slideInLeft" :src="StorageImageProfiles(image)">
                        </div>

                        <div class="col-md-5 w-100">
                            <div class="animated slideInUp">
                                <h3 class="text-success">Name: <span class="text-white float-right">{{ name }}</span></h3>
                                <h3 class="text-success">Age: <span class="text-white float-right">{{ dob | age }}</span></h3>
                                <h3 class="text-success">Sex: <span class="text-white float-right text-capitalize">{{ sex }}</span></h3>
                                <h4 class="text-success">Location: <span class="text-white float-right text-capitalize">{{ location }}</span></h4>
                                <!-- <h3 class="text-success">Charges: <span class="text-white float-right">{{ charges | inr }}&nbsp;<span class="text-muted">per/day</span></span></h3> -->
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

            <ImageViewer :images="images" :margin="0"></ImageViewer>
            <ImageModal></ImageModal>
        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
    import ImageViewer from './components/ImageViewer';
    import ImageModal from './components/ImageModal';

    export default {
        components: {
            ImageViewer: ImageViewer,
            ImageModal: ImageModal,
        },
        data() {
            return {
                bgImageSrc: this.StorageWebImages('photographer-page-backgroud.jpeg'),
                images: [],
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
        computed: {
            ...mapState([
                'auth'
                ]),
        },
        created(){
            this.fetchPhotographerInfo();
            this.fetchPhotographerImages();
        },
        methods: {
            fetchPhotographerInfo() {
                let url = '/api/user/fetch/'+this.username;
                axios.post(url)
                .then((response) => {
                    let json = response.data;
                    console.log(json);

                    this.name = json.name;
                    this.email = json.email;
                    this.sex = this.printOrDefault(json.photographer.sex, 'Not Available');
                    this.dob = this.printOrDefault(json.photographer.dob, 'Not Available');
                    this.mobile = this.printOrDefault(json.photographer.mobile, 'Not Available');
                    this.specialization = this.printOrDefault(json.photographer.specialization, 'Not Available');
                    this.location = this.printOrDefault(json.photographer.location, 'Not Available');
                    this.charges = this.printOrDefault(json.photographer.charges, 'Not Available');
                    this.bio = this.printOrDefault(json.photographer.bio, '');
                    this.image = json.photographer.image;
                })
                .catch((error) => {
                    console.log(error);
                });
            },
            fetchPhotographerImages() {
               EventBus.$emit('loading');
               let url = 'api/image/photographer/'+this.username;
               axios.post(url)
               .then((response) => {
                let json = response.data;
                console.log(json);
                this.images = json;
                EventBus.$emit('loaded');
            })
               .catch((error) => {
                console.log(error);
            });
           }
       }
   }
</script>
