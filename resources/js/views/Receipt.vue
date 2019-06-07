<template>
    <div class="container-fluid">
        <div class="card p-3 m-3">
            <div class="container">
                <div class="row">
                    <h1 class="font-weight-bold">Receipt</h1>
                    <h3 class="font-weight-bold">Transaction ID: PAY-545455</h3>
                </div>
                <div class="row">
                    <div class="col-12 col-md-4"><b>Order</b> #{{number}}</div>
                    <div class="col-6 col-md-5 font-weight-bold">User Name:</div>
                    <div class="col-12 col-md-3 font-weight-bold">Grand Total:</div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-4"><b>Placed:</b> {{order_date}}</div>
                    <div class="col-6 col-md-5">{{username}}</div>
                    <div class="col-12 col-md-3">{{total}}</div>
                </div>
                <div class="row">
                    <div class="card">
                        <div class="card-header bg-dark text-white">
                            <div class="row">
                                <div class="col-12 col-md-4">Order History</div>
                                <div class="col-6 col-md-5">Quantity: {{qty}}</div>
                                <div class="col-12 col-md-3">Amount Paid: {{amount}}</div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12">
                                    <div class="p-2">
                                        <div class="media bg-white shadow">
                                            <div class="p-1">
                                                <img class="align-self-start square-100 " src="https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Generic placeholder image" >
                                            </div>
                                            <div class="media-body ml-2">
                                                <div class="w-100">
                                                    <div class="float-right mt-2 mb-2 p-2">
                                                        <span class="badge badge-success"><big>{{status}}</big></span>
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
                                    <div class="p-2">
                                        <div class="media bg-white shadow">
                                            <div class="p-1">
                                                <img class="align-self-start square-100 " src="https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Generic placeholder image" >
                                            </div>
                                            <div class="media-body ml-2">
                                                <div class="w-100">
                                                    <div class="float-right mt-2 mb-2 p-2">
                                                        <span class="badge badge-success"><big>{{status}}</big></span>
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
            props: [],
            data() {
                return {
                    qty:'6',
                    amount: '700',
                    username:'Ishita Taneja',
                    total:'Rs.1098',
                    order_date:'Sun,30Dec',
                    number:'8578956',
                    caption: 'Maybelline New York Fit Me Matte',
                    price: '₹1000',
                    resolution: '500x800',
                    mime_type: 'jpeg',
                    status:'Success'

                }
            }
        }
    </script>
