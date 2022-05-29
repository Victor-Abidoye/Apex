<template>
  <div class="relative">
    <div
      class="h-[235px] w-[205px] lg:h-[420px] lg:w-[370px] shadow-2xl bg-white p-3 lg:py-8 lg:px-5 rounded-lg z-0"
    >
      <div class="flex gap-x-4 pb-2 lg:pb-5">
        <img
          class="h-[22px] lg:h-[40px] w-[22px] lg:w-[40px] rounded-full object-cover"
          src="../assets/ladyDM1.svg"
          alt=""
        />
        <p
          class="w-[80%] bg-[#F7F8FA] p-2 text-[8px] lg:text-[15px] lg:leading-[21px] leading-[12px] font-medium pb-2 rounded-sm"
        >
          Hello! My name is Alex, how can I help you?
        </p>
      </div>

      <div class="flex gap-x-4 pb-2 lg:pb-5">
        <img
          class="h-[22px] lg:h-[40px] w-[22px] lg:w-[40px] rounded-full object-cover order-2"
          src="../assets/ladyDM2.svg"
          alt=""
        />
        <p
          class="w-[80%] bg-[#FD6003] lg:text-[15px] lg:leading-[21px] p-2 text-[8px] leading-[12px] font-medium order-1 rounded-sm ml-11"
        >
          Hello! My name is Alex, how can I help you?
        </p>
      </div>

      <div class="flex gap-x-4 pb-2 lg:pb-5">
        <img
          class="h-[22px] lg:h-[40px] w-[22px] lg:w-[40px] rounded-full object-cover"
          src="../assets/ladyDM1.svg"
          alt=""
        />
        <p
          class="w-[80%] bg-[#F7F8FA] lg:text-[15px] lg:leading-[21px] p-2 text-[8px] leading-[12px] font-medium rounded-sm"
        >
          Hello! My name is Alex, how can I help you?
        </p>
      </div>

      <div class="flex gap-x-4 pb-2 lg:pb-5">
        <div class="h-[22px] lg:h-[40px] w-[22px] lg:w-[40px]"></div>
        <p
          class="w-[15%] text-center lg:h-[20px] bg-[#F7F8FA] px-2 text-[8px] leading-[12px] font-extrabold rounded-lg"
        >
          ...
        </p>
      </div>
      <div
        class="h-[25px] w-full border items-center border-[#C6C8D3] flex justify-between p-1"
      >
        <p class="text-[8px] leading-[12px] text-[#C6C8D3]">
          Write your reply...
        </p>
        <div
          class="h-[20px] w-[20px] bg-[#C6C8D3] flex justify-center items-center text-white"
        >
          <p class="text-[9px]">></p>
        </div>
      </div>
    </div>
    <Survey />
    <Call />
  </div>
</template>
<script setup>
import Survey from './Survey.vue'
import Call from './call.vue'
defineProps(['content'])
</script>
<style scoped></style>
