<template>
<div>
    <img src="../assets/girl1.svg" >
</div>
    {{det}}
</template>
<script setup>
    defineExpose(["det"])
</script>
<style scoped>
     img {
         width: 60px;
         clip-path: circle();
     }
</style>