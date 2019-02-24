<template>
    <div>
        <Slider v-bind:images="image_sources"></Slider>
        <div class="container-fluid mt-4">
            <Features></Features>
            <Categories></Categories>
        </div>
    </div>
</template>

<script>
    import Categories from './Categories';
    import Slider from './components/Slider';
    import Features from './Features';

    export default {
        components: {
            Slider: Slider,
            'Categories': Categories,
            'Features': Features,
        },
        data() {
            return {
                image_sources: [
                    'https://hdqwalls.com/download/minimalism-plane-ot-1600x900.jpg',
                    'https://uhdwallpapers.org/uploads/converted/18/03/17/bmw-i8-1600x900_75778-mm-90.jpg',
                    'http://wallpoper.com/images/00/36/92/04/outer-space_00369204.jpg'
                ],
            }
        }
    }
</script>
