<template>
    <div>
        <transition-group enter-active-class="animated fast slideInRight" leave-active-class="animated fast slideOutRight" mode="out-in">

            <div class="modal animated h-100 w-100" :key="'modal'" id="CartModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" :aria-hidden="!showCartModal" :aria-modal="showCartModal"  @click="hideCartModal" :class="[showCartModal ? 'd-block slideInRight' : 'd-none slideOutRight faster']">

                <div id="cart" class="col-sm-11 offset-sm-1 col-md-7 offset-md-5 col-lg-4 offset-lg-8" role="document">
                    <!-- CART -->
                    <div class="row bg-white border border-white p-0">
                        <div class="col-12 p-0">
                            <div class="p-2 shadow bg-dark text-white mb-2 mt-0 ml-0 mr-0 pt-3">
                                <h4 class="text-center font-weight-bold"><i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;CART</h4>
                            </div>
                        </div>
                        <div class="col-12" v-for="image in cart">
                            <div class="p-2 shadow bg-white border border-white">
                                <div class="media bg-light border border-white shadow">
                                    <div class="p-2 mr-1">
                                        <img class="align-self-start square-80 " :src="StorageImageThumbnails(image.slug)" alt="Cart Item Image" >
                                    </div>
                                    <div class="media-body ml-1 mt-1">
                                        <div class="w-100">
                                            <div class="float-right">
                                                <button class="btn btn-link text-dark btn-sm"><i class="fas fa-trash-alt" @click="removeImageFromCart(image)"></i>
                                                </button>
                                            </div>
                                            <div class="m-0 p-0">
                                                <h6 class="m-0 p-1 text-muted font-weight-bold">{{ image.caption }}</h6>
                                            </div>
                                            <div class="m-0 p-0">
                                                <h6 class="m-0 p-1 text-muted"><span class="font-weight-bold">Resolution:</span> {{ image.resolution }}</h6>
                                            </div>
                                            <div class="m-0 p-0">
                                                <h6 class="m-0 p-1 text-muted"><span class="font-weight-bold">{{ image.mime_type  }}</span></h6>
                                            </div>
                                        </div>
                                        <div class="w-100 text-right">
                                            <hr class="w-100 mb-0">
                                            <h6 class="mt-1 mb-2 mr-3"><span class="font-weight-bold">{{ imagePrice(image) | inr }}</span></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="border shadow mt-1">
                                <div class="card">
                                    <div class="card-header bg-dark text-white pb-1">
                                        <h4 class="font-weight-bold">
                                            Payment Details
                                        </h4>
                                    </div>
                                    <div class="card-body pt-1 pb-1">
                                        <div class="row p-2">
                                            <h6 class="card-title w-50 text-left font-weight-bold">Bag Total</h6>
                                            <h6 class="card-title w-50 text-right font-weight-bold">{{ bagTotal | inr }}</h6>
                                        </div>
                                        <div class="row p-2 text-success">
                                            <h6 class="card-title w-50 text-left font-weight-bold">Discount</h6>
                                            <h6 class="card-title w-50 text-right font-weight-bold">-{{ discount }}%</h6>
                                        </div>
                                        <div class="row p-2 text-success">
                                            <h6 class="card-title w-50 text-left font-weight-bold">Sub Total</h6>
                                            <h6 class="card-title w-50 text-right font-weight-bold">{{ grandTotal | inr }}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="p-2">
                                <div class="row">
                                    <div class="col float-right p-2 pb-0 text-muted ">
                                        <h5 class="float-left w-5 m-0 ml-3 mt-1">
                                            <span class="text-center font-weight-bold m-0">Grand Total: </span>{{ grandTotal | inr }}
                                        </h5>
                                        <div class="float-right w-50 m-0">
                                            <button class="btn btn-block btn-dark m-0" @click="payment()" :disabled="cart.length == 0">Proceed</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-backdrop show" id="modal-backdrop" v-if="showCartModal" :key="'bg'"></div>

        </transition-group>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

    export default {
        computed: {
            ...mapState([
                'cart', 'discount', 'showCartModal'
            ]),
            ...mapGetters([
                'bagTotal', 'grandTotal'
            ]),
        },
        methods: {
            ...mapActions([
                'removeFromCart', 'cartModal'
            ]),
            removeImageFromCart(image) {
                this.removeFromCart({image: image});
            },
            hideCartModal(event) {
                if ((event.target.contains(document.getElementById('cart'))))
                    this.cartModal({showCartModal: false});
            },
            payment() {
                $('#CartModal').click();
                if (this.$router.history.current.name !== 'PaymentMode')
                    this.$router.push('/payment-mode');
            }
        },
    }
</script>
