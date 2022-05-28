<template>
    <nav class=" h-14 flex relative  md:sticky top-0  md:flex px-5 sm:px-10 md:px-10 lg:px-14  xl:px-20 justify-between items-center md:h-20 bg-white z-50">
        <img src="../assets/Logo.svg" alt="" class="h-1/2">
        <ul ref="navList" class="hidden absolute h-[60vh] left-0 md:h-fit md:flex md:w-min flex-col justify-evenly  items-center w-full top-[56px] md:static md:text-[16px] md:font-medium text-[#1B1C20] md:flex-row md:gap-x-6 lg:gap-x-9 xl:gap-x-12 bg-white ">
            <li><router-link >Demo</router-link></li>
            <li><router-link >About</router-link></li>
            <li><router-link >Blog</router-link></li>
            <li><router-link >Pages</router-link></li>
            <li><router-link >Contact</router-link></li>
        </ul>
        <div  ref="lowerNavList" class="hidden fixed flex-col bottom-4 justify-center left-0 lg:gap-x-9 gap-y-8 md:static md:flex-row w-full md:w-min md:flex md:gap-x-6 xl:gap-x-12 items-center bg-white">
            <li class="list-none md:text-[16px] md:font-medium text-[#1B1C20]"><router-link >Demo</router-link></li>
            <Button content="Get Started Free" />
        </div>
        <div class="burger md:hidden" ref="burger" @click="showMobile" >
                <div class="line1 w-[25px] h-[2px] rounded-md bg-black mb-1"></div>
                <div class="line3 w-[25x] h-[2px] rounded-md bg-black mb-1"> </div>
                <div class="line3 w-[25px] h-[2px] bg-black rounded-md mb-1"> </div>
            </div>
    </nav>
</template>

<script setup >
import { ref } from 'vue';
import Button from './Button.vue';

    // BURGER AND NAV LINKS REFERENCE
    const burger = ref(null)
    const navList = ref(null)
    const lowerNavList = ref(null)

    // TOGGLE MOBILE NAV VIEW
    const showMobile = ()=>{
        // SCREEEN TYPE
        const desktop = burger.value.classList.value.split(' ').includes('hidden')
        if (!desktop){
            navList.value.classList.toggle('hidden')
            navList.value.classList.toggle('flex')
            lowerNavList.value.classList.toggle('hidden')
            lowerNavList.value.classList.toggle('flex')
        }
    }
</script>
<style scoped>

</style>