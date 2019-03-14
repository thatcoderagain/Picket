<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title w-100 text-center m-0">{{ plan.name }}</h3>
            <p class="card-text">{{ plan.duration }}</p>
            <p class="card-text"><span v-html="plan.benifit"></span></p>
            <p class="card-text">{{ plan.detail }}</p>
            <div class="row justify-content-center">
                <router-link tag="a" to="/subscribe" class="btn btn-outline-danger btn-lg btn-block w-75">
                   </i>&nbsp Subscribe{{ plan.name }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['plan']
    }
</script>
