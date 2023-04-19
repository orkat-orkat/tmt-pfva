<script setup lang="ts">

import TheFooter from '@/pages/TheFooter.vue'
import TheHeader from '@/pages/TheHeader.vue'

</script>

<template>
  <div class="wrap">
  <TheHeader />

   <main class="main">
    <RouterView />
   </main>
  
   <TheFooter />
 
  </div>


</template>

<style>
@import 'assets/css/destyle.css'; /* reset */ 
@import 'assets/css/pages.css';   /* each pages layouts and bases */ 
@import 'style.css'; /* special  */ 
</style>
