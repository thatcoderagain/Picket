<template>
    <div>
         <button class="btn btn-primary" id="modalButton" type="button" data-toggle="modal" data-target="#modalVM" v-show="false">Modal
         </button>

         <div class="modal fade mt-5" id="modalVM" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="m-0 p-0">
                        <div class="embed-responsive embed-responsive-16by9">
                            <img class="embed-responsive-item" :src="StoragePath(modalSrc)" allowfullscreen/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-3" v-for="image in images">
                    <ImageCard :image="image" :key="image.id"></ImageCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ImageCard from './components/Image';
    export default {
        components: {
            ImageCard: ImageCard,
        },
        created() {
            EventBus.$on('showModal', (data) => {
                this.modalSrc = data.image.slug;
                document.getElementById('modalButton').click();
            });
            this.fetchImages();
        },
        data() {
            return {
                modalSrc: null,
                images: [],
            }
        },
        methods: {
            fetchImages() {
                let url = 'api/fetchImages';
                axios.post(url)
                .then((response) => {
                    let json = response.data;
                    console.log(json);
                    this.images = json;
                })
                .catch((error) => {
                    console.log(error);
                });
            },
            StoragePath(string) {
                return '/storage/image-files/'+string;
            }
        }
    }
</script>
