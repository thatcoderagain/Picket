<template>
    <div class="bg-white bg-faded">
         <button class="btn btn-primary" id="ImageModalButton" type="button" data-toggle="modal" data-target="#ImageModal" v-show="false">Modal
         </button>

         <div class="modal fade mt-5" id="ImageModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg pt-5" role="document">
                <div class="modal-content">
                    <div class="m-0 p-0">
                        <div class="border border-white">
                            <img class="img-thumbnail w-100" :src="StorageImageWatermarks(modalSrc)" allowfullscreen/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid border border-white" style="min-height: 576px;">
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-3" v-for="image in images" :key="image.id">
                    <ImageCard :image="image"></ImageCard>
                </div>
            </div>
            <div v-if="images.length == 0" class="mt-3 row">
                <div class="alert alert-secondary border border-white col-sm-12 col-md-8 offset-md-2">
                    <h3 class="text-muted font-weight-bold">No Image found.</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ImageCard from './components/ImageCard';

    export default {
        components: {
            ImageCard: ImageCard,
        },
        created() {
            EventBus.$on('showModal', (data) => {
                this.modalSrc = data.image.slug;
                document.getElementById('ImageModalButton').click();
            });
            this.fetchUploadedImages();
        },
        data() {
            return {
                modalSrc: null,
                images: [],
            }
        },
        methods: {
            fetchUploadedImages() {
                let url = 'api/image/images';
                axios.post(url)
                .then((response) => {
                    let json = response.data;
                    console.log(json);
                    this.images = json;
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>
