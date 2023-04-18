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
     <Top />
   </main>

   <main class="main">
    <RouterView />
  
   </main>
  
   <TheFooter />
 
  </div>


</template>

<style>
@import 'assets/css/destyle.css';
@import 'assets/css/base.css';
.wrap{
 display: flex;
 flex-direction:column;
 align-items: center;
 min-height: 100vh;
 widows: 480px;
 margin: 0 auto;
 font-family: sans-serif;
}

.main{
 flex:1;
 width: 100%;
}
#app {
 font-family: Avenir, Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-align: center;
 color: #2c3e50;
}
</style>
