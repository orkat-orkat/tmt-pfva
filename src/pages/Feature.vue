<script setup lang="ts">
import Output from '@/pages/Output.vue'
import ProgrammingList from '@/pages/ProgrammingList.vue'
/* import Timeline from '@/pages.Timeline.vue' */
</script>


<template>
  <h4 class="subtitle1">Feature Project List</h4>
  <nav class="sub-end-nav">
    <li><RouterLink to="/English">English</RouterLink></li>
    <li><RouterLink to="/ProjectList">Other Project</RouterLink></li>
  </nav>

 
  <div class="tbl_container about-sub-title">
    <div class="tbl_box_1 br-1">Project List</div>
    <div class="tbl_box_2">Industry</div>
    <div class="tbl_box_3">Phase / Output</div>
    <div class="tbl_box_3 br-2">As UX Designer </div>
  </div>

  <div class="tbl_container">
    <div class="tbl_box_1">[Sony]次世代車載製品</div>
    <div class="tbl_box_2">Electronics Company</div>
    <div class="tbl_box_3">Car Navigation</div>
    <div class="tbl_box_3">
      <ul class="about-box-list project-skills">
            <li>人材開発資料作成</li>
        </ul>
    </div>
  </div>
  <div class="tbl_container">
    <div class="tbl_box_1">[Sony]音楽アプリのUX体験開発</div>
    <div class="tbl_box_2">Electronics Company</div>
    <div class="tbl_box_3">Music Apps</div>
    <div class="tbl_box_3">
      <ul class="about-box-list project-skills">
            <li>デザインシステム作成</li>
            <li>デザインリサーチ</li>
        </ul>
    </div>
  </div>

  <div class="tbl_container">
    <div class="tbl_box_1">
        [富士ソフト]ドローン操作用画面、車の配車アプリなどのUI開発
        </div>
    <div class="tbl_box_2">Drone Company</div>
    <div class="tbl_box_3">UI Development</div>
    <div class="tbl_box_3">
      <ul class="about-box-list project-skills">
            <li>デザインリサーチ</li>
            <li>競合リサーチ</li>
            <li>デザインシステム作成</li>
        </ul>
    </div>
  </div>
  <div class="tbl_container" style="margin-bottom:3em;">
    <div class="tbl_box_1">
        [富士ソフト]ベンチャー企業の金融サイト改善に関するユーザー調査
        </div>
    <div class="tbl_box_2">Finance Company</div>
    <div class="tbl_box_3">Finance</div>
    <div class="tbl_box_3">
      <ul class="about-box-list project-skills">
            <li>ヒューリスティック調査</li>
            <li>デザインリサーチ</li>
        </ul>
    </div>
  </div>


</template>

<style scoped>

.tbl_container{ display: table;
    width:100%;
  text-align: left;}
.tbl_container > div{
    display: table-cell;
    border-bottom: 1px solid #d1d1d1; 
}
.tbl_box_1{ background-color: #D7D7D7;
width:30%;
padding:1%;}
.tbl_box_2{background-color: #85CFD2 ; width:20%; padding:1%;}
.tbl_box_3{background-color: #85CFD2; width:30%; padding:1%;}

.br-1{border-radius: 1em 0 0 0;}
.br-2{border-radius: 0 1em 0 0;}
.br-3{border-radius: 0 0 0 1em;}
.br-4{border-radius: 0 0 1em 0;}

.touka{
  opacity: 0.8;
}

.sub-end-nav{
  display: flex;
  justify-content: flex-end;
  margin: 1.2em;
}

.sub-end-nav li{
  
  list-style: none;
}
.sub-end-nav a{padding: 0 1em;}

.sub-end-nav a::after {
    display: inline-block;
    content: '';
    font-size: 80%;
    font-weight: bold;
    padding: 0 3px;
}

</style>