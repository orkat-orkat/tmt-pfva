<script setup lang="ts">
import Projects from '@/pages/Projects.vue'
/* import Timeline from '@/pages.Timeline.vue' */
</script>

<template>
  <div class="contents">
  <h4 class="subtitle1">Career and Project List</h4>

    <h4 class="subtitle4">Career History</h4>
    <ol class="timeline-003">
        <li class="prev">Coding</li>
        <li class="prev">Web Designer</li>
        <li class="prev">Experience Designer / SE</li>
        <li class="current">UX Designer</li>
        <li>NEXT STAGE</li>
    </ol>
 
  <!--- Project pageから-->
  <div class="about-project">
    <Projects />
  </div>

  </div><!-- contents-->
  
</template>
 
<style scoped>
</style>