<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col">
                <Slider v-bind:images="image_sources"></Slider>
            </div>
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
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvVXqX7r3Q4O1b92iqWRL4FOsAZ1bfXBa8otU_AP3ych91hrqr'
                ],
            }
        }
    }
</script>
