<script setup lang="ts">

import TheFooter from '@/pages/TheFooter.vue'
import About from '@/pages/About.vue'
import Top from '@/pages/Top.vue'
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
@import 'assets/css/destyle.css';
@import 'assets/css/base.css';
@import 'assets/css/pages.css';
@import 'style.css';

</style>
