<script setup lang="ts">
import Projects from '@/pages/Projects.vue'
/* import Timeline from '@/pages.Timeline.vue' */
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

    <h4 class="subtitle4">Work History</h4>
    <ol class="timeline-003">
        <li class="prev">Coding</li>
        <li class="prev">Web Designer</li>
        <li class="prev">Experience Designer / SE</li>
        <li class="current">UX Designer</li>
        <li>NEXT STAGE</li>
    </ol>


    <div class="self-wrap">
        <div class="self-items5">
        User Research（ユーザー理解）
      </div>
      
      <div class="self-history"><font-awesome-icon :icon="['fas', 'plus']" /></div>
      <div class="self-items5">
        User Experience（体験構築）
      </div>
      <div class="self-history"><font-awesome-icon :icon="['fas', 'plus']" /></div>
      <div class="self-items5">
        要件定義(Business Requirement)
      </div>
      <div class="self-history"><font-awesome-icon :icon="['fas', 'plus']" /></div>
      <div class="self-items5">
        Technology（技術）
      </div>
  </div>

    <p class="about-txt">上記を軸にして仕事をしています。<br>将来はプロダクトやサービス全体の専門家として、もっと経験を積みたいと思っています。<br>
        興味があるのは、DXや業務改善、労働改善からの → 経営改善アプローチです。<br>
        チームメンバーとコミュニケーションをとりながらプロダクト改善、プロダクト開発に貢献していきたいです。<br>
        理想の働き方はリモートワークで、海外からでも仕事をできるにようになりたいです。
    </p>
 
  <!--- Project pageから-->
  <div class="about-project">
    <Projects />
  </div>


 

  <div class="self-wrap">
      <div class="self-items5">
          <div class="cardList_thumb">
              絵が入る
          </div>
          <h4 class="cardList_title">XXXXXX</h4>
          <p>独学と！プロジェクト</p>
      </div>


      <div class="self-items5">
          <div class="cardList_thumb">
              絵が入る
          </div>
          <h4 class="cardList_title">XXXXXX</h4>
          <p>独学と！プロジェクト</p>
      </div>
      <div class="self-items5">
          <div class="cardList_thumb">
              絵が入る
          </div>
          <h4 class="cardList_title">XXXXXX</h4>
          <p>独学と！プロジェクト</p>
      </div>
      <div class="self-items5">
          <div class="cardList_thumb">
              絵が入る
          </div>
          <h4 class="cardList_title">XXXXXX</h4>
          <p>独学と！プロジェクト</p>
      </div>
      <div class="self-items5">
          <div class="cardList_thumb">
              絵が入る
          </div>
          <h4 class="cardList_title">XXXXXX</h4>
          <p>独学と！プロジェクト</p>
      </div>
  </div>

  </div><!-- contents-->
  
</template>
 
<style scoped>
</style>