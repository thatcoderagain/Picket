<template>
    <div class="container-fluid">
        <div class="fullscreen row h-100 blur" :style="'background-image:url('+bgImageSrc+');'"></div>
        <SearchBar class="row col-12 pt-5 pb-5 mt-5"></SearchBar>
        <div class="pt-5 pb-5">
            <ImageViewer :images="images" :margin="200"></ImageViewer>
            <ImageModal></ImageModal>
        </div>
    </div>
</template>

<script>
    import SearchBar from './components/SearchBar';
    import ImageViewer from './components/ImageViewer';
    import ImageModal from './components/ImageModal';

    export default {
        components: {
            SearchBar: SearchBar,
            ImageViewer: ImageViewer,
            ImageModal: ImageModal,
        },
        created() {
            this.fetchImages();
        },
        data() {
            return {
                bgImageSrc: this.StorageWebImages('images-page-backgroud.jpeg'),
                images: [],
            }
        },
        methods: {
            fetchImages() {
                EventBus.$emit('loading');
                let url = 'api/image/purchased';
                axios.post(url)
                .then((response) => {
                    let json = response.data;
                    console.log(json);
                    this.images = json;
                    EventBus.$emit('loaded');
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>
