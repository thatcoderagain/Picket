<template>
    <div class="card-deck">
        <div class="card border-primary mb-3" style="max-width: 30rem;">
            <img class="card-img-top" :src="src" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{ title }}</h5>
                <p class="card-text">{{ content }}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">{{ time }}</small>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                src: 'https://hdqwalls.com/download/minimalism-plane-ot-1600x900.jpg',
                title: 'Card title',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sed quam, ipsam reiciendis aut temporibus.',
                time: 'Last updated 3 mins ago',
            }
        }

    }
</script>
