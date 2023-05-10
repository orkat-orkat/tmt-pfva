<script setup lang="ts">
import Skills from '@/pages/Skills.vue'
</script>

<template>
  <div class="contents">
    <div class="cv">
    <h4 class="subtitle1">CV</h4>

    <h6 class="subtitle4 workexperience">Work Expreience</h6>

    <ul class="cv-list">
      <li class="list-short-text cv-year">2021 - 2023</li>
      <li class="list-short-text edu-school">Fujisoft : System Integrator</li>
      <li class="list-long-text">UX Designer at Sony HCD Division</li>
    </ul>
    <ul class="cv-list">
      <li class="list-short-text cv-year">2020 - 2014</li>
      <li class="list-short-text edu-school">Avanade : System Integrator</li>
      <li class="list-long-text">Experience Designer</li>
    </ul>

    <ul class="cv-list">
      <li class="list-short-text cv-year">2011 - 2013</li>
      <li class="list-short-text edu-school">BP-net : Web production</li>
      <li class="list-long-text">Web Designer, Web Director at NHK (NHK World)</li>
    </ul>
    <ul class="cv-list">
      <li class="list-short-text cv-year">Before </li>
      <li class="list-short-text edu-school">Working at web production company </li>
    </ul>

    <hr style="border:none; margin:2em; ">

    <h6 class="subtitle4 education">Education</h6>
    <ul class="cv-list">
      <li class="list-short-text cv-year">2021</li>
      <li class="list-short-text edu-school">キカガク長期コース</li>
      <li class="list-long-text">AI / Deep Learning study course finished</li>
    </ul>

    <ul class="cv-list">
      <li class="list-short-text cv-year">2021</li>
      <li class="list-short-text edu-school">大原学園 経営管理基礎科<br />(中小企業診断士準備)修了</li>
      <li class="list-long-text">SME management consultants study finished</li>
    </ul>
    <ul class="cv-list">
      <li class="list-short-text cv-year">2018</li>
      <li class="list-short-text edu-school"><font-awesome-icon :icon="['fas', 'arrow-progress']" />IDF Design Thinking Course</li>
      <li class="list-long-text">Empathize / Define / Ideate / Prototype / Test</li>
    </ul>
    <ul class="cv-list">
      <li class="list-short-text cv-year">2018</li>
      <li class="list-short-text edu-school"><font-awesome-icon :icon="['fas', 'arrow-progress']" />IDF Visual Design Course</li>
      <li class="list-long-text">Visualization</li>
    </ul>

    <ul class="cv-list" style="margin-bottom:3em;">
      <li class="list-short-text cv-year">2002</li>
      <li class="list-short-text edu-school">University of Surrey </li>
      <li class="list-long-text">Internet Multimedia and Computing</li>
    </ul>
    
  </div>

  <h6 class="subtitle4 education">Certification</h6>
    <ul class="cv-list">
      <li class="list-short-text">TOEIC 755 </li>
      <li class="list-short-text">IELTS 6.0</li>
      <li class="list-short-text">IT Passport</li>
      <li class="list-short-text">Web Design Creator Certificate (Upper Class)</li>
    </ul>
    <ul class="cv-list">
      <li class="list-short-text">AWS : AWS Cloud Practitioner</li>
      <li class="list-short-text">Azure : AZ-900 MS Azure Fundamentals</li>
      <li class="list-short-text">MS HTML5 and CSS3 Japascript</li>
    </ul>

<hr style="border:none; margin:2em; ">

  <h4 class="subtitle1 cv-skills">Design Certificate</h4>
    <h6 class="subtitle4 certs">HCD (人間中心設計専門家（Certified Human Centered Design Professional)）</h6>
    <ul class="cv-list" style="margin-bottom:3em;">
      <li class="list-short-text skill-name">User Research / HCD Process</li>
      <li class="list-long-text">Affinity Diagram(KJ Method) / Customer Journey Map / Workshop</li>
    </ul>
    
    <h6 class="subtitle4 certs">色彩検定（Test in color coordination）</h6>
    <ul class="cv-list">
      <li class="list-short-text skill-name">2nd Class</li>
      <li class="list-long-text">Color Managemtnt</li>
    </ul>
    <ul class="cv-list">
      <li class="list-short-text skill-name">UC Class</li>
      <li class="list-long-text">Universal Design</li>
    </ul>
    <ul class="cv-list">
      <li class="list-short-text">Google Analytics</li>
    </ul>

    <hr style="border:none; margin:2em; ">
  <div class="cv-skills">
    <Skills />
  </div>
</div>
</template>


