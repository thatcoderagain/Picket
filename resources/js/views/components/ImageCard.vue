<template>
    <div class="card-deck">
        <div class="card border-secondary overflow-hidden m-1 p-0" @mouseover="footer=true" @mouseleave="footer=false">
            <div class="embed-responsive embed-responsive-16by9" if="loaded">
                <div class="embed-responsive-item card-img-top d-flex justify-content-center pt-5" :class="[ loaded ? 'visible' : '']">
                    <div class="spinner-border text-primary" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                <img class="embed-responsive-item card-img-top" :src="StorageImageWatermarks(image.slug)" alt="Card Image" @click="openModal(image)" onload="loaded=true" :class="[ loaded ? 'visible' : '']">
            </div>
            <div class="card-footer animated faster position-absolute fixed-bottom mb-0 p-0" :class="[footer ? 'slideInUp' : 'slideOutDown']">

                <div class="card bg-transparent text-dark m-0 p-3">
                    <div class="text-justify">
                        <span class="text-right font-weight-bold text-muted bg-light p-1">Category: {{ image.category }}</span>
                    </div>
                    <div class="form-group m-0 p-0">
                        <div class="btn-group mt-1" role="group" aria-label="Basic example">
                            <router-link tag="a" :to="'/image/' + image.id" class="btn btn-dark btn-sm">Open Image</router-link>
                            <router-link tag="a" :to="'/photographer/' + image.user.username" class="btn btn-light btn-sm">Photographer</router-link>

                            <template v-if="!image.purchased">
                                <button type="button" class="btn btn-success btn-sm text-white" @click="addImageToCart()" v-if="!inCart()">Add to Cart</button>
                                <button type="button" class="btn btn-danger btn-sm text-white" @click="removeImageFromCart()" v-if="inCart()">Remove From Cart</button>
                            </template>
                            <template v-else>
                                <button type="button" class="btn btn-primary btn-sm text-white" @click="">Download</button>
                            </template>
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
        props: [
            'image'
        ],
        data() {
            return {
                loaded: true,
                footer: false,
            }
        },
        computed: {
            ...mapState([
                'cart'
            ]),
        },
        methods: {
            ...mapActions([
                'addToCart',
                'removeFromCart'
            ]),
            openModal(image) {
                EventBus.$emit('showModal', {
                    image: image
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
