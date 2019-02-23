<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">Home Component</div>

                    <div class="card-body">
                        I'm an example component.

                        <Slider v-bind:src="src" v-bind:title="title" v-bind:msg="msg"></Slider>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Slider from './Slider.vue';

    export default {
        components: {
            'Slider': Slider
        },
        data() {
            return {
                src: ["https://picsum.photos/1024/480/?image=10", 
                    "https://picsum.photos/1024/480/?image=54", 
                    "https://picsum.photos/1024/480/?image=58"],
                title: 'Sita Teja',
                msg: 'Wanna come in relationship'
            }
        }
    }
</script>
