<template>
    <div class="container-fluid mt-4">
        <div class="row">
            <div class="col-4" v-for="i in 5">
                <Category></Category>
            </div>
        </div>
    </div>
</template>

<script>
    import Category from './components/category';

    export default {
        components: {
            Category: Category,
        }
    }
</script>

