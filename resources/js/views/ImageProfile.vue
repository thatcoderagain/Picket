<style>
    .image-title {
    margin: 0;
    color: #03021A;
    font-size: 22px;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 15px;
}
</style>
<template>
    <div class="container-fluid bg-light-grey p-4">
        <div class="container bg-white" style="box-shadow: 1px 1px 1px grey;">
            <div class="row">
                <div class="col-md-6 col-sm-12 p-3">
                    <div class="animated fadeIn">
                      <img v-bind:src="src" alt="placeholder"class="img-fluid">
                    </div>
                    <div class="animated fadeIn m-1 p-1">
                        <img class="rounded-circle img-fluid"" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" width="50" height="50" />
                        <button class="btn btn-link">@{{ artist }}</button>
                    </div>
                    <div>
                      <h4 class="mt-3">{{ caption }}</h4>
                      <p>{{ keywords }}</p>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 p-3">
                    <h1 class="image-title">{{ category}}</h1>
                    <div class="image-title" >
                          <span>{{ resolution }} &nbsp;|&nbsp;{{ size }} &nbsp;|&nbsp;{{ mime_type }}        </span>
                     </div>
                    <button type="button" class="btn btn-danger btn-lg"> <i class="fas fa-cart-plus"></i> ADD TO CART</button>
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
                artist: 'Ankita',
                caption: 'Caption',
                keywords: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, eveniet!',
                category: 'Diet',
                mime_type: 'JPEG',
                resolution: '6720 px x 4480 px',
                size: '56.9cm x 37.9cm @ 300 dpi56.9cm x 37.9cm @ 300 dpi',
            }
        }

    }

</script>
