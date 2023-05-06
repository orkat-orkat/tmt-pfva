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

 <ul>
  <li>UXデザイナーのポートフォリオには、以下のような内容を書くことができます。</li>

    <li>プロジェクト概要: プロジェクト名、クライアント名、業種、チームの人数、プロジェクトの期間などを紹介します。</li>

      <li>プロジェクト目的: プロジェクトが解決しようとしている問題や課題を説明します。</li>

        <li>プロセス: UXデザインのプロセスを説明します。どのような方法でリサーチを行ったか、どのような設計手法を使用したか、どのようなプロトタイピングやワイヤーフレームを作成したかなど。</li>

          <li>作品: 最終的なデザインを紹介します。ここでは、画面のスクリーンショットやワイヤーフレーム、プロトタイプなどを使用して、デザインを視覚的に表現します。</li>

            <li>成果: プロジェクトの成果を数値やグラフなどで紹介します。これには、ユーザーエンゲージメントの向上、コンバージョン率の向上などが含まれます。</li>

              <li>その他: 他にも、このプロジェクトについての学んだことや感想などを書くことで、自分自身の成長や学習の意義をアピールすることができます。</li>

                <li>これらの要素を組み合わせることで、あなたのUXデザインのスキルや経験をアピールすることができます。 また、一般的には、デザインの変遷や過程、そしてどういったアイデアが元になっているかなども紹介することで、設計思考やアプローチについてもアピールすることができます。</li>

</ul>

<div class="tbl_container about-sub-title">
    <div class="tbl_box_1 br-1">
      <div class="">
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">プロジェクト概要</li>
          <li class="pjt-overview-txt2">次世代車載ナビ搭載機能検討プロジェクト<br />機能要件定義作成プロジェクト</li>
        </ul>

        <ul class="pjt-overview-list1">
        <li class="pjt-overview-txt">クライアント名 <br /> 業種 </li>
        <li class="pjt-overview-txt2">SXXX <br /> エンターテイメント (車載)</li>
        </ul>
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">チームの人数</li>
          <li class="pjt-overview-txt2">6名</li>
        </ul>
       
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">プロジェクトの期間</li>
          <li class="pjt-overview-txt2">12ヶ月 - 5年</li>
        </ul>

        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">プロジェクト目的</li>
          <li class="pjt-overview-txt2">プロジェクトが解決しようとしている問題や課題</li>
        </ul>
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">プロセス :</li>
          <li class="pjt-overview-txt2">前モデルからの次世代モデルへの搭載機能に関するUXレビューと評価を行う。<br />
            競合リサーチと、マーケット評価によるユーザーリサーチ結果を、機能に反映するためのドキュメント作成を担当。<br />
            デザインチームと一緒に、プロトタイプを作成</li>
        </ul>
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">Output : </li>
          <li class="pjt-overview-txt2">機能概要資料<br >
            海外のラジオ機能、衛星ラジオ機能、独自音楽再生機能など、新機能追加によるUX視点からの、機能概要資料を作成。<br />
            資料のフォーマット化については、段階的詳細化をベースとし、クライアント社内のUXメソッド開発者によるレビューを実施。<br />
            新機能についても、社内の機能検討会での承認を経て、画面設計を行ない、社内のUXルールに沿って、クォリティコントロールを実施。
            海外向け製品のため、実際に期待通りに動くか、試験を行なう。<br />
            そのために、ユースケース、テスト条項を作成した。<br />
            実地で動作を確認し、失敗した理由を、各機能の担当者にフィードバックを行い、ラジオなどは規格の調査を担当した。</li>
        </ul>
      </div>
     </div>
    <div class="tbl_box_3 br-2">作品: 最終的なデザインを紹介 絵が入る
      <ul>
        <li>成果 : プロジェクトの成果を数値やグラフなどで紹介</li>
        <li>その他: 他にも、このプロジェクトについての学んだことや感想</li>
      </ul>
    </div>
</div>

