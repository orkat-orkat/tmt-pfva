<script setup lang="ts">
import Output from '@/pages/Output.vue'
import ProgrammingList from '@/pages/ProgrammingList.vue'
/* import Timeline from '@/pages.Timeline.vue' */
</script>


<template>
  <h4 class="subtitle1">Impressive projects</h4>
  <nav class="sub-end-nav">
    <li><RouterLink to="/English">English</RouterLink></li>
    <li><RouterLink to="/ProjectList">Other Project</RouterLink></li>
  </nav>

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
          <li class="pjt-overview-txt2">12ヶ月</li>
        </ul>

        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">プロジェクト目的</li>
          <li class="pjt-overview-txt2">機能概要資料作成</li>
        </ul>
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">プロセス : </li>
          <li class="pjt-overview-txt2">前モデルからの次世代モデルに搭載する新機能に関するUXレビューと評価を行う。<br />
            現行の機能調査、競合リサーチ、マーケット評価によるユーザーリサーチ結果を、機能に反映するためのドキュメント作成を担当。<br />
            デザインチームと一緒に、プロトタイプを作成</li>
        </ul>
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">Output : </li>
          <li class="pjt-overview-txt2">
            海外向けラジオ機能、衛星ラジオ機能、独自音楽再生機能、CarApp、Android Auto、カースピーカー操作など、新機能追加に関してUX視点からの機能概要資料を作成。<br />
            資料のフォーマット化については、段階的詳細化をベースとし、クライアント社内のUXメソッド開発者による詳細なレビューを実施。<br />
            担当した新機能の資料化については、社内の機能検討会での承認を経て、画面設計を行ない、社内のUXライティングルールや、書類の書き方を踏襲していくことでクォリティコントロールに努め、レビューの効率化に貢献した。
            海外向け製品のため、実際に期待通りに動くか仮説を立て、ユースケースやテスト条項を作成した。<br />
            実地で動作を確認し、失敗した理由を、各機能の担当者にフィードバックを行い、ラジオなどは規格の調査を担当した。</li>
        </ul>
      </div>
     </div>
    <div class="tbl_box_3 br-2">Product: Car Navigation
      <ul>
        <li style="text-align: center;"><img src="src/assets/img/sony_XAV-9500ES_002.png" alt="" style="width:70%;"></li>
        <li>その他 : 学んだことや感想</li>
        <li style="font-weight: lighter;">
        S社では、UXチームが経験豊富であったため、非常に楽しく、質の高い仕事ができた。特にファシリテーションの作法や、UXの技術には独自の観点でのレビューを作り上げており、
    UXプロジェクトの結果を確実にプロダクトに反映しており、やりがいがあった。<br />
    印象的だったのは、チーム内での振り返りの技術であり、心理的安全性の担保が保たれていて、チームビルディングについては興味深かった。<br>
    担当した製品についても知見のある人が多く、途中で参画しても製品に関する知識不足に関することは特になかった。<br>
    また、すでにある機能や、仕様の説明をUX観点から書き直す作業も、レビューが細かく設定され、仕様書の書き方を再勉強する機会になった。</li>
      </ul>
    </div>
</div>

<div class="tbl_container about-sub-title" style="margin-top:2em">
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
          <li class="pjt-overview-txt2">４名</li>
        </ul>
       
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">プロジェクトの期間</li>
          <li class="pjt-overview-txt2">3ヶ月</li>
        </ul>

        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">プロジェクト目的</li>
          <li class="pjt-overview-txt2">増えたアプリに共通の世界観を持たせた、操作上の問題を解決するための次世代音楽再生機器アプリ作成</li>
        </ul>
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">プロセス :</li>
          <li class="pjt-overview-txt2">複数の音楽アプリの刷新と、搭載予定の機能に関する機能評価を行う。<br />
            アプリ全体のユーザーフロー作成、機能検討のアイデア出し、他社アプリの機能調査などを担当。
          </li>
        </ul>
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">Output : </li>
          <li class="pjt-overview-txt2">
            ユーザーフロー図<br >
            データ上で利用者調査を行い、製品の価値を上げるための施作を考えた。<br >
            他社のアプリの調査、 現状ギャップを把握するところからはじめ、今後の理想の姿を可視化できるようにした。<br >
            アウトプットとして、競合調査資料、操作説明のための画面遷移などが含まれ、機能検討に関しては社の書式が、目的に沿ったフォーマットで表現できるかなど、
         ドキュメントのあり方を意識して作った。</li>
        </ul>
      </div>
     </div>
    <div class="tbl_box_3 br-2">アウトプット : 
      <ul>
        <li>NDA --- No Image</li>
        <li style="text-align: center;">
          <div style=""><img src="src/assets/img/nekoshadow1.png" alt="" style="width:70%; margin:7em 0; opacity: 0.4;"></div></li>
        <li>その他 : 学んだことや感想</li>
        <li style="font-weight: lighter;">
        参画した期間は短かったが、BtoCのアプリでもHCDやこれまでの学びを改めて実践的に活かすことができ、楽しかった。<br />
        アプリの調査をメインに行い、最終的にハブアプリを作ることになった。将来的にはさらに統合されるかもしれないが、現時点での問題点、それを解決するためのゴールを見つけることができたので、安心して次のフェーズに引き渡すことができた。</li>
      </ul>
    </div>
