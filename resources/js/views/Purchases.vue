<template>
    <div class="bg-white">
        <SearchBar class="row col-12"></SearchBar>
        <ImageViewer :images="images"></ImageViewer>
        <ImageModal></ImageModal>
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
