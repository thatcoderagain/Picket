<template>
<<<<<<< HEAD
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">Home Component</div>
                    <div class="card-body">
                        I'm an example component.
                    </div>
                </div>
            </div>
=======
    <div>
        <Slider v-bind:images="image_sources"></Slider>
        <div class="container-fluid">

>>>>>>> f5cc9724ff881adb99ec9f46933922dffea954ff
        </div>
    </div>
</template>

<script>
<<<<<<< HEAD
    import Categories from './Categories';

    export default {
                components: {
            'Categories': Categories,
=======
    import Slider from './Slider';

    export default {
        components: {
            Slider: Slider,
        },
        data() {
            return {
                image_sources: [
                    'http://www.one-wilshire.com/wp-content/uploads/slider-1600x900-2-1024x576.jpg',
                    'https://hdqwalls.com/download/minimalism-plane-ot-1600x900.jpg',
                    'https://uhdwallpapers.org/uploads/converted/18/03/17/bmw-i8-1600x900_75778-mm-90.jpg',
                    'http://wallpoper.com/images/00/36/92/04/outer-space_00369204.jpg'
                ],
            }
>>>>>>> f5cc9724ff881adb99ec9f46933922dffea954ff
        }
    }
</script>
