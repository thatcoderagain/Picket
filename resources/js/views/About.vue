<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">About Component</div>

                    <div class="card-body">
                        I'm an example component.
                        {{ devname }}
                        <button @click="devn()">click</button>
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
                devname: '',
            }
        },
        computed: {
            devn(){
                this.devname = this.$store.state.dev;
            }
        }
    }
</script>
