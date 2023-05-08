<script setup lang="ts">
import Output from '@/pages/Output.vue'
import ProgrammingList from '@/pages/ProgrammingList.vue'
/* import Timeline from '@/pages.Timeline.vue' */
</script>


<template>
  <h4 class="subtitle1">Past Project List</h4>
  <p><RouterLink to="/English">English</RouterLink></p>
  <div class="self-wrap" style="margin-bottom: 3em;">
      <div class="about-box">
        <h5 class="about-sub-title">Project List</h5>
        <ul class="about-box-list project-skills">
            <li>[SXXX]次世代車載製品と、音楽アプリのUX体験開発に参画<br>Participated in new product development</li>
            <li>[FXXX]ベンチャー企業の金融サイト改善に関するユーザー調査</li>
            <li>[FXXX]ン操作用画面、車の配車アプリなどのUI開発</li>
        </ul>
      </div>
      <div class="self-items3 self-item-sub1">
        <h5 class="about-sub-title">対象製品、サービス</h5>
        <ul class="about-box-list project-prod">
            <li>次世代車載製品</li>
            <li>MDR(ヘッドホン、音楽アプリ、ハブアプリ)</li>
            <li>社内UX人材教育資料作成</li>
            <li>ドローン用UI開発</li>
        </ul>
      </div>
      <div class="self-items3 self-item-sub2">
        <h5 class="about-sub-title">UX Researcher / UX Designer</h5>
        <ul class="about-box-list project-skills">
            <li>ヒューリスティック調査</li>
            <li>デザインリサーチ</li>
            <li>競合リサーチ</li>
            <li>人材開発資料作成</li>
            <li>デザインシステム作成</li>
        </ul>
      </div>
  </div>
  <div class="tbl_container about-sub-title">
    <div class="tbl_box_1 br-1">Recent Project</div>
    <div class="tbl_box_2">Industry</div>
    <div class="tbl_box_3">Phase / Output</div>
    <div class="tbl_box_3 br-2">As UX Designer </div>
  </div>

  <div class="tbl_container">
    <div class="tbl_box_1">[SXXX]次世代車載製品</div>
    <div class="tbl_box_2">Electronics Company / Car</div>
    <div class="tbl_box_3">Car Navigation</div>
    <div class="tbl_box_3">
      <ul class="about-box-list project-skills">
            <li>人材開発資料作成</li>
        </ul>
    </div>
  </div>
  <div class="tbl_container">
    <div class="tbl_box_1">[SXXX]音楽アプリのUX体験開発</div>
    <div class="tbl_box_2">Electronics Company / Music</div>
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
      [FXXX]ドローン操作用画面、車の配車アプリなどのUI開発
        </div>
    <div class="tbl_box_2">System Integrator / <br />Drone Company</div>
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
      [FXXX]ベンチャー企業の金融サイト改善に関するユーザー調査
        </div>
    <div class="tbl_box_2">System Integrator / <br />Finance Company</div>
    <div class="tbl_box_3">Finance</div>
    <div class="tbl_box_3">
      <ul class="about-box-list project-skills">
            <li>ヒューリスティック調査</li>
            <li>デザインリサーチ</li>
        </ul>
    </div>
  </div>


  <div class="tbl_container about-sub-title">
    <div class="tbl_box_1 br-1">Past Project</div>
    <div class="tbl_box_2">Industry</div>
    <div class="tbl_box_3">Phase / Output</div>
    <div class="tbl_box_3 br-2">Assigned as </div>
  </div>

  <div class="tbl_container">
    <div class="tbl_box_1">[Oil] 大手石油会社内部システム刷新</div>
    <div class="tbl_box_2">Oil Company</div>
    <div class="tbl_box_3">Business Process Management</div>
    <div class="tbl_box_3">PMO</div>
  </div>

  <div class="tbl_container touka">
    <div class="tbl_box_1">[Truck Company] CMS開発をUX上流工程から参画</div>
    <div class="tbl_box_2">Logistics / Truck </div>
    <div class="tbl_box_3">/ UX /</div>
    <div class="tbl_box_3">Experience Designer </div>
  </div>

  <div class="tbl_container">
    <div class="tbl_box_1">[Logistic] 大規模PCマイグレーションプロジェクトのテストフェーズ、サブリーダーとして参画</div>
    <div class="tbl_box_2">Logistic /</div>
    <div class="tbl_box_3">Test Phase, Kitting</div>
    <div class="tbl_box_3">Tester / Sub-Leader /SE</div>
  </div>

  <div class="tbl_container touka">
    <div class="tbl_box_1">[Heavy equipment] Azureを利用した次世代重機の車両開発PoCプロジェクトに参画し、重機と人のデータ表示画面や提案書を作成</div>
    <div class="tbl_box_2">Heavy equipment company / Intra /</div>
    <div class="tbl_box_3">Business Apps / Screen layout/ PoC </div>
    <div class="tbl_box_3">Experience Designer</div>
  </div>

  <div class="tbl_container">
    <div class="tbl_box_1">[Logistic] 大規模PCマイグレーションプロジェクトのテストフェーズ、サブリーダーとして参画</div>
    <div class="tbl_box_2">Logistic / Intra /</div>
    <div class="tbl_box_3">Test Phase / 単体テスト / 結合テスト</div>
    <div class="tbl_box_3">Tester</div>
  </div>

  <div class="tbl_container touka">
    <div class="tbl_box_1">[Agriculture] 農業生産管理システム構築</div>
    <div class="tbl_box_2">Agriculture / Business App / PoC</div>
    <div class="tbl_box_3">Experience Designer / UX (Define - Prototype Phase)</div>
    <div class="tbl_box_3">Experience Designer</div>
  </div>

  <div class="tbl_container">
    <div class="tbl_box_1">[Apparel] ユニクロ社内の人材開発教材アプリと従業員用のトレーニング用アプリ作成</div>
    <div class="tbl_box_2">Apparel / Clothes</div>
    <div class="tbl_box_3">Business Apps / UX (Define Phase)</div>
    <div class="tbl_box_3">Experience Designer </div>
  </div>

  <div class="tbl_container touka">
    <div class="tbl_box_1">[Education ICT] 小学生向けの学校用ICTアプリ</div>
    <div class="tbl_box_2">Education </div>
    <div class="tbl_box_3">ICT Apps / UX (Define Phase)</div>
    <div class="tbl_box_3">Experience Designer</div>
  </div>

  <div class="tbl_container">
    <div class="tbl_box_1 br-3">[他] その他SEとして</div>
    <div class="tbl_box_2">さまざまな業界のサイト、アプリ</div>
    <div class="tbl_box_3">検索サイト、イントラサイトなどの設計フェーズでデザイナーとSEの兼任<br />要件定義、要求分析、 基本設計、コーディング</div>
    <div class="tbl_box_3 br-4">SE</div>
  </div>


  <div class="self-wrap">
      <div class="about-box">
        <h5 class="about-sub-title">Other Past Project </h5>
        <ul class="about-box-list project-li">
            <li>[NHK] Make PR and advertise TV Programming on Internet </li>
            <li>[Marui] Create EC Webistes and Teaser Site</li>
            <li>Create many Websites</li>
        </ul>
      
      </div>
      <div class="self-items3 self-item-sub2">
        <h5 class="about-sub-title">In-House Web Designer Coding</h5>
        <ul class="about-box-list project-skills">
            <li>Web Design / Coding</li>
            <li>SEO</li>
            <li>PR</li>
            <li>Video Editor</li>
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
</style>