<template>
    <div class="container-fluid">
        <div class="fullscreen row h-100 blur" :style="'background-image:url('+bgImageSrc+');'"></div>
        <div class="pt-5 pb-5 container">

                <div class="card transparent animated zoomIn mt-5">
                <div class="row pl-5 pr-5 pb-5">

                    <div class="col-12 mb-3">
                        <h4 class="text-muted text-left font-weight-bold mt-5">Choose Payment Method</h4>
                    </div>

                    <div class="col-sm-12 col-md-4">
                        <div class="list-group" id="list-tab" role="tablist">
                            <a class="list-group-item list-group-item-action active" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Paypal</a>

                            <a class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Credit/Debit Card</a>
                        </div>
                    </div>

                    <div class="col-sm-12 col-md-8 p-5 shadow bg-white tab-content">

                        <div class="tab-pane fade show active position-relative" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                            <h4 class="mb-3">PayPal <span class="text-primary"><i class="fab fa-cc-paypal"></i></span></h4>
                            <div class="mb-3">
                                <h6 class="text-muted">Proceed the payemt with <span class="text-primary font-weight-bold">PayPal <i class="fab fa-paypal"></i></span></h6>
                                <form class="form-inline" method="POST" id="payment-form"  :action="'/make-payment?token='+access_token">
                                    <input type="hidden" name="_token" v-model="csrf_token">
                                    <input type="hidden" name="jwt_access_token" v-model="access_token">
                                    <input type="hidden" name="items" v-model="images">
                                    <input type="hidden" name="help" v-model="discount">
                                    <h6 class="text-danger w-100 font-weight-bold" v-if="images.length==0">Cart is empty !!</h6>
                                    <button class="btn btn-outline-primary m-1" :disabled="images.length==0"><i class="fas fa-shopping-cart"></i> Checkout</button>
                                </form>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                            <h4 class="mb-3">Credit/Debit Card <span class="text-primary"><i class="fas fa-credit-card"></i></span></h4>
                            <div class="mb-3">
                                <label>Email</label>
                                <input type="email" class="form-control" placeholder="name@example.com">
                                <div class="invalid-feedback">Please enter a valid email address for shipping updates.
                                </div>
                            </div>
                            <h6> We will not share your information or send spam</h6>
                            <hr>
                            <div class="mb-3">
                                <label>Name On Card</label>
                                <input type="text" class="form-control" placeholder="Picket"  required="">
                            </div>
                            <div class="mb-3">
                                <label>Card Number</label>
                                <input type="text" class="form-control" placeholder="0000 0000 0000 0000" required="">
                            </div>
                            <div class="row">
                                <div class="col-md-3 mb-3">
                                    <label>Expiration</label>
                                    <input type="text" class="form-control" id="cc-expiration" placeholder="MM/YY" required="">
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label>CVV</label>
                                    <input type="text" class="form-control" id="cc-cvv" placeholder="000" required="">
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label>Postal Code</label>
                                    <input type="text" class="form-control" id="cc-postalcode" placeholder="90210" required="">
                                </div>
                                <hr class="w-100">
                                <h6 class="text-muted"> By submitting this form,you agree to our Terms of Service and Privacy Policy.</h6>
                                <h6 class="text-muted"> If you do not wish to receive information about Picket plans , please send us an email at <a href="#" class="btn-link">plans@picket.com</a></h6>
                                <button type="button" class="btn btn-outline-danger m-1" disabled>Continue</button>
                                <p class="w-100 text-danger">Sorry this payment option is not available right now please choose other option.</p>
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
        data() {
            return {
                bgImageSrc: this.StorageWebImages('payment-mode-page-backgroud.jpeg'),
                csrf_token: window.axios.defaults.headers.common['X-CSRF-TOKEN'],
                access_token: '',
                images: [],
            }
        },
        mounted() {
            this.access_token = this.auth.access_token;
            this.images = this.items(this.cart);
        },
        computed: {
            ...mapState([
                'cart', 'discount', 'showCartModal', 'auth'
                ]),
            ...mapGetters([
                'bagTotal', 'grandTotal'
                ]),
        },
        methods: {
            items(array) {
                return array.map((item) => {return item.id});
            }
        }
    }
</script>

