<template>
    <div>
        <button class="btn btn-primary" id="ImageModalButton" type="button" data-toggle="modal" data-target="#ImageModal" v-show="false" ref="modal"></button>

         <div class="modal fade mt-5" id="ImageModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg mt-5" role="document">
                <div class="modal-content m-0 p-0 align-content-center">
                    <img id="ImageModalImage" class="img-thumbnail img-responsive mw-100" :src="StorageImageWatermarks(modalImageSrc)" allowfullscreen/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                modalImageSrc: ''
            }
        },
        created() {
            EventBus.$on('showModal', (data) => {
                this.modalImageSrc = data.slug;
                this.$refs.modal.click();
            });
        }
    }
</script>
