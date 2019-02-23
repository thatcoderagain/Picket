<style>
    #slider {
        max-height: 600px;
    }
</style>

<template>
    <div id="sliderControls" class="carousel slide" data-ride="carousel">
        <div id="slider" class="carousel-inner">
            <div class="carousel-item" :class="[key == 0 ? 'active' : '']" v-for="(image, key) in images">
              <img class="d-block w-100" v-bind:src="image" alt="First slide">
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
        props: ['images'],
        data() {
            return {

            }
        }
    }
</script>
