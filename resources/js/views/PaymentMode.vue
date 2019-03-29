<template>
    <div class="container">
        <div class="row">

            <div class="col-12">
                <h5 class="text-muted text-left font-weight-bold mt-5"> Choose Payment Method</h5>
            </div>

            <div class="col-sm-12 col-md-4 mt-3">
                <div class="list-group" id="list-tab" role="tablist">
                    <a class="list-group-item list-group-item-action active" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Paypal</a>

                    <a class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Credit/Debit Card</a>
                </div>
            </div>

            <div class="col-sm-12 col-md-8 mt-3 p-5 shadow bg-white tab-content">

                <div class="tab-pane fade show active position-relative" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                    <h4 class="mb-3">PayPal <span class="text-primary"><i class="fab fa-cc-paypal"></i></span></h4>
                    <div class="mb-3">
                        <h6 class="text-muted">Proceed payemt with the <span class="text-primary font-weight-bold">PayPal <i class="fab fa-paypal"></i></span></h6>
                        <form class="form-inline" method="POST" id="payment-form"  action="/make-payment">
                            <input type="hidden" name="_token" v-model="csrf_token">
                            <input type="hidden" name="items" v-model="images">
                            <button class="btn btn-outline-primary m-1"><i class="fas fa-shopping-cart"></i> Checkout</button>
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
                        <p class="w-100 text-danger">Sorry this payment option is not available right now please choose other options.</p>
                    </div>
                </div>

            </div>
        <!-- <div class="col-3 mt-3 p-5 m-2 shadow bg-white tab-content" v-show="false">
              CART ITEMS
        </div> -->
    </div>
</div>
</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

    export default {
        data() {
            return {
                csrf_token: window.axios.defaults.headers.common['X-CSRF-TOKEN'],
                images: [],
            }
        },
        mounted() {
            this.images = this.items(this.cart);
        },
        computed: {
            ...mapState([
                'cart', 'discount', 'showCartModal'
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

