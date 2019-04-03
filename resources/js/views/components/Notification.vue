<template>
    <div>
        <b-modal
        :title="title"
        v-model="show"
        :header-bg-variant="status"
        header-text-variant="white"
        body-bg-variant="white"
        :body-text-variant="status"
        footer-bg-variant="white"
        footer-text-variant="dark">
            <h5 class="my-2 font-weight-bold">{{ msg }} !!</h5>
            <div slot="modal-footer"></div>
        </b-modal>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions([
                'clearCart',
            ]),
        },
        props: ['msg', 'status'],
        data() {
            return {
                show: true,
                title: 'Transaction Status'
            }
        },
        mounted() {
            if(this.status === 'primary')
                this.clearCart();
        }
    }
</script>
