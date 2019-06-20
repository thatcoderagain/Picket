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
        data() {
            return {
                bgImageSrc: this.StorageWebImages('images-page-backgroud.jpeg'),
                images: [],
                query: '',
                componentKey: 0,
            }
        },
        created() {
            console.log(this.$route.name);
            if (this.$route.name == 'search')
                this.searchImages();
            else
            if (this.$route.name == 'category')
                this.fetchCategoryImages();
            else
            if (this.$route.name == 'images')
                this.fetchImages();
            EventBus.$on('searchImages', (data) => {
                this.query = data.query;
                this.searchImages();
            });
        },
        watch: {
            '$route.name'(newName, oldName) {
                if (newName == 'search')
                    this.searchImages();
                else
                if (newName == 'category')
                    this.fetchCategoryImages();
                else
                if (newName == 'images')
                    this.fetchImages();
            }
        },
        methods: {
            fetchCategoryImages() {
                EventBus.$emit('loading');
                let url = 'api/search/category/'+this.$route.params.category;
                axios.get(url)
                .then((response) => {
                    let json = response.data;
                    console.log(json);
                    this.images = json;
                    EventBus.$emit('loaded');
                })
                .catch((error) => {
                    console.log(error);
                });
            },
            searchImages() {
                EventBus.$emit('loading');
                let url = 'api/search/'+this.$route.params.query;
                axios.get(url)
                .then((response) => {
                    let json = response.data;
                    console.log(json);
                    this.images = json;
                    EventBus.$emit('loaded');
                })
                .catch((error) => {
                    console.log(error);
                });
            },
            fetchImages() {
                EventBus.$emit('loading');
                let url = 'api/image/images';
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
        },
    }
</script>
