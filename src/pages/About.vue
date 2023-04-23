<script setup lang="ts">
import Projects from '@/pages/Projects.vue'
/* import Timeline from '@/pages.Timeline.vue' */
</script>

<template>
  <div class="contents">
  <h4 class="subtitle1">About</h4>
  <div class="self-wrap">
  <ul class="about-txt">
            <li>これまで行ってきた仕事や、仕事内容について書いています。</li>
            <li>いつも大変でしたが、楽しかったです。</li>
        </ul>
    </div>

    <h4 class="subtitle4">Work History</h4>
    <ol class="timeline-003">
        <li class="prev">Coding</li>
        <li class="prev">Web Designer</li>
        <li class="prev">Experience Designer / SE</li>
        <li class="current">UX Designer</li>
        <li>Future</li>
    </ol>
    
  
    <div class="self-wrap">
      <div class="my-history">
      <div class="self-history-items">User Research</div>
      <div class="self-history"><font-awesome-icon :icon="['fas', 'plus']" /></div>
      <div class="self-history-items">User Research</div>
      <div class="self-history"><font-awesome-icon :icon="['fas', 'plus']" /></div>
      <div class="self-history-items">User Research</div>
    </div>
    </div>



    <p class="about-txt">上記三本柱で、仕事をしてきました。<br>将来はUX Consultantや、プロダクトやサービス全体の専門家として、もっと経験を積みたいと思っています。<br>
        興味があるのは、DXや業務改善、労働改善からの → 経営改善アプローチです。<br>
        チームメンバーとコミュニケーションをとりながらプロダクト改善、プロダクト開発をしていきたいです。<br>
        理想の働き方はリモートワークで、海外からでも仕事をできるにようになりたいです。<br>
    </p>
 
  <h4 class="subtitle1">Output</h4>
  <div class="self-wrap">
    <div class="output-items">User Research</div>
    <div class="output-items">Interview</div>
    <div class="output-items">Customer J Map</div>
    <div class="output-items">KJ Method</div>
    <div class="output-items">Wireflame</div>
    <div class="output-items">PoC</div>
  </div>

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