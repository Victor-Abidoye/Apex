<template>
    <div class="bg-[#07C5B9] h-[70px] w-[95px] lg:w-[200px] lg:h-[146px] text-[6px] lg:text-[13px] lg:leading-[17px] p-2 rounded-md text-white flex flex-col justify-around absolute z-10 top-[15%] -left-[25%] lg:top-[75%] lg:-left-[36%]">
        <p>Will we have daily calls for every projects</p>
        <div class="flex flex-col">
            <div class="flex justify-between pb-1 lg:pb-2"><p>Yes</p><p>65%</p></div>
            <div class="w-full ">
                <div class="w-[65%] h-[7.5px] bg-white rounded-md">

                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="flex justify-between pb-1 lg:pb-2"><p>Yes</p><p>35%</p></div>
            <div class="w-full rounded-sm">
                <div class="w-[35%] h-[7.5px] bg-white rounded-md">

                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    defineProps(["content"])
</script>
<style scoped>

</style>