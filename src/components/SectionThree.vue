<template>
  <div
    class="h-[610px] md:h-[450px] lg:h-[639px] flex flex-col items-center px-5 md:px-10 lg:px-14 py-5 md:flex-row"
  >
    <div
      class="order-2 md:order-1 h-[60%] flex flex-col justify-evenly lg:px-6 xl:px-10 md:w-1/2 md:px-0"
    >
      <h2
        class="text-[32px] font-bold leading-[40px] text-[#1B1C20] lg:w-[90%] lg:text-[48px] lg:leading-[56px]"
      >
        Start selling directly inside conversations
      </h2>
      <p
        class="font-normal text-[16px] leading-[26px] text-[#383A47] lg:w-[90%]"
      >
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered all injected humour or randomised words which
        don't look even slightly believable.
      </p>
      <Button content="Start Chatting Now " />
    </div>
    <div class="order-1 md:order-2 flex justify-center md:w-1/2">
      <DirectMessage />
    </div>
  </div>
</template>

<script setup>
import Button from './Button.vue'
import DirectMessage from './DirectMessage.vue'
</script>
<style scoped></style>
