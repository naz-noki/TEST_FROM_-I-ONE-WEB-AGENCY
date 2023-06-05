<template>
    <div class="imageBlock">
        <div class="imageBlock__text wow fadeInUp">TEST FROM I-ONE WEB AGENCY</div>
    </div>
</template>

<script setup lang="ts">
    import { useHead } from 'nuxt/app';

    useHead({
        link: [
            { rel:"stylesheet", href:"/animations/animate.css" },
        ],
        script: [
            { src: "/animations/wow.min.js" },
            { innerHTML: 'new WOW().init();' },
        ],
    })
</script>