<template>
<div class="carousel-item">
    abc
    <img src="src" alt="carousel-item">
    <div class="carousel-caption d-none d-md-block">
        <h5>{{title}}</h5>
        <p>{{msg}}</p>
    </div>
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