</div>

<div class="tbl_container about-sub-title" style="margin-top:2em">
    <div class="tbl_box_1 br-1">
      <div class="">
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">プロジェクト概要</li>
          <li class="pjt-overview-txt2">金融アプリのデザインコンサル</li>
        </ul>

        <ul class="pjt-overview-list1">
        <li class="pjt-overview-txt">クライアント名<br /> 業種 </li>
        <li class="pjt-overview-txt2">FXXX <br /> 金融 (株価)</li>
        </ul>
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">チームの人数</li>
          <li class="pjt-overview-txt2">３名</li>
        </ul>
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">役割</li>
          <li class="pjt-overview-txt2">デザインコンサルタント</li>
        </ul>
       
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">プロジェクトの期間</li>
          <li class="pjt-overview-txt2">３週間</li>
        </ul>

        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">プロジェクト目的</li>
          <li class="pjt-overview-txt2">デザインを外注した際に発生してしまったデザインに関するフィードバックと、UX観点での改善案作成</li>
        </ul>
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">プロセス :</li>
          <li class="pjt-overview-txt2">
            現行アプリについてヒューリスティック調査を行い、使い勝手が、基準を満たさない事項に関して、今後の施作にむけたアドバイスを行なった。
           </li>
        </ul>
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">Output : </li>
          <li class="pjt-overview-txt2">
            主にヒューリスティック調査を担当し、レビュー発表に向けての説明資料作りと、クライアントに向けてフィードバックコメントを作成した。<br>
            顧客との折衝前に、メインのファシリテーターとフィードバックに関する打ち合わせ、意識合わせを行い、実際にアプリはどうなるべきかなど改めて議論し、レビュー会に向けて説明練習を行い、本番に臨んだ。
            
          </li>
        </ul>
      </div>
     </div>
    <div class="tbl_box_3 br-2">Output : NDA --- The images are tentative.
      <ul>
        <li style="text-align:center;"><div style=""><img src="src/assets/img/nekoshadow1.png" alt="" style="width:70%; margin:7em 0; opacity: 0.4;"></div></li>
        <li>その他 : 学んだことや感想</li>
        <li style="font-weight: lighter;">
          ヒューリスティック調査を担当し、項目と照らし合わせて、丁寧にデザインのレビューをする機会を得た。本プロジェクトはクライアントが、良いデザインとは何かを勉強する場にもなり、
          私も伝え方を工夫したり、時間が限られた中で、特に大きな問題点を説明したり、改善案を少し作ることで、次のフェーズへのフックになることを期待した。<br>
          その後次のフェーズの受注につながったかは不明だが、クライアントは、レビュー中、参加者を増やして熱心に話を聞いてくれていたので、手応えはあり、個人的にはいい経験になった。
        </li>
      </ul>
    </div>
</div>

