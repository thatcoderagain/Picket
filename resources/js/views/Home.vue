<template>
    <div>
        <Slider v-bind:images="image_sources"></Slider>
        <div class="container-fluid">

        </div>
    </div>
</template>

<script>
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
        }
    }
</script>
