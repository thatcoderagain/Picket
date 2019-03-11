<template>
    <div class="animated fadeIn">
        <div class="fullscreen row pt-5 pb-5" :style="'background-image:url('+bgimage_src+');'">
            <div class="card transparent col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 p-4">
                <div class="container">

                    <h1 class="page-header">Image Upload</h1>
                    <p class="lead">Select an image to upload, having minimum size of 2 MegaBytes.</p>

                    <div class="form-group" v-show="avatar != null">
                        <img :src="avatar" class="img-fluid img-thumbnail" alt="Responsive image">
                    </div>

                    <div class="form-group">
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" accept="image/*" v-show="true" ref="FileInput" @change="onFileSelected">
                            <label class="custom-file-label" for="customFile">Choose image</label>
                        </div>
                        <p class="alert alert-danger mt-2" v-show="sizeError">
                            Image size is too small and can't be uploaded.
                        </p>
                        <!-- <button type="button" class="btn btn-lg btn-block btn-primary p-1" @click="$refs.FileInput.click()"><i class="fas fa-image"></i> Pick File</button> -->
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
                        <textarea text="textarea" class="form-control" placeholder="Keywords" v-model="keyword" @keypress="keywordError=false"></textarea>
                        <span class="alert text-danger" role="alert" v-show="keywordError">
                            <strong>You must specify some keywords for this image.</strong>
                        </span>
                        <br>
                        <textarea text="textarea" class="form-control" placeholder="Your Keywords" readonly>{{ keyword | keyworder }}</textarea>
                        <small class="form-text text-muted">Enter the Keywords. Maximun 30 keywords per images are allowed</small>
                    </div>

                    <div class="form-group">
                        <button type="click" class="btn btn-block btn-outline-primary p-1" @click="uploadImage()" :disabled="categoryError || keywordError || sizeError || imageFile == null"><i class="fas fa-upload"></i> Upload Image</button>
                    </div>

                    <div role="alert">
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuemin="0" aria-valuemax="100" :style="{width: uploadPercentage+'%'}" :class="[uploadPercentage == 100 ? ' bg-success' : 'progress-bar-animated']">
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
                bgimage_src: '/storage/images/upload-page-background.jpeg',

                categories: [
                    'Art',
                    'Cartoon',
                    'Education',
                    'Festival',
                    'Music',
                    'Medicinal',
                    'Tourism',
                ],

                avatar: null,
                imageFile: null,
                uploadPercentage: 0,
                keyword: '',
                category: '',
                keywords: [],
                sizeError: false,
                categoryError: false,
                keywordError: false,
            }
        },

        methods: {
            onFileSelected(event) {
                this.imageFile = event.target.files[0];
                let reader = new FileReader();
                reader.readAsDataURL(this.imageFile);
                reader.onload = event => {
                    console.log(event);
                    this.avatar = event.target.result;
                }
                this.sizeMB(this.imageFile.size) < 2 ? this.sizeError = true : this.sizeError = false;
            },
            sizeMB(bytes) {
                return parseFloat(bytes / (1024*1024)).toFixed(2);
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
                if (this.keywords.length == 0){
                    this.keywordError = true;
                    return null;
                }

                const formData = new FormData();
                formData.append('imageFile', this.imageFile);
                formData.append('category', this.category);
                formData.append('keywords', this.keywords);

                let url = 'api/upload';
                axios.post(url, formData, {
                    onUploadProgress: event => {
                        this.uploadPercentage = parseInt(Math.round((event.loaded*100)/event.total));
                        console.log(this.uploadPercentage);
                    }
                })
                .then((response) => {
                    let json = response.data;
                    console.log(json);
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
                    return s != '' && s.length > 2
                });
                if (keywords.length > 0)
                    return keywords.map((s) => {
                        return '#'+s
                    }).join(' ');
                else
                    return null;
            }
        }
    }
</script>
