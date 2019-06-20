<template>
    <div class="container-fluid">
        <div :style="'margin-top: ' + margin + 'px;'">
            <LoadingImages v-if="!loaded"></LoadingImages>
            <div v-else-if="images.length == 0" class="row">
                <div class="card border border-white col-sm-12 col-md-8 offset-md-2 mt-5 mb-5">
                    <h3 class="text-center text-muted font-weight-bold p-5"><i class="far fa-images"></i> No Image found </h3>
                </div>
            </div>
            <div v-else class="row">
                <div class="col-sm-6 col-md-4 col-lg-3" v-for="image, i in images" :key="image.id">
                    <div v-if="(((page-1)*page_size) <= i ) && (((page)*page_size) > i ) ">
                        <ImageCard :image="image"></ImageCard>
                    </div>
                </div>
                <div class="col-12 mt-5 mb-5">
                    <h3 class="text-muted text-center w-100">
                        <button type="button" class="btn btn-lg btn-secondary ml-5 mr-5" @click="back()" :disabled="!showBackButton"><i class="fas fa-backward"></i> Back</button>
                        Page: {{ page }} / {{ totalPages }}
                        <button type="button" class="btn btn-lg btn-secondary ml-5 mr-5" @click="next()" :disabled="!showNextButton">Next <i class="fas fa-forward"></i></button>
                    </h3>
                </div>
        </div>
        </div>
    </div>

</div>
</template>

<script>
    import LoadingImages from './../animations/LoadingImages';
    import ImageCard from './ImageCard';

    export default {
        props: [
            'images', 'margin'
        ],
        components: {
            LoadingImages: LoadingImages,
            ImageCard: ImageCard,
        },
        data () {
            return {
                page : 1,
                page_size: 12,
                loaded: false
            }
        },
        created() {
            EventBus.$on('loaded', () => {
                this.loaded = true;
            });
            EventBus.$on('loading', () => {
                this.loaded = false;
            });
        },
        methods : {
            back() {
                if (this.page > 1) {
                    this.page--;
                }
            },
            next() {
                if (this.images.length > this.page * this.page_size) {
                    this.page++;
                }
            }
        },
        computed: {
            showBackButton: function () {
                return (this.page > 1);
            },
            showNextButton: function () {
                return (this.images.length > this.page * this.page_size);
            },
            totalPages: function () {
                return Math.ceil(this.images.length / this.page_size);
            }
        }
    }
</script>
