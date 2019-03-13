<template>
    <div class="container-fluid bg-light-grey pt-5 pb-5">
        <div class="col-sm-12 col-md-10 offset-1 shadow bg-white rounded">
            <div class="row">
                <div class="col-md-8 col-sm-12 p-3">
                    <div class="" style="align-content: center;">
                        <center>
                            <img :src="StoragePath(image.slug)" alt="placeholder" class="img-fluid" style="max-height: 600px">
                        </center>
                    </div>
                    <div class="media">
                        <img :src="StoragePath(image.slug)" class="m-3 rounded-circle" alt="" width="50" height="50">
                        <div class="media-body">
                            <button class="btn btn-link btn-lg pl-0 mt-3">@{{ image.user != null ? image.user.username : 'anonymous' }}</button>
                            <h5 class="mt-0 text-capitalize">&nbsp;{{ image.caption }}</h5>
                            <big>
                                <span v-for="keyword in image.keywords" class="m-1 p-1 text-lowercase badge badge-secondary">#{{ keyword.keyword }}</span>&nbsp;
                            </big>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 col-sm-12 p-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="m-1">
                                <h4 class="mt-0 text-left font-weight-bold">Category: <span class="font-italic small">{{ image.category }}</span></h4>
                                <h4 class="mt-0 text-left font-weight-bold">Type: <span class="font-italic small">{{ image.mime_type }}</span></h4>
                                <h4 class="mt-0 text-left font-weight-bold">Resolution: <span class="font-italic small">{{ image.resolution }}</span></h4>
                                <h4 class="mt-0 text-left font-weight-bold">Size: <span class="font-italic small">{{ image.size | fsize }}</span></h4>
                            </div>
                        </div>
                    </div>
                    <div class="mt-3">
                        <button type="button" class="btn btn-danger w-50"> <i class="fas fa-cart-plus"></i>&nbsp;&nbsp;ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: this.$route.params.id,
                image: {},
            }
        },
        created() {
            this.fetchImageInfo();
        },
        methods: {
            fetchImageInfo(){
                let url = '/api/fetchImageInfo/'+this.id;
                axios.post(url)
                .then((response) => {
                    let json = response.data;
                    console.log(json);
                    this.image = json;
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        }
    }

</script>
