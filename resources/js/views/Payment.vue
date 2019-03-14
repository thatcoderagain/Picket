<template>
    <div class="container">
        <form class="col-6 offset-3 align-content-center card mt-5" method="POST" id="payment-form"  action="/make-payment">
            <input type="hidden" name="_token" v-model="csrf_token">
            <h2 class="w3-text-blue">Payment Form</h2>
            <p>Demo PayPal form - Integrating paypal in laravel</p>
            <p>
            <div class="form-group">
                <label class="text-dark"><b>Enter Amount</b></label>
                <input class="form-control" name="amount" value="10" readonly="true" type="text" autocomplete="off"></p>
            </div>
            <button class="btn btn-primary">Pay with PayPal</button></p>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                csrf_token: window.axios.defaults.headers.common['X-CSRF-TOKEN'],
            }
        }
    }
</script>
