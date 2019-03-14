<template>
    <div class="container-fluid bg-light-grey">
        <div class="container">
            <div class="row">
                <div class="text-center w-100 col-12">
                    <h3><strong>Start Your Free Trial</strong></h3>
                    <p class="text-muted pt-2"> Subscription will automatically after the free trial ends. Cancel or change your plan any time.</p>
                </div>
                <div class="col-4">
                    <div class="card shadow">
                        <div class="card-body w-100 text-center">
                            <h5 class="card-text">7-day Free Trial</h5>
                            <h2 class="card-title"> FREE</h2>
                            <h5 class="card-text">$2.99 per month after </h5>
                            <a href="#" class="btn btn-primary">Cancel Anytime</a>
                        </div>
                    </div>
                </div>
                <div class="col-8 w-100 p-5 shadow bg-white">
                    <h4 class="mb-3">PayPal <span class="text-primary"><i class="fab fa-cc-paypal"></i></span></h4>
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
                        <hr class="col-12">
                        <h6 class="text-muted"> By submitting this form,you agree to our Terms of Service and Privacy Policy.</h6>
                        <h6 class="text-muted"> If you do not wish to receive information about Picket plans , please send us an email at <a href="#" class="btn-link">plans@picket.com</a></h6>
                        <button type="button" class="btn btn-outline-danger">Continue</button>
                     </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        }
    }
</script>