<div class="tbl_container about-sub-title" style="margin-top:2em">
    <div class="tbl_box_1 br-1">
      <div class="">
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">プロジェクト概要</li>
          <li class="pjt-overview-txt2">ドローン操作用画面、車の配車アプリなどのUI開発</li>
        </ul>

        <ul class="pjt-overview-list1">
        <li class="pjt-overview-txt">クライアント名 <br /> 業種 </li>
        <li class="pjt-overview-txt2"> FXXXXX <br /> 運輸</li>
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
          <li class="pjt-overview-txt2">デザインフェーズから参画し、ドローン操作画面のUIとインタラクション設計を担当。<br />
            メインのグラフィックデザイナーと一緒に、<br />
           ・ダークモード<br />
           ・ライトモード
           <br />を意識したカラー設計、
            <br />デザインシステムなどの資料作成なども担当。</li>
        </ul>
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">Output : </li>
          <li class="pjt-overview-txt2">デザインシステム資料<br >
          操作画面</li>
        </ul>
      </div>
     </div>
    <div class="tbl_box_3 br-2">Output : NDA --- The images are tentative.
      <ul>
        <li>成果 : 操作画面のデザインシステムと、画面のモックアップ用を３ヶ月で作成。</li>
        <li style="text-align: center;"><div style=""><img src="src/assets/img/flying-icons-image.jpg" alt="" style="width:70%; margin:3em 0; opacity: 0.6">
        </div></li>
        <li>その他 : 学んだことや感想</li>
        <li style="font-weight: lighter;">
          ダークモードに関するカラー設計では、これまでの経験と、ビジュアルデザイナーの知見を併せて作成することができた。操作画面は評判が良かったが、
          実際の画面操作として問題があったため、いくつか画面の分割について、チーム内で提案。<br />細かい修正などは臨機応変に対応することができた。
          資料がほとんど英語のプロジェクトだったので、翻訳しながら機能を移植した。</li>
      </ul>
    </div>
</div>


<div class="tbl_container about-sub-title" style="margin-top:2em">
    <div class="tbl_box_1 br-1">
      <div class="">
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">プロジェクト概要</li>
          <li class="pjt-overview-txt2">AI(画像認識)対応画面作成</li>
        </ul>

        <ul class="pjt-overview-list1">
        <li class="pjt-overview-txt">クライアント名 <br /> 業種 </li>
        <li class="pjt-overview-txt2"> XXXXX <br /> エネルギー（電力）</li>
        </ul>
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">チームの人数</li>
          <li class="pjt-overview-txt2">４名</li>
        </ul>
       
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">プロジェクトの期間</li>
          <li class="pjt-overview-txt2">６ヶ月</li>
        </ul>

        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">プロジェクト目的</li>
          <li class="pjt-overview-txt2">膨大な写真を自動で収集、整理し、効率よく作業を進めるためのAIを利用したWebアプリ作成</li>
        </ul>
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">プロセス :</li>
          <li class="pjt-overview-txt2">UXリサーチ後のWebアプリコーディングを担当。当時新しかったAzureのAI機能を使うアプリとして社内では認知され、
            モックとして作ったものを改良したり、画像分類された画像がどの精度で来るかが不明だったため、運用が始まってからも改良が続けられた。
          </li>
        </ul>
        <ul class="pjt-overview-list1">
          <li class="pjt-overview-txt">Output :</li>
          <li class="pjt-overview-txt2">画像の検索画面、結果表示画面、画像用のコントロール画面などの作成を担当。<br>
          SEと一緒に、実現が難しい表示については一緒に技術調査などを行った。
          </li>
        </ul>
      </div>
     </div>
    <div class="tbl_box_3 br-2">Output : NDA --- The images are tentative.
      <ul>
        <li>成果 : 画面のモックアップ用を１ヶ月程度で作成。</li>
        <li style="text-align: center;"><div style=""><img src="src/assets/img/nekoshadow1.png" alt="" style="width:70%; margin:7em 0; opacity: 0.2"></div></li>
        <li>その他 : 学んだことや感想</li>
        <li style="font-weight: lighter;">
          AIを利用した画面を作成した経験や知見が周囲にもなかったため、いろいろと試行錯誤しながら、<br />
          どのようなことが実現できるのか、<br />
          どう表示されるべきかを
        検討した上で、モックアップを含めてコーディングを担当した。
        <br />期待される画像が検索結果に出るかどうかなど、簡易的なテストも担当し、AI案件の定義の難しさを感じた。
        </li>
      </ul>
    </div>
</div>
<p><RouterLink to="/ProjectList">その他、多くのプロジェクトに参画した経験があります</RouterLink></p>



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