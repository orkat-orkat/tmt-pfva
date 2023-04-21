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
    <h5 class="">Main Job</h5>
      
        <div class="self-wrap">
      <div class="self-history-items">Web Designer </div>
      <div class="self-history"><font-awesome-icon :icon="['fas', 'arrow-right']" /></div>
      <div class="self-history-items">Experience Designer / SE</div>
      <div class="self-history"><font-awesome-icon :icon="['fas', 'arrow-right']" /></div>
      <div class="self-history-items">UX Designer </div>
  </div>

  <div class="self-wrap">
      <div class="about-items">UX Designer <p style="font-weight:bold;color:aliceblue;font-size:42px; margin-top:60px; margin-left:74px;">体験価値</p></div>
      <div class="about-items">UX Researcher<p style="font-weight:bold;color:aliceblue;font-size:42px; margin-top:60px; margin-left:40px;">調査 / 理解</p></div>
      <div class="about-items">Front Engineering<p style="font-weight:bold;color:aliceblue;font-size:42px; margin-top:60px; margin-left:122px;">技術</p></div>
  </div>

    <p class="about-txt">上記三本柱で、仕事をしてきました。UX Consultantとして、もっと経験を積みたいと思っています。<br>
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