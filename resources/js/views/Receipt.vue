<template>
    <div class="container-fluid" style="min-height: 80vh;">
        <div class="card p-3 m-3">
            <div class="container">
                <h1 class="text-center font-weight-bold m-3">Transaction Receipt</h1>
                <div class="row m-3">
                    <h5 class="col-6 col-md-12 font-weight-bold">Transaction ID: <span class="font-weight-normal">{{ transaction_id }}</span></h5>
                    <h5 class="col-6 col-md-12 font-weight-bold">Date: <span class="font-weight-normal">{{ date | moment }}</span></h5>
                    <h5 class="col-6 col-md-12 font-weight-bold">Quantity: <span class="font-weight-normal">{{ purchases.length }} images</span></h5>
                    <h5 class="col-6 col-md-12 font-weight-bold">Grand Total: <span class="font-weight-normal">{{ grandTotal | inr }}</span></h5>
                </div>
                <div class="card m-3">
                    <div class="card-header bg-dark text-white">
                        <h5 class="text-center mb-1">Purchased Images</h5>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12" v-for="purchase in purchases">
                                <div class="p-2">
                                    <div class="media bg-white shadow">
                                        <div class="p-1">
                                            <img class="align-self-start square-100 " :src="StorageImageThumbnails(purchase.image.slug)" alt="Image" >
                                        </div>
                                        <div class="media-body ml-2">
                                            <div class="w-100">
                                                <div class="float-right mt-2 mb-2 p-2">
                                                    <span class="badge badge-success"><big>Successful</big></span>
                                                </div>
                                                <div class="m-0 p-0">
                                                    <router-link tag="a" :to="'/image/'+purchase.image.id" class="m-0 p-1 btn btn-link text-muted font-weight-bold">{{ purchase.image.caption }}</router-link>
                                                </div>
                                                <div class="m-0 p-0">
                                                    <span class="m-0 p-1 text-left">{{ purchase.image.resolution }}</span>
                                                </div>
                                                <div class="m-0 p-0">
                                                    <span class="m-0 p-1 text-left">{{ purchase.image.mime_type }}</span>
                                                </div>
                                            </div>
                                            <div class="w-100">
                                                <hr class="w-100 m-0">
                                            </div>
                                            <div class="w-100 text-right">
                                                <div class="m-0 p-0 ">
                                                    <span class="m-0 mr-2 text-right">{{ purchase.amount | inr }}</span>
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
                purchases: [],
                transaction_id: '',
            }
        },
        created() {
            this.transaction_id = this.$route.params.id;
            this.fetchPurchasedImages();
        },
        methods: {
            fetchPurchasedImages() {
                let url = 'api/transaction/transaction/'+this.transaction_id;
                axios.post(url)
                .then((response) => {
                    let json = response.data;
                    console.log(json);
                    this.purchases = json;
                })
                .catch((err) => {
                    console.error(err);
                });
            }
        },
        computed: {
            grandTotal: function () {
                let sum = 0;
                this.purchases.forEach((purchase) => {
                    sum += parseFloat(purchase.amount);
                });
                return sum;
            },
            date : function () {
                this.purchases.forEach((purchase) => {
                    return purchase.updated_at;
                });
            }
        }
    }
</script>
