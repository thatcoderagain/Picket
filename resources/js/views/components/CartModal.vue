<style>
#s {
    div {
        border: 1px solid red;
    }
}
</style>
<template>
    <div>
        <button class="btn btn-primary" id="modalButton" type="button" data-toggle="modal"
        data-target="#modalVM" v-show="true" ref="modalButton">Modal</button>

        <div class="modal animated slideInRight delay-2 h-100" id="modalVM" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div id="s" class="col-sm-11 offset-sm-1 col-md-7 offset-md-5 col-lg-4 offset-lg-8" role="document">
                <!-- CART -->
                <div class="row bg-white border border-white p-0">
                    <div class="col-12">
                        <div class="p-2 shadow bg-white border border-white mb-2">
                            <h4 class="text-center font-weight-bold">CART</h4>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="p-2 shadow bg-white border border-white">
                            <div class="media bg-light border border-white shadow">
                                <div class="p-2 mr-1">
                                    <img class="align-self-start square-80 " src="https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Cart Item Image" >
                                </div>
                                <div class="media-body ml-1 mt-1">
                                    <div class="w-100">
                                        <div class="float-right">
                                            <button class="btn btn-link text-danger btn-sm"><i class="fas fa-trash-alt"></i>
                                            </button>
                                        </div>
                                        <div class="m-0 p-0">
                                            <h6 class="m-0 p-1 text-muted font-weight-bold">{{ caption }}</h6>
                                        </div>
                                        <div class="m-0 p-0">
                                            <h6 class="m-0 p-1 text-muted"><span class="font-weight-bold">Resolution:</span> {{ resolution }}</h6>
                                        </div>
                                        <div class="m-0 p-0">
                                            <h6 class="m-0 p-1 text-muted"><span class="font-weight-bold">{{ mime_type  }}</span></h6>
                                        </div>
                                    </div>
                                    <div class="w-100 text-right">
                                        <hr class="w-100">
                                        <h6 class="mt-0 mb-2 mr-3"><span class="font-weight-bold">{{ price  }}</span></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="border shadow mt-1">
                            <div class="card">
                                <div class="card-header pb-1">
                                    <h4 class="font-weight-bold">
                                        Payment Details
                                    </h4>
                                </div>
                                <div class="card-body pt-1 pb-1">
                                    <div class="row p-2">
                                        <h6 class="card-title w-50 text-left">Bag Total</h6>
                                        <h6 class="card-title w-50 text-right">{{ bagtotal }}</h6>
                                    </div>
                                    <div class="row p-2">
                                        <h6 class="card-title w-50 text-left">Discount</h6>
                                        <h6 class="card-title w-50 text-right">{{ discount }}</h6>
                                    </div>
                                    <div class="row p-2">
                                        <h6 class="card-title w-50 text-left">Sub Total</h6>
                                        <h6 class="card-title w-50 text-right">{{ subtotal }}</h6>
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
                                        <span class="text-center font-weight-bold m-0">Grand Total: </span>{{ GrandTotal }}
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
    export default {
        data() {
            return {
                modal: null,
                caption: 'Maybelline New York Fit Me Matte',
                price: '₹1000',
                resolution: '500x800',
                mime_type: 'jpeg',
                price: '₹850',
                bagtotal: '₹1000',
                discount: '-₹150',
                subtotal: '₹850',
                GrandTotal:'₹850',
            }
        }
    }

</script>
