<style>
    .dsa {
        width:400px; min-height: 400px; margin: auto; padding: 32px;
        max-width: 650px; margin: auto;
    }
</style>
<template>
    <div class="animated fadeIn">
        <div class="fullscreen row" :style="'background-image:url('+bgimage_src+');'">
            <div class="card transparent col-sm-12 col-md-4 offset-md-4 p-5">
                <div class="container">
                    <h1 class="page-header" style="font:bold">Image Upload</h1>
                    <p class="lead">Select a PNG or JPEG image, having maximum size <span id="max-size"></span> KB.</p>

                    <form id="upload-image-form" action="" method="post" enctype="multipart/form-data">
                        <div id="image-preview-div" style="display: none">
                            <label for="exampleInputFile">Selected image:</label>
                            <br>
                            <img id="preview-img" src="noimage">
                        </div>
                        <div class="form-group">
                            <input type="file" name="file" id="file" required>
                        </div>
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Description</label>
                                <textarea text="textarea" class="form-control" placeholder="Description"></textarea>
                                <small id="emailHelp" class="form-text text-muted">Enter the description in less than 50 words!</small>
                            </div>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Category
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Education</a>
                                    <a class="dropdown-item" href="#">Music</a>
                                    <a class="dropdown-item" href="#">Art</a>
                                    <a class="dropdown-item" href="#">Festival</a>
                                    <a class="dropdown-item" href="#">Tourism</a>
                                    <a class="dropdown-item" href="#">Medicinal</a>
                                </div>
                            </div>
                        </form>
                        <br/>
                        <button class="btn btn-lg btn-primary" id="upload-button" type="submit" disabled>Upload image</button>
                    </form>

                    <br>
                    <div class="alert alert-info" id="loading" style="display: none;" role="alert">
                        Uploading image...
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
                            </div>
                        </div>
                    </div>
                    <div id="message"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                bgimage_src: 'https://images.unsplash.com/photo-1468956332313-2dcf1542828f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            }
        }
    }
</script>
