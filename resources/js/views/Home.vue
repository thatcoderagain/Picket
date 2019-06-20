<style>
    #searchBar {
        z-index: 999;
    }
</style>

<template>
    <div>
        <div class="fullscreen row h-100 blur" :style="'background-image:url('+bgImageSrc+');'"></div>
        <SearchBar class="row col-12 pt-5 pb-5 mt-5" id="searchBar"></SearchBar>
        <Slider :images="sliderImages" :sliderText="sliderText"></Slider>
        <div class="container-fluid mt-4 mb-4">
            <Categories></Categories>
            <hr class="w-100">
            <Features></Features>
        </div>
    </div>
</template>

<script>
    import SearchBar from './components/SearchBar';
    import Slider from './components/Slider';
    import Categories from './components/Categories';
    import Features from './components/Features';

    export default {
        components: {
            Slider: Slider,
            Categories: Categories,
            Features: Features,
            SearchBar: SearchBar,
        },
        data() {
            return {
                bgImageSrc: this.StorageWebImages('home-page-background.jpeg'),
                sliderImages: [
                    this.StorageWebImages('slider-1.jpg'),
                    this.StorageWebImages('slider-2.jpg'),
                    this.StorageWebImages('slider-3.jpg'),
                    this.StorageWebImages('slider-4.jpg'),
                ],
                sliderText: [
                    'Search millions of royalty free stock images. Get inspired by 1000s of new, high-resolution stock images added daily.',
                    'The best way to discover, purchase and edit royalty-free images on a mobile device.',
                    'Browse over 200 million high-quality stock photos, illustrations, and vectors and many more.',
                    'Over 27,76,64,184 royalty-free images with 14,30,947 new stock images added weekly.'
                ]
            }
        }
    }
</script>
