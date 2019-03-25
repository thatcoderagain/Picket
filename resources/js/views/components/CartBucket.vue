<template>
    <div class="row">
        <div class="col-12">
            <h5 class="text-center font-weight-bold">CART</h5>
        </div>
        <div class="col-12">
            <div class="p-2">
                <div class="media bg-white shadow">
                    <div class="p-1">
                        <img class="align-self-start square-100 " src="https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Generic placeholder image" >
                    </div>
                    <div class="media-body ml-2">
                        <div class="w-100">
                            <div class="float-right">
                                <button class="btn btn-link btn-sm"><i class="fas fa-trash-alt"></i>
                                </button>
                            </div>
                            <div class="m-0 p-0">
                                <span class="text-muted text-left font-weight-bold">{{ caption }}</span>
                            </div>
                            <div class="m-0 p-0">
                                <span class="m-0 p-1 text-left ">{{ resolution }}</span>
                            </div>
                            <div class="m-0 p-0">
                                <span class="m-0 p-1 text-left ">{{ mime_type  }}</span>
                            </div>
                        </div>
                        <div class="w-100 text-right">
                            <hr class="w-100 m-0 p-1">
                            <span class="">{{ price  }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="card bg-light">
                <div class="card-header">Payment Details</div>
                <div class="card-body">
                    <div class="row w-100">
                        <span class="card-title float-left">Bag Total</span>
                        <span class="card-title float-right">{{ bagtotal }}</span>
                    </div>
                    <div class="row w-100">
                        <span class="card-title float-left">Discount</span>
                        <span class="card-title float-right">{{ discount }}</span>
                    </div>
                    <div class="row w-100">
                        <span class="card-title float-left">Sub Total</span>
                        <span class="card-title float-right">{{ subtotal }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="align-bottom">
                <div class="row">
                    <div class="col float-right m-2">
                        <span class="text-center font-weight-bold">Grand Total:</span>
                        <span class="text-center font-weight-bold">{{ GrandTotal }}</span>
                        <div class="float-right w-50">
                            <button type="button" class="btn btn-block btn-danger m-0">PROCEED</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
