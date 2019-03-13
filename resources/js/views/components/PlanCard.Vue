<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title" style="text-align: center;"><b>{{ plan.name }}</b></h5>
            <p class="card-text">{{ plan.duration }}</p>
            <p class="card-text"><span v-html="plan.benifit"></span></p>
            <p class="card-text">{{ plan.detail }}</p>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block"><i class="fab fa-paypal"></i>&nbsp Subscribe</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['plan']
    }
</script>
