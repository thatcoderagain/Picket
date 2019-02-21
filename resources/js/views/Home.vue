<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">Home Component</div>

                    <div class="card-body">
                        I'm an example component.

                        <Carousel v-bind:src="src" v-bind:title="title" v-bind:msg="msg"></Carousel>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Carousel from './Slider';

    export default {
        components: {
            'Carousel': Carousel
        },
        data() {
            return {
                src: '"https://picsum.photos/1024/480/?image=10',
                title: 'Sita Teja',
                msg: 'Wanna come in relationship'
            }
        }
    }
</script>
