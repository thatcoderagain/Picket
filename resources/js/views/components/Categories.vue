<template>
    <div class="container-fluid">
        <h2 class="text-muted text-center pb-3 pt-0">Pick a Categories</h2>
        <div class="row">
            <div class="col-3" v-for="category in categories">
                <div class="card-deck">
                    <div class="card border-primary overflow-hidden mb-3">
                        <router-link tag="li" :to="category|hypen" class="nav-item">
                        <!-- <a :href="category|hypen"> -->
                            <div class="embed-responsive embed-responsive-16by9">
                                <img class="card-img-top embed-responsive-item" v-bind:src="StorageCategoryImage(category)" alt="Card image cap">
                            </div>
                        <!-- </a> -->
                        </router-link>
                        <div class="card-body d-sm-none d-md-block mb-1">
                            <h4 class="card-title text-center">{{ category }}</h4>
                        </div>
                        <div class="card-footer d-sm-none d-md-block">
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
            }
        },
        created() {
            this.fetchCategoies();
        },
        methods: {
            fetchCategoies(){
                let url = 'api/image/categories';
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
        },
        filters: {
            hypen(string) {
                return '/category/'+string.split('/').join('-').split(' ').join('-');
            }
        }
    }
</script>
