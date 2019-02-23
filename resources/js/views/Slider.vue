<template>
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <template v-for="imgsrc in src">
        <div class="carousel-item active">
        <img class="d-block w-100" src="https://picsum.photos/1024/480/?image=10" alt="First slide">
        </div>
    </template>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</template>

<script>
  export default {
    props: ['src', 'title', 'msg'],
    data() {
        return {

        }
    },
    methods: {
        
    }
    }
</script>