<template>
    <div class="container-fluid" style="min-height: 80vh;">
        <div class="card p-3 m-3">
            <div class="container">
                <h1 class="text-center font-weight-bold">Transactions</h1>
                    <div class="card">
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
