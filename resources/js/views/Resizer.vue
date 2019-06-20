<style>
/* Customize the label (the check-container) */
.check-container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.check-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.check-container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.check-container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.check-container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.check-container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.big-label {
    font-size: 22px
}
</style>

<template>
    <div class="container-fluid">
        <div class="fullscreen row h-100 blur" :style="'background-image:url('+bgImageSrc+');'"></div>
        <div class="pt-5 pb-5">

            <div class="card transparent animated zoomIn m-5 p-5">

                <div class="row">
                    <div class="col-12 text-center mb-5">
                        <h1>Image Resizer</h1>
                    </div>

                    <div class="col-md-6">
                     <div class="form-group" v-show="avatar != null">
                         <div class="col-10 offset-1">
                             <img :src="avatar" class="img-fluid img-thumbnail w-100" alt="Responsive image" ref="imageViewer">
                         </div>
                     </div>
                     <div class="form-group" v-show="avatar == null">
                         <div class="col-10 offset-1">
                             <img :src="StorageNoImageAvailable(image)" class="img-fluid img-thumbnail w-100" alt="Responsive image">
                         </div>
                     </div>
                 </div>

                 <div class="col-md-6">

                     <div class="form-group row">
                         <label for="name" class="col-md-auto mr-5 col-form-label big-label">Browse Image</label>
                         <div class="col-md-6">
                             <div class="custom-file">
                                 <input type="file" class="custom-file-input" accept="image/*" v-show="true" @change="onFileSelected" ref="theFile">
                                 <label class="custom-file-label" for="customFile">Choose image</label>
                             </div>
                         </div>
                     </div>

                     <hr class="w-100">

                      <div class="form-group row">
                         <label for="resolution" class="col-md-auto col-form-label big-label">Original Resolution</label>

                         <div class="col-md-3">
                             <input type="width" placeholder="Fixed width" class="form-control" name="resolution" :value="originalWidth + ' X ' + originalHeight" :disabled="true" autofocus>
                         </div>

                    </div>

                     <div class="form-group row">
                         <label for="resolution" class="col-md-auto col-form-label big-label mr-4">Fixed Resolution</label>

                         <div class="col-md-3">
                             <input type="number" min="1" :max="originalWidth" placeholder="Fixed width" class="form-control" name="resolution" v-model="width" :disabled="keepAspectRatio && takeHeight" autofocus @mouseover="() => {if(keepAspectRatio) {takeWidth=true; takeHeight=false;}}"
                             @keyup="updateResolution('height')">
                         </div>

                         <div class="col-md-3">
                             <input type="number" min="1" :max="originalHeight" placeholder="Fixed height" class="form-control" name="resolution" v-model="height" :disabled="keepAspectRatio && takeWidth" autofocus @mouseover="() => {if(keepAspectRatio) {takeWidth=false; takeHeight=true;}}" @keyup="updateResolution('width')">
                         </div>

                        <template v-if="originalWidth < width || originalHeight < height">
                             <span class="col-12 text-danger" role="alert">
                                 <strong >
                                     Height and Width can't exceed the original Height and Width of the image
                                 </strong>
                             </span>
                        </template>
                     </div>


                     <div class="form-group row">
                        <div class="col-md-auto">
                            <label class="check-container">Keep Aspect Ratio
                                <input class="form-check-input" type="checkbox" v-model="keepAspectRatio" @change="updateResolution('height')">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>

                    <hr class="w-100">

                    <div class="form-group row mb-0">
                        <div class="col-md-4 offset-md-3">
                            <button type="button" class="btn btn-primary btn-block" @click="resizeAndDownloadImage()" :disabled="!imageFile">
                                <template v-if="loading">
                                    <b-spinner small type="grow"></b-spinner>Downloading
                                </template>
                                <template v-else>
                                     Resize and Download
                                </template>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                bgImageSrc: this.StorageWebImages('resize-page-background.jpeg'),
                avatar: null,
                image: null,
                imageFile: null,
                imageFilename: null,
                loading: false,

                keepAspectRatio: true,
                originalWidth: 1,
                originalHeight: 1,
                width: 1,
                height: 1,
                takeWidth: true,
                takeHeight: false,
            }
        },
        methods: {
            onFileSelected(event, context = this) {
                if(event != null) {
                    this.imageFile = event.target.files[0];
                    this.imageFilename = event.target.files[0].name;
                }
                if (this.imageFile != null) {
                    let reader = new FileReader();
                    reader.readAsDataURL(this.imageFile);
                    reader.onload = (event) => {
                        this.avatar = event.target.result;
                        let image = new Image();
                        var resolution = this.$refs.imageViewer.onload = function(e) {
                            context.originalWidth = context.width = this.naturalWidth;
                            context.originalHeight = context.height = this.naturalHeight;
                        };
                    }
                }
            },
            updateResolution(side) {
                if (this.imageFile !== null && this.keepAspectRatio) {
                    if (side === 'height') {
                        this.height = Math.ceil((this.width * this.originalHeight) / this.originalWidth);
                    }
                    else {
                        this.width = Math.ceil((this.height * this.originalWidth) / this.originalHeight);
                    }
                }
            },
            resizeAndDownloadImage(){
                EventBus.$emit('resizeRequested', {
                    completed: false
                });
                let url = '/api/image/resize';
                let formData = new FormData();
                formData.append('imageFile', this.imageFile);
                formData.append('height', this.height);
                formData.append('width', this.width);

                axios({
                    method: 'post',
                    url: url,
                    responseType: 'arraybuffer', // important
                    data: formData
                })
                .then((response) => {
                    EventBus.$emit('resizeRequested', {
                        completed: true
                    });
                    var blob = new Blob([response.data],{type:'application/octet-stream'});
                    downloadjs(blob, 'RESIZED_BY_PICKET'+this.imageFilename, 'application/octet-stream');
                    console.log('File ready to download');
                })
                .catch(function (error) {
                    EventBus.$emit('resizeRequested', {
                        completed: true
                    });
                    console.log(error);
                });
            },
        },
        created() {
            EventBus.$on('resizeRequested', (data) => {
                this.loading = !data.completed;
            });
        }
    }
</script>
