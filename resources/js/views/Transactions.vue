<template>
    <div class="container-fluid">
        <div class="card p-3 m-3">
            <div class="container">
                <h1 class="text-center font-weight-bold">Transactions</h1>
                    <div class="card">
                        <div class="card-header bg-dark text-white">
                            <div class="row">
                                <div class="col-2">Date</div>
                                <div class="col-7">Transaction ID</div>
                                <div class="col-3 text-right">Amount</div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-2">23rd-May-2014</div>
                                <div class="col-7 pl-0">
                                    <router-link tag="a" to="/receipt/10" class="btn btn-link">
                                        TransactionID
                                    </router-link>
                                </div>
                                <div class="col-3 text-right">{{ 45 | inr }}</div>
                                <hr class="w-100">
                            </div>
                        </div>
                    </div>
                    <div class="p-3 mb-1">
                        <button type="button" class="btn btn-primary">Previous</button>
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
