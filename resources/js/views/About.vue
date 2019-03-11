<template>
    <div>
        <div class="card-body">
            I'm an example component.
            Developed by #{{ dev }}
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data() {
            return {

            }
        },
        // computed: mapState({
        //     dev: (state) => state.dev,
        // }),
        computed: mapState([
            'dev',
        ])

        // {
        //     dev(){
        //         return this.$store.state.dev;
        //     }
        // }
    }
</script>
