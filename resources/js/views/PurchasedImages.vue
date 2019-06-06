<template>
    <div>
         <button class="btn btn-primary" id="modalButton" type="button" data-toggle="modal" data-target="#modalVM" v-show="false">Modal
         </button>

         <div class="modal fade mt-5" id="modalVM" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg pt-5" role="document">
                <div class="modal-content">
                    <div class="m-0 p-0">
                        <div style="border: 1px solid red;">
                            <img class="img-thumbnail w-100" :src="StoragePath(modalSrc)" allowfullscreen/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row" id="im">
                <div class="col-sm-6 col-md-4 col-lg-3" v-for="image in images" :key="image.id">
                    <PurchasedImageCard :image="image"></PurchasedImageCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PurchasedImageCard from './components/PurchasedImageCard';

    export default {
        components: {
            PurchasedImageCard : PurchasedImageCard ,
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
                let url = 'api/fetchAllImages';
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
