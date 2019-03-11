<style>
p
{
    font-size:18px;
    color:white;
}
.alert-danger
{
    color: #dee2e6;
}
</style>

<template>
    <div class="card-deck">
        <div class="card border-primary overflow-hidden m-1 p-0" @mouseover="footer=true" @mouseout="footer=false">

            <img class="card-img-top" v-bind:src="image.src" alt="Card image cap" v-on:click="openModal(image)">

            <div class="card-footer animated position-absolute fixed-bottom mb-0 p-0" :class="[footer ? 'slideInUp' : 'slideOutDown']">
                <div class="alert alert-info text-dark m-0">
                    <small class="align-right"><b>{{ image.category }}</b></small>
                    <br>
                    <small class="align-left font-italic">
                        <template v-for="keyword in image.keywords">
                            #{{  keyword }}&nbsp;
                        </template>
                    </small>
                    <br>
                    <div>
                        <button type="button" class="btn btn-primary btn-sm">Visit Photographer</button>
                        <button type="button" class="btn btn-primary btn-sm">Add To Cart</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'image'
        ],
        data() {
            return {
                footer: false,
            }
        },
        methods: {
            openModal: (image) => {
                EventBus.$emit('showModal', {
                    image: image
                });
            }
        }
    }
</script>
