<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h5 class="text-muted text-left font-weight-bold mt-5"> Choose Payment Method</h5>
            </div>
            <div class="col-sm-12 col-md-3 mt-3">
                <div class="list-group" id="list-tab" role="tablist">
                    <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">PayPal</a>

                    <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Credit/Debit Card</a>
                </div>
            </div>
            <div class="col-5 w-100 mt-3 p-5 shadow bg-white">
                <div class="tab-pane fade show active position-absoulte" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
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
                <div class="tab-pane fade position-absoulte" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                    <h4 class="mb-3">Credit/Debit Card <span class="text-primary"><i class="fas fa-credit-card"></i></span></h4>
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
                    </div>
                </div>
            </div>
            <div class="col-3 w-100 mt-3 p-5 m-3 shadow bg-white">
                jhu
            </div>
         </div>
    </div>


</template>
