<template>
    <div class="comics">
        <div class="comics__title">
            {{ comics.name }}
        </div>
        <controllers />
        <div class="comics__imgBlock">
            <img 
            :src="comics.img" 
            alt="" 
            class="comics__img" 
            loading="lazy">
        </div>
        <controllers />
    </div>
</template>

<script setup lang="ts">

    import {  ref, computed, onMounted, watch, } from 'vue';
    import  { useStore } from 'vuex';
    import getComic from '../modules/getComic';
    import IcastomComics from '../types/IcastomComics';

    const store = useStore();

    const id = computed<number>(()=>store.getters.getID);

    const comics = ref<IcastomComics>({} as IcastomComics);
    
    onMounted(()=>comics.value = getComic(id.value));
    watch(id, ()=>comics.value = getComic(id.value));

</script>