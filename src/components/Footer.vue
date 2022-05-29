<template>
  <div
    class="h-[651px] md:h-[480px] lg:h-[660px] px-5 md:px-10 lg:px-14 py-5 bg-white flex flex-col items-center justify-evenly"
  >
    <h5
      class="text-[32px] lg:text-[48px] leading-[40px] lg:leading-[56px] font-bold text-[#1B1C20] text-center md:w-[80%] lg:w-[70%] xl:w-[50%]"
    >
      Ready to grow your business? <br />
      Start with Apex, become faster every second
    </h5>
    <Button content="Start Chatting now" />
    <div class="w-full flex flex-col items-center gap-y-8 md:flex-col">
      <div
        class="w-full flex flex-col items-center gap-y-8 md:flex-row md:justify-between"
      >
        <img src="../assets/Logo.svg" alt="" class="h-[50px] md:h-[40px]" />
        <ul class="flex justify-evenly gap-x-10  xl:gap-x-14">
          <li class="text-[16px] leading-[30px] font-medium text-[#1B1C20]">
            About
          </li>
          <li class="text-[16px] leading-[30px] font-medium text-[#1B1C20]">
            About
          </li>
          <li class="text-[16px] leading-[30px] font-medium text-[#1B1C20]">
            About
          </li>
          <li class="text-[16px] leading-[30px] font-medium text-[#1B1C20]">
            About
          </li>
        </ul>
        <div class="flex gap-x-4 md:gap-x-5 lg:gap-x-10">
          <img src="../assets/twitter.svg" alt="" />
          <img src="../assets/facebook.svg" alt="" />
          <img src="../assets/instagram.svg" alt="" />
          <img src="../assets/github.svg" alt="" />
        </div>
      </div>
      <div
        class="border-t border-[#D4D4D8] text-[16px] leading-[26px] text-[#797B89] flex flex-col gap-y-3 pt-2 sm:flex-row sm:justify-between sm:w-full"
      >
        <p>© Copyright 2022, All Rights Reserved</p>
        <div class="flex justify-between">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from './Button.vue'
</script>
<style scoped></style>
