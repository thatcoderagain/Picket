<template>
    <div class="card-deck">
        <div class="card border-primary overflow-hidden m-1 p-0" @mouseover="footer=true" @mouseleave="footer=false">
            <div class="embed-responsive embed-responsive-16by9">
                <img class="embed-responsive-item card-img-top" v-bind:src="this.StoragePath(image.slug)" alt="Card image cap" @click="openModal(image)">
            </div>
            <div class="card-footer animated position-absolute fixed-bottom mb-0 p-0" :class="[footer ? 'slideInUp' : 'slideOutDown']">

                <div class="card bg-white text-dark m-0 p-3">
                    <div class="text-justify">
                        <span class="text-right font-weight-bold">Category: {{ image.category }}</span>
                    </div>
                    <div class="form-group m-0 p-0">
                        <button type="button" class="btn btn-primary btn-sm">Photographer</button>
                        <button type="button" class="btn btn-danger btn-sm">Add to Cart</button>
                        <router-link tag="a" :to="'/image/' + image.id" class="btn btn-success btn-sm">Open Image</router-link>
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
