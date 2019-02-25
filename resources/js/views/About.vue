<template>
    <div>
        <div class="card-body">
            I'm an example component.
            Developed by #{{ dev }}
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        computed: {
            dev(){
                return this.$store.state.dev;
            }
        }
    }
</script>
