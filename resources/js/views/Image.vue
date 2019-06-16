<template>
    <div class="container-fluid">
        <div class="card p-3 m-3">
        <div class="row">
            <div class="col-sm col-md-10 offset-md-1 shadow bg-white rounded">
                <div class="row">
                    <div class="col-md-8 col-sm-12">
                        <div class="p-3">
                            <div class="animated zoomIn">
                                <center>
                                    <img :src="StorageImageWatermarks(image.slug)" alt="placeholder" class="img-fluid" style="max-height: 600px">
                                </center>
                            </div>
                            <div class="media animated slideInUp">
                                <img :src="StorageImageProfiles(image.photographer.image)" class="m-3 rounded-circle" alt="" width="50" height="50">
                                <div class="media-body">
                                    <router-link tag="button" :to="'/photographer/' + image.user.username" class="btn btn-link btn-lg pl-0 mt-3">@{{ image.user != null ? image.user.username : 'anonymous' }}</router-link>
                                    <h5 class="mt-0 text-capitalize">&nbsp;{{ image.caption }}</h5>
                                    <big>
                                        <span v-for="keyword in image.keywords" class="m-1 p-1 text-lowercase badge badge-secondary animated swing slow infin">#{{ keyword.keyword }}</span>&nbsp;
                                    </big>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-12">
                        <div class="p-3">
                            <div class="card animated fadeInRight">
                                <div class="card-body">
                                    <div class="m-1">
                                        <h4 class="mt-0 text-left font-weight-bold">Category: <span class="font-italic small">{{ image.category }}</span></h4>
                                        <h4 class="mt-0 text-left font-weight-bold">Resolution: <span class="font-italic small">{{ image.resolution }}</span></h4>
                                        <h4 class="mt-0 text-left font-weight-bold">Downloads: <span class="font-italic small">{{ image.downloads }}</span></h4>
                                        <h4 class="mt-0 text-left font-weight-bold">Type: <span class="font-italic small">{{ image.mime_type }}</span></h4>
                                        <h4 class="mt-0 text-left font-weight-bold">Size: <span class="font-italic small">{{ image.size | fsize }}</span></h4>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-3 overflow-hidden animated fadeInUpBig">

                            <template v-if="!image.purchased && !image.own">
                                <transition enter-active-class="animated flipInY faster" leave-active-class="animated flipOutY faster" mode="out-in">
                                    <button :key="'add'" type="button" class="btn btn-success btn-sm text-white w-100 p-2" @click="addImageToCart()" v-if="!inCart()">Add to Cart</button>
                                    <button :key="'remove'" type="button" class="btn btn-danger btn-sm text-white w-100 p-2" @click="removeImageFromCart()" v-if="inCart()">Remove From Cart</button>
                                </transition>
                            </template>
                            <template v-else-if="image.own">
                                <button type="button" class="btn btn-primary btn-sm text-white w-100 p-2" @click="downloadImage()">Download <i class="fas fa-star"></i></button>
                            </template>
                            <template v-else>
                                <button type="button" class="btn btn-primary btn-sm text-white w-100 p-2" @click="downloadImage()">Download <i class="fas fa-download"></i></button>
                            </template>
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
    import { mapState, mapActions } from 'vuex';

    export default {
        data() {
            return {
                id: this.$route.params.id,
                image: {
                    category: '',
                    mime_type: '',
                    resolution: '',
                    size: '',
                    downloads: '',
                    purchased: false,
                    own: false,
                    user:{username:null},
                    photographer:{image:null}},
            }
        },
        created() {
            this.fetchImages();
        },
        computed: {
            ...mapState([
                'cart'
            ]),
        },
        methods: {
            ...mapActions([
                'addToCart', 'removeFromCart'
            ]),
            fetchImages(){
                let url = '/api/image/image/'+this.id;
                axios.post(url)
                .then((response) => {
                    let json = response.data;
                    console.log(json);
                    this.image = json;
                })
                .catch((error) => {
                    console.error(error);
                });
            },

            downloadImage() {
                EventBus.$emit('requested', {
                    requested: true
                });
                let id = this.image.id;
                axios({
                    method: 'post',
                    url: 'api/image/download/'+id,
                    responseType: 'arraybuffer', // important
                })
                .then((response) => {
                    EventBus.$emit('requested', {
                        requested: false
                    });
                    var blob = new Blob([response.data],{type:'application/octet-stream'});
                    downloadjs(blob, this.image.slug, 'application/octet-stream');
                    // console.log(blob);
                    console.log('File ready to download');
                })
                .catch(function (error) {
                    EventBus.$emit('requested', {
                        requested: false
                    });
                    console.log(error);
                });
            },
            addImageToCart() {
                this.addToCart({image: this.image});
            },
            removeImageFromCart() {
                this.removeFromCart({image: this.image});
            },
            inCart() {
                let exists = this.cart.find((image) => {
                    return image.id === this.image.id;
                });
                return exists ? true : false;
            }
        }
    }
</script>
