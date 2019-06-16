<style lang="scss">
$color-1: #FF6B6B;
$color-2: adjust-hue($color-1, 40deg);
$color-3: adjust-hue($color-1, 80deg);
$color-4: adjust-hue($color-1, 120deg);
$color-5: adjust-hue($color-1, 160deg);

.animation-wrapper {
    background: #ffffff;
    height: 100%;
}

.loader-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.loader {
    display: inline-block;
    font-size: 90px;
    overflow: hidden;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    margin: 72px auto;
    position: relative;

    transform: translateZ(0);
}

.loader1 {
    margin-right: 0.3em;
    animation: load1 3s infinite linear;
}

.loader2 {
    margin-left: 0.3em;
    transform: rotate(-90deg);
    animation: load2 3s infinite linear;
}

@keyframes load1 {
    0% {
        opacity: 1;
        transform: rotate(90deg);
        box-shadow:
        0 -0.83em 0 -0.4em $color-1,
        0 -0.83em 0 -0.42em $color-2,
        0 -0.83em 0 -0.44em $color-3,
        0 -0.83em 0 -0.46em $color-4,
        0 -0.83em 0 -0.477em $color-5;
    }

    2.5%,
    47.5% {
        box-shadow:
        0 -0.83em 0 -0.4em $color-1,
        0 -0.83em 0 -0.42em $color-2,
        0 -0.83em 0 -0.44em $color-3,
        0 -0.83em 0 -0.46em $color-4,
        0 -0.83em 0 -0.477em $color-5;
    }

    5%,
    29% {
        box-shadow:
        0 -0.83em 0 -0.4em $color-1,
        -0.087em -0.825em 0 -0.42em $color-2,
        -0.173em -0.812em 0 -0.44em $color-3,
        -0.256em -0.789em 0 -0.46em $color-4,
        -0.297em -0.775em 0 -0.477em $color-5;
    }

    10% {
        box-shadow:
        0 -0.83em 0 -0.4em $color-1,
        -0.338em -0.758em 0 -0.42em $color-2,
        -0.555em -0.617em 0 -0.44em $color-3,
        -0.671em -0.488em 0 -0.46em $color-4,
        -0.749em -0.34em 0 -0.477em $color-5;
    }

    19% {
        box-shadow:
        0 -0.83em 0 -0.4em $color-1,
        -0.377em -0.74em 0 -0.42em $color-2,
        -0.645em -0.522em 0 -0.44em $color-3,
        -0.775em -0.297em 0 -0.46em $color-4,
        -0.82em -0.09em 0 -0.477em $color-5;
    }

    50% {
        opacity: 1;
        transform: rotate(450deg);
        box-shadow:
        0 -0.83em 0 -0.4em $color-1,
        0 -0.83em 0 -0.42em $color-2,
        0 -0.83em 0 -0.44em $color-3,
        0 -0.83em 0 -0.46em $color-4,
        0 -0.83em 0 -0.477em $color-5;

    }

    51%,
    100% {
        opacity: 0;
        transform: rotate(450deg);
        box-shadow:
        0 -0.83em 0 -0.4em $color-1,
        0 -0.83em 0 -0.42em $color-2,
        0 -0.83em 0 -0.44em $color-3,
        0 -0.83em 0 -0.46em $color-4,
        0 -0.83em 0 -0.477em $color-5;
    }
}

@keyframes load2 {
    0%,
    49% {
        opacity: 0;
        transform: rotate(-90deg);
        box-shadow:
        0 -0.83em 0 -0.4em $color-1,
        0 -0.83em 0 -0.42em $color-2,
        0 -0.83em 0 -0.44em $color-3,
        0 -0.83em 0 -0.46em $color-4,
        0 -0.83em 0 -0.477em $color-5;
    }

    50% {
        opacity: 1;
        transform: rotate(-90deg);
        box-shadow:
        0 -0.83em 0 -0.4em $color-1,
        0 -0.83em 0 -0.42em $color-2,
        0 -0.83em 0 -0.44em $color-3,
        0 -0.83em 0 -0.46em $color-4,
        0 -0.83em 0 -0.477em $color-5;
    }

    52.5%,
    97.5% {
        box-shadow:
        0 -0.83em 0 -0.4em $color-1,
        0 -0.83em 0 -0.42em $color-2,
        0 -0.83em 0 -0.44em $color-3,
        0 -0.83em 0 -0.46em $color-4,
        0 -0.83em 0 -0.477em $color-5;
    }

    55%,
    79% {
        box-shadow:
        0 -0.83em 0 -0.4em $color-1,
        0.087em -0.825em 0 -0.42em $color-2,
        0.173em -0.812em 0 -0.44em $color-3,
        0.256em -0.789em 0 -0.46em $color-4,
        0.297em -0.775em 0 -0.477em $color-5;
    }

    60% {
        box-shadow:
        0 -0.83em 0 -0.4em $color-1,
        0.338em -0.758em 0 -0.42em $color-2,
        0.555em -0.617em 0 -0.44em $color-3,
        0.671em -0.488em 0 -0.46em $color-4,
        0.749em -0.34em 0 -0.477em #ffffff;
    }

    79% {
        box-shadow:
        0 -0.83em 0 -0.4em $color-1,
        0.377em -0.74em 0 -0.42em $color-2,
        0.645em -0.522em 0 -0.44em $color-3,
        0.775em -0.297em 0 -0.46em $color-4,
        0.82em -0.09em 0 -0.477em $color-5;
    }

    100% {
        opacity: 1;
        transform: rotate(-450deg);
        box-shadow:
        0 -0.83em 0 -0.4em $color-1,
        0 -0.83em 0 -0.42em $color-2,
        0 -0.83em 0 -0.44em $color-3,
        0 -0.83em 0 -0.46em $color-4,
        0 -0.83em 0 -0.477em $color-5;
    }
}
</style>

<template>
    <div class="animation-wrapper">
        <div class='loader-wrapper'>
            <div class='loader loader1'></div>
            <div class='loader loader2'></div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>
