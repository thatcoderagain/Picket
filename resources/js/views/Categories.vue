<template>
    <div>
        <div class="container-fluid">
            <div class="row">
            <div class="col-4" v-for="i in 3">
                <Category></Category>
            </div>
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

