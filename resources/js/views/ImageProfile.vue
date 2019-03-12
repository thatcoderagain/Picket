<style type="text/css">
.btn {
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 30px;
  cursor: pointer;
  font-size: 20px;
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: RoyalBlue;
}
</style>

<template>
    <div class="container-fluid bg-light-grey p-4">
        {{ id }}
        <div class="container bg-white" style="box-shadow: 1px 1px 1px grey;">
            <div class="row">
                <div class="col-md-6 col-sm-12 p-3">
                      <img v-bind:src="src"" alt="placeholder"class="img-fluid">
                      <h4 class="card-title mt-3">{{ caption }}</h4>
                      <p class="card-text">{{ keywords }}</p>
                </div>
                <div class="col-md-6 col-sm-12 p-3">
                    <p class="card-text">{{ data }}</p>
                    <button class="btn"><i class="fa fa-download"></i> ADD to Cart</button>
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
                caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, cumque.',
                keywords: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, eveniet!',
                data: '6720 px x 4480 px  |  56.9cm x 37.9cm @ 300 dpi  |  JPEG',

                id: 987456//$route.params.id,
            }
        }

    }

</script>