<div class="tbl_container about-sub-title">
    <div class="tbl_box_1 br-1">
      <div class="">
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">プロジェクト概要</li>
          <li class="pjt-overview-txt2">次世代音楽アプリ作成プロジェクト<br />UXリサーチ</li>
        </ul>

        <ul class="pjt-overview-list1">
        <li class="pjt-overview-txt">クライアント名 <br /> 業種 </li>
        <li class="pjt-overview-txt2">SXXX <br /> エンターテイメント (音楽)</li>
        </ul>
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">チームの人数</li>
          <li class="pjt-overview-txt2">10名</li>
        </ul>
       
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">プロジェクトの期間</li>
          <li class="pjt-overview-txt2">3ヶ月</li>
        </ul>

        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">プロジェクト目的</li>
          <li class="pjt-overview-txt2">製品ごとに増えたアプリに共通の世界観を持たせ、操作上の問題を解決するための次世代音楽再生機器アプリ作成</li>
        </ul>
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">プロセス :</li>
          <li class="pjt-overview-txt2">複数の音楽アプリの刷新と、搭載予定の機能に関する機能評価を行う。<br />
            アプリ全体のユーザーフロー作成、機能検討のアイデア出し、他社アプリの機能調査などを担当。
          </li>
        </ul>
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">Output : </li>
          <li class="pjt-overview-txt2">競合調査資料<br >ユーザーフロー図<br >ユーザーストーリー作成（カスタマージャーニーマップ）<br>
         機能検討に関しては、「私が [ペルソナ] なら、[希望] を実行することで [目標] を達成したい」という目的に沿ったもので表現できるかなど、
         ドキュメンテーションを意識した。</li>
        </ul>
      </div>
     </div>
    <div class="tbl_box_3 br-2">作品: 最終的なデザインを紹介 絵が入る
      <ul>
        <li>成果 : プロジェクトの成果を数値やグラフなどで紹介</li>
        <li>その他: 他にも、このプロジェクトについての学んだことや感想</li>
      </ul>
    </div>
</div>

<div class="tbl_container about-sub-title">
    <div class="tbl_box_1 br-1">
      <div class="">
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">プロジェクト概要</li>
          <li class="pjt-overview-txt2">次世代音楽アプリ作成プロジェクト<br />UXリサーチ</li>
        </ul>

        <ul class="pjt-overview-list1">
        <li class="pjt-overview-txt">クライアント名 <br /> 業種 </li>
        <li class="pjt-overview-txt2">SXXX <br /> エンターテイメント (音楽)</li>
        </ul>
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">チームの人数</li>
          <li class="pjt-overview-txt2">16名</li>
        </ul>
       
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">プロジェクトの期間</li>
          <li class="pjt-overview-txt2">3ヶ月</li>
        </ul>

        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">プロジェクト目的</li>
          <li class="pjt-overview-txt2">プロジェクトが解決しようとしている問題や課題</li>
        </ul>
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">プロセス :</li>
          <li class="pjt-overview-txt2">前モデルからの次世代モデルへの搭載機能に関するUXレビューと評価を行う。<br />
            競合リサーチと、マーケット評価によるユーザーリサーチ結果を、機能に反映するためのドキュメント作成を担当。<br />
            デザインチームと一緒に、プロトタイプを作成</li>
        </ul>
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">Output : </li>
          <li class="pjt-overview-txt2">機能概要資料<br >
            海外のラジオ機能、衛星ラジオ機能、独自音楽再生機能など、新機能追加によるUX視点からの、機能概要資料を作成。<br />
            資料のフォーマット化については、段階的詳細化をベースとし、クライアント社内のUXメソッド開発者によるレビューを実施。<br />
            新機能についても、社内の機能検討会での承認を経て、画面設計を行ない、社内のUXルールに沿って、クォリティコントロールを実施。
            海外向け製品のため、実際に期待通りに動くか、ユースケース、テスト条項を作成した。<br />
            実地で動作を確認し、失敗した理由を、各機能の担当者にフィードバックを行い、ラジオなどは規格の調査を担当した。</li>
        </ul>
      </div>
     </div>
    <div class="tbl_box_3 br-2">作品: 最終的なデザインを紹介 絵が入る
      <ul>
        <li>成果 : プロジェクトの成果を数値やグラフなどで紹介</li>
        <li>その他: 他にも、このプロジェクトについての学んだことや感想</li>
      </ul>
    </div>
</div>

