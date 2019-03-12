<template>
    <div class="container-fluid mt-4">
        <div class="row">
            <div class="col-3" v-for="i in 5">
                <div class="card-deck">
                    <div class="card border-primary mb-3">
                        <img class="card-img-top" v-bind:src="src" alt="Card image cap">
                        <div class="card-body">
                            <h4 class="card-title text-center">{{ title }}</h4>
                            <p class="card-text">{{ content }}</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">{{ time }}</small>
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
                src: 'https://hdqwalls.com/download/minimalism-plane-ot-1600x900.jpg',
                title: 'Card title',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, eveniet!',
                time: 'Last updated 3 mins ago',
            }
        }

    }
</script>
