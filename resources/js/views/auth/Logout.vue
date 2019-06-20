<template>
    <div>logging out</div>
</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

    export default {
        created() {
            this.attemptLogout();
        },
        methods: {
            ...mapActions([
                'logout'
            ]),
            attemptLogout() {
                let url = '/api/auth/logout';
                axios.post(url)
                .then((response) => {
                    let json = response.data;
                    console.log(json);
                    if (json.success == true) {
                        this.user = json.user;
                        this.logout();
                        delete window.axios.defaults.headers.common["Authorization"];
                        this.$router.push('/login');
                    } else {
                        this.errors = json.error;
                    }
                })
                .catch((e) => {
                    console.error(e);
                });
            }
        }
    }
</script>
