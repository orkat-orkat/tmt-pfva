<script setup lang="ts">
import Projects from '@/pages/Projects.vue'
import Feature from '@/pages/Feature.vue'
</script>

<template>
  <div class="contents">
  <h4 class="subtitle1">About</h4>
  <div class="self-wrap">
  <ul class="about-txt">
        <li>これまで行ってきた仕事や、仕事内容について忘備録を兼ねてリストアップしています。</li>
        <li>主にB to B に関する幅広いWeb制作、アプリ制作の制作経験があります。MSOffice, Adobe製品を使うことができます。
        <br>プロトタイプ作成には主にXDを使い、プロジェクトによりMiroなどを使いデータを収集することもあります。</li>
        </ul>
    </div>

    <h4 class="subtitle4">Career History</h4>
    <ol class="timeline-003">
        <li class="prev">Coder</li>
        <li class="prev">Web Designer</li>
        <li class="prev">Experience Designer / SE</li>
        <li class="current">UX Designer</li>
        <li>NEXT STAGE</li>
    </ol>


    <div class="self-wrap">
        <div class="self-items4">
        User Research <br>（ユーザー理解）
      </div>
      
      <div class="self-history"><font-awesome-icon :icon="['fas', 'plus']" /></div>
      <div class="self-items4">
        User Experience<br>（体験構築）
      </div>
      <div class="self-history"><font-awesome-icon :icon="['fas', 'plus']" /></div>
      <div class="self-items4">
        Business Requirement<br>(要件定義)
      </div>
      <div class="self-history"><font-awesome-icon :icon="['fas', 'plus']" /></div>
      <div class="self-items4">
        Technology<br>（技術）
      </div>
  </div>

    <p class="about-txt">将来はプロダクトやサービス、業務全体の専門家になれるよう、経験を積みたいと思っています。<br>
        興味があるのは、DXや業務改善、労働環境改善からの経営改善アプローチです。<br>
        チームメンバーとコミュニケーションをとりながらプロダクト改善、プロダクト開発に貢献していきたいです。<br>
        理想の働き方はリモートワークで、海外からでも仕事をできるにようになりたいです。
    </p>
 
  <!--- Project pageから-->
  

 
  <div class="about-project">
    <Feature/>
  </div>


  </div><!-- contents-->
  
</template>
 
<style scoped>
</style>