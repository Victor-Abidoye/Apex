<template>
<div>
  <Navbar/>
  <HeaderMain/>
  <SectionOne/>
  <SectionTwo/>
  <SectionThree/>
  <SectionFour/>
  <SectionFive/>
</div>

</template>

<script setup>
import Navbar from './components/Navbar.vue';
import HeaderMain from './components/HeaderMain.vue';
import SectionOne from './components/SectionOne.vue';
import SectionTwo from './components/SectionTwo.vue';
import SectionThree from './components/SectionThree.vue';
import SectionFour from './components/sectionFour.vue';
import SectionFive from './components/SectionFive.vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<style scoped>
  p {
    color: red;
  }
</style>
