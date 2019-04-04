<template>
    <div class="container-fluid">
        <h2 class="text-muted text-center pb-3 pt-0">Pick a Categories</h2>
        <div class="row">
            <div class="col-3" v-for="category in categories">
                <div class="card-deck">
                    <div class="card border-primary overflow-hidden mb-3">
                        <div class="embed-responsive embed-responsive-16by9">
                            <img class="card-img-top embed-responsive-item" v-bind:src="StorageCategoryImage(category)" alt="Card image cap">
                        </div>
                        <div class="card-body">
                            <h4 class="card-title text-center mb-1">{{ category }}</h4>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted"># of images are available</small>
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
                categories: [],
                src: 'https://hdqwalls.com/download/minimalism-plane-ot-1600x900.jpg',
                title: 'Card title',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, eveniet!',
                time: 'Last updated 3 mins ago',
            }
        },
        created() {
            this.fetchCategoies();
        },
        methods: {
            fetchCategoies(){
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
            }
        }
    }
</script>
