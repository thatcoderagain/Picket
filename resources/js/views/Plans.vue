<style>
.heading {
    top: 33%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>

<template>
    <div>
        <div class="position-absolute heading">
            <h1 class="text-center text-white">
                Have we got a plan for you.<br/>
                Free 14-day trial.
            </h1>
        </div>

        <img class="card-img-top" :src="plan_image_src" alt="Plan Image">

        <div class="container-fluid">

            <h3>Plans at a glance.</h3>
            <p>
                Unlimited uploads come standard for every Picket plan along with all the tools you need to create a beautiful photo site, share easily, and order personalized prints and gifts. Each plan is designed to protect and preserve the photos you care about: which means all of them.
            </p>

            <div class="card-group m-5">
                <PlanCard class="m-3" v-for="plan in plans" :key="plan.name" :plan="plan"></PlanCard>
            </div>

        </div>
    </div>
</template>

<script>
    import PlanCard from './components/PlanCard';

    export default {
        components: {
            PlanCard: PlanCard
        },
        data() {
            return {
                plan_image_src: 'http://wallpoper.com/images/00/36/92/04/outer-space_00369204.jpg',

                plans: [
                    {
                        name: 'Basic',
                        duration: '$47.88/year',
                        benifit: '<br>Save 33%</b> when billed annually.Or $5.99 monthly',
                        detail: 'Perfect for you if you’re interested in advanced control over the way your photo site looks.'
                    },
                    {
                        name: 'Power',
                        duration: '$71.88/year',
                        benifit: '<br>Save 33%</b> when billed annually.Or $8.99 monthly.',
                        detail: 'Perfect for you if you’re interested in advanced control over the way your photo site looks.'
                    },
                    {
                        name: 'Pro',
                        duration: '$179.88/year',
                        benifit: '<br>Save 38%</b> when billed annually.Or $23.99 monthly.',
                        detail: 'Perfect for you if you’re interested in advanced control over the way your photo site looks.'
                    }
                ],
            }
        }
    }
</script>
