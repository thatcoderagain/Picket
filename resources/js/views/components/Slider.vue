<style>
    #slider {
        max-height: 600px;
    }
    .carousel-caption {
        top: 30% !important;
    }
</style>

<template>
    <div id="sliderControls" class="carousel slide" data-ride="carousel">
        <div id="slider" class="carousel-inner">
            <div class="carousel-item shadow" :class="[key == 0 ? 'active' : '']" v-for="(image, key) in images">
                <img id="sliderImage" class="d-block w-100 blur" v-bind:src="image" alt="First slide">
                <div class="carousel-caption d-sm-none d-md-block">
                  <h1>Picket <i class="far fa-images"></i></h1>
                  <h2>{{ sliderText[key] }}</h2>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#sliderControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#sliderControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>

<script>
    export default {
        props: [
            'images', 'sliderText'
        ],
        data() {
            return {

            }
        }
    }
</script>