<div class="tbl_container about-sub-title">
    <div class="tbl_box_1 br-1">
      <div class="">
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">プロジェクト概要</li>
          <li class="pjt-overview-txt2">[富士ソフト]ドローン操作用画面、車の配車アプリなどのUI開発</li>
        </ul>

        <ul class="pjt-overview-list1">
        <li class="pjt-overview-txt">クライアント名 <br /> 業種 </li>
        <li class="pjt-overview-txt2">XXX <br /> 運輸</li>
        </ul>
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">チームの人数</li>
          <li class="pjt-overview-txt2">４名</li>
        </ul>
       
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">プロジェクトの期間</li>
          <li class="pjt-overview-txt2">3ヶ月</li>
        </ul>

        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">プロジェクト目的</li>
          <li class="pjt-overview-txt2">デザインフェーズのUI開発</li>
        </ul>
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">プロセス :</li>
          <li class="pjt-overview-txt2">デザインフェーズからの参画となり、ドローン操作画面を担当。UIとインタラクション設計を担当<br />
            メインのデザイナーと一緒にダークモード、ライトモードを意識したカラー設計、デザインシステムなどの資料作成を担当</li>
        </ul>
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">Output : </li>
          <li class="pjt-overview-txt2">デザインシステム資料作成<br >
            海外のラジオ機能、衛星ラジオ機能、独自音楽再生機能など、新機能追加によるUX視点からの、機能概要資料を作成。<br />
            資料のフォーマット化については、段階的詳細化をベースとし、クライアント社内のUXメソッド開発者によるレビューを実施。<br />
            新機能についても、社内の機能検討会での承認を経て、画面設計を行ない、社内のUXルールに沿って、クォリティコントロールを実施。
            海外向け製品のため、実際に期待通りに動くか、ユースケース、テスト条項を作成した。<br />
            実地で動作を確認し、失敗した理由を、各機能の担当者にフィードバックを行い、ラジオなどは規格の調査を担当した。</li>
        </ul>
      </div>
     </div>
    <div class="tbl_box_3 br-2">作品: 最終的なデザインを紹介 絵が入る
      <ul>
        <li>成果 : プロジェクトの成果を数値やグラフなどで紹介</li>
        <li>その他: 他にも、このプロジェクトについての学んだことや感想</li>
      </ul>
    </div>
</div>

  <div class="tbl_container">
    <div class="tbl_box_1">[Sony]次世代車載製品</div>
    <div class="tbl_box_2">Electronics Company <br>+Car Navigation</div>
    <div class="tbl_box_3">UX Designer</div>
    <div class="tbl_box_3">
      <ul class="about-box-list project-skills">
            <li>機能解説資料作成</li>
            <li>Functional description documentation</li>
        </ul>
    </div>
  </div>

  <div class="tbl_container">
    <div class="tbl_box_1">[Sony]UX Knowledge Transferring Project (UX Human Resources Development)</div>
    <div class="tbl_box_2">Electronics Company<br>+ Human Resource, HCD Division</div>
    <div class="tbl_box_3">Assist for UX Human Resources Development</div>
    <div class="tbl_box_3">
      <ul class="about-box-list project-skills">
            <li>UXがわかる人材開発資料作成</li>
            <li>価値体験からシステム要件に至るまでの思考プロセスを明らかにし、UX検討の指南書の作成</li>
            <li>To clarify the thought process from value experience to system requirements, and to create a UX study pointer</li>
        </ul>
    </div>
  </div>
  
  <div class="tbl_container">
    <div class="tbl_box_1">[Sony]音楽アプリのUX体験開発</div>
    <div class="tbl_box_2">Electronics Company <br>Music Apps</div>
    <div class="tbl_box_3">UX Designer / Product Research</div>
    <div class="tbl_box_3">
      <ul class="about-box-list project-skills">
            <li>デザインシステム作成</li>
            <li>Support to Create Design Systems</li>
        </ul>
    </div>
  </div>

  <div class="tbl_container">
    <div class="tbl_box_1">
        [富士ソフト]ドローン操作用画面、車の配車アプリなどのUI開発
        </div>
    <div class="tbl_box_2">Drone Company</div>
    <div class="tbl_box_3">
      <ul>
        <li> UI Development / </li>
        <li>デザインリサーチ</li>
        <li>Design research</li>
        <li>競合リサーチ</li>
        <li>Competitive research</li>
        <li></li>
      </ul>
    </div>
    <div class="tbl_box_3">
      <ul class="about-box-list project-skills">
            <li>Support to Create Design Systems</li>
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

.br-1{border-radius: 1em 0 0 1em;}
.br-2{border-radius: 0 1em 1em 0;}
.br-3{border-radius: 0 0 0 1em;}
.br-4{border-radius: 0 0 1em 0;}

.touka{
  opacity: 0.8;
}

.pjt-overview-list1{
  
}
.pjt-overview-list1 li{
border-bottom: 1px dashed #85CFD2;
padding:0.5em;
display: table-cell;
}

.pjt-overview-txt{
  width: 10em;
  color:#6b6b6b;
}
.pjt-overview-txt2{
  width: 28em;
}
.pjt-overview-list2 li{
border-bottom: 1px dashed #85CFD2;
padding:1%;
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