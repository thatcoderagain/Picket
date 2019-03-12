<style>
    .searchbar{
        margin-bottom: auto;
        margin-top: auto;
        height: 60px;
        background-color: #ffffff;
        border-radius: 30px;
        padding: 10px;
    }

    .searchbar:hover > .search_input{
        padding: 0 10px;
        width: 450px;
        caret-color:red;
        transition: width 0.3s linear;
    }

    .searchbar:hover > .search_icon{
        background: white;
        color: #e74c3c;
    }

    .search_input{
        color: #333;
        border: 0;
        outline: 0;
        background: none;
        width: 0;
        caret-color:transparent;
        line-height: 40px;
        transition: width 0.3s linear;
    }

    .search_icon{
        height: 40px;
        width: 40px;
        float: right;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }
</style>

<template>
    <div class="container mt-5 position-absolute">
        <div class="container">
            <div class="d-flex justify-content-center">
                <div class="searchbar">
                    <input class="search_input" type="text" placeholder="Search...">
                    <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>
