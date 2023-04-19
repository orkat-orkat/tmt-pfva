<script setup lang="ts">
import Skills from '@/pages/Skills.vue'

</script>

<template>
  <div class="contents">
    <div class="cv">
    <h4 class="subtitle1">CV</h4>

    <h6 class="subtitle4">Work Expreience</h6>
    <ul class="cv-list">
      <li class="list-short-text">XXXX年</li>
      <li class="list-short-text">会社</li>
      <li class="list-long-text">仕事内容</li>
    </ul>

    <ul class="cv-list">
      <li class="list-short-text">2023年</li>
      <li class="list-short-text">FujiSoft</li>
      <li class="list-long-text">UX Design at sony</li>
    </ul>
    <ul class="cv-list">
      <li class="list-short-text">2022年</li>
      <li class="list-short-text">会社</li>
      <li class="list-long-text">仕事内容</li>
    </ul>

    <ul class="cv-list">
      <li class="list-short-text">2021年</li>
      <li class="list-short-text">会社</li>
      <li class="list-long-text">仕事内容</li>
    </ul>

    <hr style="border:none; margin:4em; ">

    <h6 class="subtitle4 education">Education</h6>
    <ul class="cv-list">
      <li class="list-short-text">XXXX年</li>
      <li class="list-short-text">School</li>
      <li class="list-long-text">School内容</li>
    </ul>

    <ul class="cv-list">
      <li class="list-short-text">2021年</li>
      <li class="list-short-text">School</li>
      <li class="list-long-text">School内容</li>
    </ul>

    <ul class="cv-list">
      <li class="list-short-text">2021年</li>
      <li class="list-short-text">School</li>
      <li class="list-long-text">School内容</li>
    </ul>
  </div>

  <hr style="border:none; margin:4em; ">

  <h4 class="subtitle1 cv-skills">Design Certificate</h4>
    <h6 class="subtitle4 education">人間中心設計専門家（Certified Human Centered Design Professional）</h6>
    <ul class="cv-list">
      <li class="list-short-text skill-name">User Research</li>
      <li class="list-short-text">Affinity Diagram(KJ Method) / <br> Customer Journey Map / Workshop</li>
      <li class="list-long-text">Certified</li>
    </ul>
    <h6 class="subtitle4 education">色彩検定（Test in color coordination）</h6>
    <ul class="cv-list">
      <li class="list-short-text skill-name">2nd Class</li>
      <li class="list-short-text">Color Managemtnt</li>
      <li class="list-long-text">Certified</li>
    </ul>
    <ul class="cv-list">
      <li class="list-short-text skill-name">UC Class</li>
      <li class="list-short-text">Universal Design</li>
      <li class="list-long-text">Certified</li>
    </ul>

    <hr style="border:none; margin:4em; ">
  <div class="cv-skills">
    <Skills />
  </div>
</div>
</template>


