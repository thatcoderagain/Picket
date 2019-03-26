<template>
    <div>
        <button class="btn btn-primary" id="CartModalButton" type="button" data-toggle="modal"
        data-target="#CartModal" v-show="false">Modal</button>

        <div class="modal animated slideInRight h-100" id="CartModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div id="s" class="col-sm-11 offset-sm-1 col-md-7 offset-md-5 col-lg-4 offset-lg-8" role="document">
                <!-- CART -->
                <div class="row bg-white border border-white p-0">
                    <div class="col-12 p-0">
                        <div class="p-2 shadow bg-danger text-white mb-2 mt-0 ml-0 mr-0 pt-3">
                            <h4 class="text-center font-weight-bold"><i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;CART</h4>
                        </div>
                    </div>
                    <div class="col-12" v-for="image in cart">
                        <div class="p-2 shadow bg-white border border-white">
                            <div class="media bg-light border border-white shadow">
                                <div class="p-2 mr-1">
                                    <img class="align-self-start square-80 " :src="StoragePath(image.slug)" alt="Cart Item Image" >
                                </div>
                                <div class="media-body ml-1 mt-1">
                                    <div class="w-100">
                                        <div class="float-right">
                                            <button class="btn btn-link text-danger btn-sm"><i class="fas fa-trash-alt" @click="removeImageFromCart(image)"></i>
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
                                <div class="card-header bg-danger text-white pb-1">
                                    <h4 class="font-weight-bold">
                                        Payment Details
                                    </h4>
                                </div>
                                <div class="card-body pt-1 pb-1">
                                    <div class="row p-2">
                                        <h6 class="card-title w-50 text-left">Bag Total</h6>
                                        <h6 class="card-title w-50 text-right">{{ bagTotal | inr }}</h6>
                                    </div>
                                    <div class="row p-2">
                                        <h6 class="card-title w-50 text-left">Discount</h6>
                                        <h6 class="card-title w-50 text-right">-{{ discount }}%</h6>
                                    </div>
                                    <div class="row p-2">
                                        <h6 class="card-title w-50 text-left">Sub Total</h6>
                                        <h6 class="card-title w-50 text-right">{{ grandTotal | inr }}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="p-2">
                            <div class="row">
                                <div class="col float-right p-2 pb-0">
                                    <h4 class="float-left w-5 m-0 ml-3 mt-1">
                                        <span class="text-center font-weight-bold m-0">Grand Total: </span>{{ grandTotal | inr }}
                                    </h4>
                                    <div class="float-right w-50 m-0">
                                        <button type="button" class="btn btn-block btn-danger m-0">PROCEED</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

    export default {
        computed: {
            ...mapState([
                'cart', 'discount'
            ]),
            ...mapGetters([
                'bagTotal', 'grandTotal'
            ]),
        },
        methods: {
            ...mapActions([
                'removeFromCart'
            ]),
            removeImageFromCart(image) {
                this.removeFromCart({image: image});
            },
        },
    }
</script>
