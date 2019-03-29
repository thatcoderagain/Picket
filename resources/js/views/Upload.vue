<template>
    <div class="animated fadeIn">
        <div class="fullscreen row pb-5" :style="'background-image:url('+bgImageSrc+');'">
            <div class="card transparent col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 p-4 mt-5 mb-5">
                <div class="container">

                    <h1 class="page-header">Image Upload</h1>
                    <p class="lead">Select an image to upload, having minimum size of 2 MegaBytes.</p>

                    <div class="form-group" v-show="avatar != null">
                        <img :src="avatar" class="img-fluid img-thumbnail square-420" alt="Responsive image">
                    </div>

                    <div class="form-group">
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" accept="image/*" v-show="true" @change="onFileSelected">
                            <label class="custom-file-label" for="customFile">Choose image</label>
                        </div>
                        <p class="alert alert-danger mt-2" v-show="sizeError">
                            Image size is too small and can't be uploaded.
                        </p>
                        <p class="alert alert-danger mt-2" v-show="duplicateError">
                            Duplicate image found, you can't upload this upload.
                        </p>
                    </div>

                    <div class="form-group">
                        <select name="category" class="custom-select" v-model="category" @change="categoryError=false">
                            <option value="">Choose Category</option>
                            <option v-for="category in categories" v-text="category"></option>
                        </select>
                        <span class="alert text-danger" role="alert" v-show="categoryError">
                            <strong>You must choose a category for this image.</strong>
                        </span>
                    </div>

                    <div class="form-group">
                        <textarea text="textarea" class="form-control" placeholder="Write caption" v-model="caption" @keypress="captionError=false"></textarea>
                        <span class="alert text-danger" role="alert" v-show="captionError">
                            <strong>You must write a caption for this image between 5 to 30 words.</strong>
                        </span>
                    </div>

                    <div class="form-group">
                        <textarea text="textarea" class="form-control" placeholder="Keywords" v-model="keyword" @keypress="keywordError=false"></textarea>
                        <span class="alert text-danger" role="alert" v-show="keywordError">
                            <strong>You must specify some keywords for this image.</strong>
                        </span>
                        <br>
                        <textarea text="textarea" class="form-control" placeholder="Your Keywords" readonly>{{ keyword | keyworder }}</textarea>
                        <small class="form-text text-muted">Enter the Keywords. Maximun 30 keywords per images are allowed</small>
                    </div>

                    <div class="form-group">
                        <button type="click" class="btn btn-block btn-outline-primary p-1" @click="uploadImage()" :disabled="categoryError || keywordError || sizeError || imageFile == null" v-show="uploadPercentage==0"><i class="fas fa-upload"></i> Upload Image</button>
                    </div>

                    <div role="alert">
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuemin="0" aria-valuemax="100" :style="{width: uploadPercentage+'%'}" :class="[uploadPercentage == 100 ? ' bg-success' : 'progress-bar-animated', duplicateError ? 'bg-danger' : '']">
                                <small class="text-white">{{ uploadPercentage }}%</small>
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
                bgImageSrc: '/storage/images/upload-page-background.jpeg',
                categories: [],
                avatar: null,
                imageFile: null,
                uploadPercentage: 0,
                keyword: '',
                category: '',
                caption: '',
                keywords: [],
                sizeError: false,
                captionError: false,
                categoryError: false,
                keywordError: false,
                duplicateError: false
            }
        },
        created() {
            this.fetchCategoies();
        },
        methods: {
            fetchCategoies() {
                let url = 'api/categories/fetch';
                axios.post(url)
                .then((response) => {
                    let json = response.data;
                    console.log(json);
                    this.categories = json;
                })
                .catch((error) => {
                    console.log(error)
                });
            },
            onFileSelected(event) {
                this.imageFile = event.target.files[0];
                let reader = new FileReader();
                reader.readAsDataURL(this.imageFile);
                reader.onload = event => {
                    console.log(event);
                    this.avatar = event.target.result;
                }
                // UNCOMMNET TO PUT SIZE CONDITION BACK
                //this.sizeMB(this.imageFile.size) < 2 ? this.sizeError = true : this.sizeError = false;
            },
            sizeMB(bytes) {
                return parseFloat(bytes / (1024*1024)).toFixed(2);
            },
            words(string) {
                return this.caption.split(' ').length;
            },
            keywordMaker() {
                this.keywords = this.keyword.split(' ').filter((s) => {
                    return s != '' && s.length > 2
                });
            },

            uploadImage() {
                if(!this.imageFile || this.sizeError)
                    return null;
                this.keywordMaker();

                if (this.category == ''){
                    this.categoryError = true;
                    return null;
                }
                if (this.words(this.caption) <= 4 || this.words(this.caption) >= 30){
                    this.captionError = true;
                    return null;
                }
                if (this.keywords.length == 0){
                    this.keywordError = true;
                    return null;
                }

                const formData = new FormData();
                formData.append('imageFile', this.imageFile);
                formData.append('category', this.category);
                formData.append('caption', this.caption);
                formData.append('keywords', this.keywords);

                let url = 'api/image/store';
                axios.post(url, formData, {
                    onUploadProgress: event => {
                        this.uploadPercentage = parseInt(Math.round((event.loaded*100)/event.total));
                    }
                })
                .then((response) => {
                    let json = response.data;
                    console.log(json);
                    if (json.hasOwnProperty('image')) {
                        /* REDIRECT AFTER SUCCESSFUL UPLOAD */
                        window.location = '/#/image/'+json.image;
                    } else {
                        this.duplicateError = true;
                        uploadPercentage = 0;
                    }
                })
                .catch((error) => {
                    console.log(error);
                    return 0;
                });
            }
        },
        filters: {
            keyworder(string) {
                let keywords = string.split(' ').filter((s) => {
                    return s != '' && s.length > 2;
                });
                if (keywords.length > 0)
                    return keywords.map((s) => {
                        return '#'+s;
                    }).join(' ');
                else
                    return null;
            }
        }
    }
</script>
