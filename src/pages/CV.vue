<script setup lang="ts">
import Skills from '@/pages/Skills.vue'

</script>

<template>
  <div class="contents">
    <div class="cv">
    <h4 class="subtitle1">CV</h4>

    <h6 class="subtitle4 workexperience">Work Expreience</h6>

    <ul class="cv-list">
      <li class="list-short-text">2022年</li>
      <li class="list-short-text">Fujisoft : System Integrator</li>
      <li class="list-long-text">UX Design at Sony HCD Division</li>
    </ul>
    <ul class="cv-list">
      <li class="list-short-text">2020年-2014年</li>
      <li class="list-short-text">Avanade : System Integrator</li>
      <li class="list-long-text">Experience Designer</li>
    </ul>

    <ul class="cv-list">
      <li class="list-short-text">untill 2013年</li>
      <li class="list-short-text">BP-net : Web Creators</li>
      <li class="list-long-text">Web Designer at NHK (NHK World)</li>
    </ul>

    <hr style="border:none; margin:4em; ">

    <h6 class="subtitle4 education">Education</h6>
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

    <ul class="cv-list">
      <li class="list-short-text">2021年</li>
      <li class="list-short-text">School</li>
      <li class="list-long-text">School内容</li>
    </ul>
  </div>

  <hr style="border:none; margin:4em; ">

  <h4 class="subtitle1 cv-skills">Design Certificate</h4>
    <h6 class="subtitle4 certs">HCD (人間中心設計専門家（Certified Human Centered Design Professional)）</h6>
    <ul class="cv-list">
      <li class="list-short-text skill-name">User Research / HCD Process</li>
      <li class="list-short-text">Affinity Diagram(KJ Method) / <br> Customer Journey Map / Workshop</li>
      <li class="list-long-text">Certified</li>
    </ul>
    <h6 class="subtitle4 certs">Design Thinking</h6>
    <ul class="cv-list">
      <li class="list-short-text skill-name"><font-awesome-icon :icon="['fas', 'arrow-progress']" />Design Thinking Process</li>
      <li class="list-short-text">Empathize / Define / Ideate /  <br>  Prototype / Test</li>
      <li class="list-long-text">Certified</li>
    </ul>
    <h6 class="subtitle4 certs">色彩検定（Test in color coordination）</h6>
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


