<template>
<div class="p-3 mb-2 bg-secondary text-white">
 <div class="container bg-dark text-white">
    <div class="row mt-3">
        <div class="col-md-6 col-sm-12">
              <img v-bind:src="src"" alt="placeholder"class="img-fluid">
              <h4 class="card-title mt-3">{{ caption }}</h4>
              <p class="card-text">{{ keywords }}</p>
        </div>
        <div class="col-md-6 col-sm-12">
<button type="button" class="btn btn-primary btn-lg">Add to Cart</button>

        </div>
    </div>
</div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                src: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg',
                caption: 'Caption',
                keywords: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, eveniet!',



            }
        }

    }

</script>
