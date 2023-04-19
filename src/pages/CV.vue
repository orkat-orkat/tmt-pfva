<script setup lang="ts">
import Skills from '@/pages/Skills.vue'

</script>

<template>
  <div class="contents">
    <div class="cv">
    <h4 class="subtitle1">CV</h4>

    <h6 class="subtitle4">Work Expreience</h6>
    <ul class="cv-list">
      <li class="list-short-text bold">XXXX年</li>
      <li class="list-short-text bold">会社</li>
      <li class="list-long-text bold">仕事内容</li>
    </ul>

    <ul class="cv-list">
      <li class="list-short-text bold">2023年</li>
      <li class="list-short-text bold">FujiSoft</li>
      <li class="list-long-text bold">UX Design at sony</li>
    </ul>
    <ul class="cv-list">
      <li class="list-short-text bold">2022年</li>
      <li class="list-short-text bold">会社</li>
      <li class="list-long-text bold">仕事内容</li>
    </ul>

    <ul class="cv-list">
      <li class="list-short-text bold">2021年</li>
      <li class="list-short-text bold">会社</li>
      <li class="list-long-text bold">仕事内容</li>
    </ul>

    <hr style="border:none; margin:24px; ">

    <h6 class="subtitle4 education">Education</h6>
    <ul class="cv-list">
      <li class="list-short-text bold">XXXX年</li>
      <li class="list-short-text bold">School</li>
      <li class="list-long-text bold">School内容</li>
    </ul>

    <ul class="cv-list">
      <li class="list-short-text bold">2021年</li>
      <li class="list-short-text bold">School</li>
      <li class="list-long-text bold">School内容</li>
    </ul>

    <ul class="cv-list">
      <li class="list-short-text bold">2021年</li>
      <li class="list-short-text bold">School</li>
      <li class="list-long-text bold">School内容</li>
    </ul>
  </div>
  
  <div class="cv-skills">
    <Skills />
  </div>
</div>
</template>


