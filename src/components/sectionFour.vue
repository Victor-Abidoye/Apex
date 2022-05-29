<template>
  <div
    class="h-[748px] md:h-[500px] lg:h-[645px] flex flex-col items-center px-5 md:px-10 lg:px-14 py-5 md:flex-row bg-[#F8F8FA]"
  >
    <div class="flex justify-center md:w-1/2">
      <InboxCard/>
    </div>

    <div
      class="h-[60%] flex flex-col justify-evenly lg:px-6 xl:px-10 md:w-1/2 md:px-6"
    >
      <h2
        class="text-[32px] font-bold leading-[40px] text-[#1B1C20] lg:w-[90%] lg:text-[48px] lg:leading-[56px]"
      >
        Get direct orders from your customers
      </h2>
      <p
        class="font-normal text-[16px] leading-[26px] text-[#383A47] lg:w-[90%]"
      >
        Create custom landing pages with Rareblocks that converts more visitors
        than any website. With lots of unique blocks easily build a page. There
        are many variations of passages of available.
      </p>
      <div class="flex justify-between">
        <div class="flex">
          <p
            class="text-[32px] leading-[40px] font-medium lg:text-[42px] lg:leading-[56px] text-[#1B1C20]"
          >
            4.3K+
          </p>
          <div class="flex flex-col text-[14px] leading-[22px] text-[#383A47]">
            <p>Website's</p>
            <p>Powering</p>
          </div>
        </div>
        <div class="flex">
          <p
            class="text-[32px] leading-[40px] font-medium lg:text-[42px] lg:leading-[56px]"
          >
            4.3K+
          </p>
          <div class="flex flex-col text-[14px] leading-[22px]">
            <p>Website's</p>
            <p>Powering</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import InboxCard from './InboxCard.vue';
</script>
<style scoped></style>
