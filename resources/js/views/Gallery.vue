<template>
    <div>
         <button id="modalButton" type="button" v-show="false" class="btn btn-primary" data-toggle="modal" data-target="#modalVM">Modal
         </button>

         <div class="modal fade mt-5" id="modalVM" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class=" m-0 p-0">
                        <div class="embed-responsive embed-responsive-16by9 ">
                            <img class="embed-responsive-item" :src="modalSrc" allowfullscreen/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid mt-4">
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
                this.modalSrc = data.image.src;
                document.getElementById('modalButton').click();
            });
        },
        data() {
            return {
                modalSrc: null,
                images: [
                    {
                        id: 123,
                        src: 'https://hdqwalls.com/download/minimalism-plane-ot-1600x900.jpg',
                        keywords: ['bhoori', 'poori'],
                        category: 'Festival',
                    },
                    {
                        id: 133,
                        src: 'http://wallpoper.com/images/00/36/92/04/outer-space_00369204.jpg',
                        keywords: ['bhoori', 'poori'],
                        category: 'Festival',
                    },
                ]
            }
        }
    }
</script>
