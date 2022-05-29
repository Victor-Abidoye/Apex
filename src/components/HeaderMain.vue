<template>
  <div
    class="h-[1000px] md:h-[700px]  px-5 md:px-10 lg:px-14  sm:px-10 flex flex-col gap-y-10 md:flex-row "
  >
    <div class="md:w-[50%] lg:w-[40%] md:flex md:flex-col md:justify-center">
      <h1 class="text-[34px] md:text-[40px] font-bold leading-[49px] md:leading-[52px] text-[#1B1C20] mb-6 md:mb-10">
        Start chatting with customers, anytime, anywhere with Apex
      </h1>
      <p class="text-[18px] font-normal leading-[32px] text-[#383A47] mb-6 md:mb-10">
        Great software that allows you to chat from any place at any time
        without any interruption.
      </p>
      <Button content="Get started now &#10140;" class="mb-6 md:mb-10" />
      <div class="flex flex-wrap gap-x-5 gap-y-5">
        <div class="flex">
          <img
            class="h-[60px] border-4 border-white w-[60px] object-cover rounded-full -mr-4"
            src="../assets/girl1.svg"
            alt=""
          />
          <img
            class="h-[60px] w-[60px] border-4 border-white object-cover rounded-full -mr-4"
            src="../assets/man2.svg"
            alt=""
          />
          <img
            class="h-[60px] w-[60px] border-4 border-white object-cover rounded-full"
            src="../assets/girl3.svg"
            alt=""
          />
        </div>
        <div>
          <p class="text-[#12141D] text-[30px] leading-[32px] font-bold">
            2,291
          </p>
          <p class="text-[#383A47] text-[16px] leading-[24px] font-normal">
            Happy Custoumers
          </p>
        </div>
        <div>
          <p class="text-[#12141D] text-[30px] leading-[32px] font-bold">
            4.8/5
          </p>
          <p class="text-[#383A47] text-[16px] leading-[24px] font-normal">
            Rating
          </p>
        </div>
      </div>
    </div>

    <div class=" md:w-[50%] lg:w-[60%] flex justify-center items-center relative">
      <div
        class="h-[250px] w-[250px] border-2 border-black rounded-full absolute -z-10"
      >

      <div
        class="h-[250px] w-[250px] bg-[#FACC15] rounded-full absolute -z-10 top-6 -right-2"
      ></div>
      </div>


      <img src="../assets/African-smiling-small.svg" alt=""  />

      <div class="w-[140px] h-[55px] p-2 rounded-md bg-white opacity-90 flex gap-x-2 absolute left-[15%] top-[65%]">
        <img
          class="h-[40px] w-[40px] rounded-full object-cover "
          src="../assets/man2.svg"
          alt=""
        />
        <div class="w-[65%]">
          <p class="text-[6px] font-bold">Jenny Wilson</p>
          <p class="text-[6px]">
            I commented on Figma, I want to add some fancy icons. Do you have
            any icon set?
          </p>
        </div>
      </div>
      <div class="w-[140px] h-[55px] p-2 rounded-md bg-white opacity-90 flex gap-x-2 absolute left-1/2 top-1/3">
        <img
          class="h-[40px] w-[40px] rounded-full object-cover "
          src="../assets/man2.svg"
          alt=""
        />
        <div class="w-[65%]">
          <p class="text-[6px] font-bold">Jenny Wilson</p>
          <p class="text-[6px]">
            I commented on Figma, I want to add some fancy icons. Do you have
            any icon set?
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from './Button.vue'



</script>
<style scoped>

</style>
