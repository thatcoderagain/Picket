<template>
    <div class="card border border-white">
        <div class="card-body">
            <h2 class="card-title text-center m-4">{{ plan.name }}</h2>
            <h5 class="text-muted text-center font-weight-bold m-4">{{ plan.duration }}</h5>
            <h5 class="text-muted text-center font-weight-bold m-4"><span v-html="plan.benifit"></span></h5>
            <h5 class="text-muted text-center font-weight-bold m-4">{{ plan.detail }}</h5>
            <div class="row justify-content-center">
                <router-link tag="a" to="/subscribe" class="btn btn-outline-danger btn-lg btn-block w-75">
                   </i>&nbsp Subscribe {{ plan.name }}
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
