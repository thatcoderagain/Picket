<template>
    <div class="container-fluid">
        <h1 class="text-center font-weight-bold p-5">Orders</h1>
        <div class="container">
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
            <div class="pl-3 pr-3 pb-4 pt-1">
                <div class="card mt-5">
                    <div class="card-header bg-dark text-white">
                        <div class="row">
                            <div class="col-12 col-md-4">Order History</div>
                            <div class="col-6 col-md-5">Quantity: {{qty}}</div>
                            <div class="col-12 col-md-3">Amount Paid: {{amount}}</div>
                        </div>
                    </div>
                    <div class="card-body">
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
            <div class="text-center p-3 mb-1">
            <button type="button" class="btn btn-primary btn-lg">Load More</button>

        </div>

        <div class="float-right">
            <h4><span class="badge badge-danger p-2">Grand Total: {{total}}</span></h4>
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
