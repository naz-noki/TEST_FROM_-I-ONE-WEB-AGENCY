<template>
    <div class="comics__controllers">
        <button class="controllers__skip" @click="setActionID('dec')">
            <img src="/img/L_skip.png" alt="" class="controllers__skip__img">
        </button>
        <button class="controllers__next">
            <img src="/img/Left.png" alt="" class="controllers__next__img">
        </button>
        <button class="controllers__random" @click="setRandomID">
            <div class="controllers__random__text">Random</div>
        </button>
        <button class="controllers__next">
            <img src="/img/Right.png" alt="" class="controllers__next__img">
        </button>
        <button class="controllers__skip" @click="setActionID('inc')">
            <img src="/img/R_skip.png" alt="" class="controllers__skip__img">
        </button>
    </div>
</template>

<script setup lang="ts">
    
    import { useStore } from 'vuex';

    const store = useStore();

    const setActionID = (action:string):void => {
        store.dispatch('actAddNewId', action);
    }

    const setRandomID = ():void => {
        store.dispatch('actAddRandomId');
    }


</script>