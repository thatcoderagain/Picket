<style>
.searchbar
{
    padding: 20px;
    padding-left: 50px;
    height: 80px;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 3px;
    background-color: #ffffff;
    border: 2px solid #ccc;
    border-radius: 30px;
    display: flex;
}

.searchbar:placeholder
{
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 3px;
}

.search_input
{
    color: #333;
    border: 0;
    outline: 0;
    font-size: 28px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 3px;
    background: none;
    width: calc(20vw);
    caret-color:transparent;
    transition: width 0.3s linear;
}

.searchbar:hover > .search_input
{
    padding: 0 10px;
    caret-color: red;
    width: calc(70vw);
    transition: width 0.3s linear;
}

.search_icon
{
    height: 40px;
    width: 40px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}

.searchbar:hover > .search_icon
{
    background: white;
    color: #e74c3c;

}
</style>

<template>
    <div class="container mt-4 position-absolute mb-5">
        <div class="container">
            <div class="d-flex justify-content-center">
                <div class="searchbar shadow">
                    <input class="search_input" type="text" v-model="query" @keyup.enter="searchImages()" placeholder="Search Image . . .">
                    <router-link tag="a" :to="'/search/'+query" class="search_icon" @click.prevent="searchImages()""><i class="fas fa-search"></i></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                query: '',
            }
        },
        methods: {
            searchImages() {
                if (this.query.length != 0) {
                    this.$router.push('/search/'+ this.query);
                    EventBus.$emit('searchImages', {
                        query: this.query
                    });
                }
            }
        }
    }
</script>
