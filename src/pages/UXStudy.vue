<script setup lang="ts">
import Projects from '@/pages/Projects.vue'
/* import Timeline from '@/pages.Timeline.vue' */
</script>

<template>
  <div class="contents">
  <h4 class="subtitle1">UX Study</h4>
  <div class="self-wrap">
  <ul class="about-txt">
        <li>これまで行ってきた仕事や、仕事内容について忘備録を兼ねてリストアップしています。</li>
        <li>主にB to B に関する幅広いWeb制作、アプリ制作の制作経験があります。MSOffice, Adobe製品を使うことができます。
        <br>プロトタイプ作成には主にXDを使い、プロジェクトによりMiroなどを使いデータを収集することもあります。</li>
        </ul>
    </div>

 
  <!--- Project pageから-->
  <div class="about-project">
    <Projects />
  </div>

  </div><!-- contents-->
  
</template>
 
<style scoped>
</style>