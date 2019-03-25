<style>
/*div {
    border: 1px solid red;
}*/
</style>
<template>
    <div>
        <button class="btn btn-primary" id="modalButton" type="button" data-toggle="modal" data-target="#modalVM" v-show="true" ref="modalButton">Modal
        </button>
        <div class="modal fade" id="modalVM" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="p-0 m-0" role="document">
                <div class="w-100 h-100">
                    <div class="row">
                        <div class="col-md-8 h-100 w-100 bg-dark transparent">
                            <div style="height: 400px;"></div>
                        </div >
                        <div class="col-sm col-md-4">
                            <div class="bg-light-grey">
                                <CartBucket/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CartBucket from './CartBucket';

    export default {
        components: {
            CartBucket: CartBucket
        },
        data() {
            return {
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
