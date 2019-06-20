<template>
    <div class="container-fluid">
        <div class="fullscreen row h-100 blur" :style="'background-image:url('+bgImageSrc+');'"></div>
        <div class="pt-5 pb-5">
            <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-5">

                <div class="card transparent animated zoomIn">

                    <h4 class="card-header text-center font-weight-bold">Transactions</h4>

                    <div class="card-body mb-5">
                            <div class="card-header bg-dark text-white">
                                <div class="row">
                                    <div class="col-3">Date</div>
                                    <div class="col-6">Transaction ID</div>
                                    <div class="col-3 text-right">Through</div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div v-if="transactions.length > 0">
                                    <div class="row" v-for="transaction, i in transactions">
                                        <div class="col-3">{{ transaction.updated_at | moment }}</div>
                                        <div class="col-6 pl-0">
                                            <router-link tag="a" :to="'/transaction/'+transaction.payment_id" class="btn btn-link">
                                                {{ transaction.payment_id }}
                                            </router-link>
                                        </div>
                                        <div class="col-3 text-right">
                                            <span class="badge badge-primary"><i class="fab fa-paypal"></i></span> <big>Paypal</big>
                                        </div>
                                        <hr class="w-100" v-if="i < transactions.length-1">
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="row">
                                        <div class="col-12">
                                            <h6 class="text-center w-100">No Records found</h6>
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
                bgImageSrc: this.StorageWebImages('transaction-page-background.jpeg'),
                transactions: []
            }
        },
        created() {
            this.fetchTransactions();
        },
        methods: {
            fetchTransactions() {
                let url = 'api/transaction/transactions';
                axios.post(url)
                .then((response) => {
                    let json = response.data;
                    console.log(json);
                    this.transactions = json;
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>
