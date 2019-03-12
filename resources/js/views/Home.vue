<style>
    #slider
    {
        max-height: 600px;
    }
    #searchBar
    {
        z-index:999;
    }
</style>

<template>
    <div>
        <SearchBar class="row col-12" id="searchBar"></SearchBar>
        <Slider v-bind:images="sliderImages"></Slider>
        <div class="container-fluid mt-4">
            <Features></Features>
            <Categories></Categories>
        </div>
    </div>
</template>

<script>
    import SearchBar from './components/SearchBar';
    import Categories from './components/Categories';
    import Features from './components/Features';
    import Slider from './components/Slider';

    export default {
        components: {
            Slider: Slider,
            Categories: Categories,
            Features: Features,
            SearchBar: SearchBar,
        },
        data() {
            return {
                sliderImages: [
                    'https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940/bmw-i8-1600x900_75778-mm-90.jpg',
                    'https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    'https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                ],
            }
        }
    }
</script>
