<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title" style="text-align: center;"><b>{{ name }}</b></h5>
            <p class="card-text">{{ duration }}</p>
            <p class="card-text"><span v-html="benifit"></span></p>
            <p class="card-text">{{ detail }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['name', 'duration', 'benifit', 'detail'],
        filters: {

        }
    }
</script>
