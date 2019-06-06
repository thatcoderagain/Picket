<template>
    <div class="card-deck">
        <div class="card border-primary overflow-hidden m-1 p-0" @mouseover="footer=true" @mouseleave="footer=false">
            <div class="embed-responsive embed-responsive-16by9" if="loaded">
                <div class="embed-responsive-item card-img-top d-flex justify-content-center pt-5" :class="[ loaded ? 'visible' : '']">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                <img class="embed-responsive-item card-img-top" :src="StoragePath(image.slug)" alt="Card Image" @click="openModal(image)" onload="loaded=true" :class="[ loaded ? 'visible' : '']">
            </div>
            <div class="card-footer animated position-absolute fixed-bottom mb-0 p-0" :class="[footer ? 'slideInUp' : 'slideOutDown']">

                <div class="card bg-white text-dark m-0 p-3">
                    <div class="text-justify">
                        <span class="text-right font-weight-bold">Category: {{ image.category }}</span>
                    </div>
                    <div class="form-group m-0 p-0">
                        <button type="button" class="btn btn-primary btn-sm">Photographer</button>
                        <button type="button" class="btn btn-danger btn-sm">Download</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: [
            'image'
        ],
        data() {
            return {
                loaded: true,
                footer: false,
            }
        },
        methods: {
            openModal(image) {
                EventBus.$emit('showModal', {
                    image: image
                });
            }
        }
    }
</script>

<style>

</style>
