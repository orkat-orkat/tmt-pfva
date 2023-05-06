<template>
  <div class="contents">
  <h4 class="subtitle1">Hi</h4>
  <div class="self-wrap">
    <ul class="top-box-list">
            <li>Tommy's Portofolio</li>
            <li>I live in Tokyo.</li>
            <li>I Love design, technology and make people happy.</li>
        </ul>

  </div>

  <div class="parent">
  <div class="child">
    <ul class="top-box-list top-contents">
    <li style="font-weight:bold;">/ How can I contribute. /</li>
    <li>My profession is create Business Apps with UX field.</li>
    <li>Create interface / Define requirements / IA / User Research</li>
    <li>Create interface / Define requirements / IA / User Research</li>
  </ul>
    <ul class="top-box-list top-contents">
    <li>I understand .... </li>
    <li>Create Prototypes </li>
    <li>Design Thinking </li>
    <li>User Research (User Test, User) </li>
    <li>Front Engineering </li>
    <li>Digital Platforms, Cloud (Azure and AWS) </li>
    <li>Web/App Developping Method (Agile) </li>
    <li>Project Management</li>
  </ul>

  </div>
  <div class="child last-child">
    <img src="@/assets/img/3DevicesMock.png" alt="design" class="" width="80%">
</div>

</div>
  <h4 class="subtitle1 history">更新履歴</h4>
  <ul class="list-history">
    <li class="bold">[2023]</li>
    <li class="list-history-items">May.2 -- コンテンツの精査。ちゃんと、ロール、結果、などを追記したい。</li>
    <li class="list-history-items">April.27 -- SPはとりあえず表示できるまでに修正・・・色などは後で変更しよう。大枠が崩れないようにした。細かい修正は、今後行う。</li>
    <li class="list-history-items">April.24 -- よく考えた結果、SP対応ページは別のサイトにすることにしました。</li>
    <li class="list-history-items">April.21 -- CSSを変更しました。SP対応をすっかり忘れていました。本当に忘れていました。</li>
    <li class="list-history-items">April.13 -- 以前断念したVueに手を出してしまったので頑張って理解しようとしている。</li>
    <li class="list-history-items">April.11 -- ポートフォリオを作成開始しました。Netfrlyを知る。便利。でもNetfrlyが用意している
      Vue3はうまくいかなかった。（Memo）</li>
    <li class="bold">[2022]</li>
    <li class="list-history-items">前のデザインも気に入っていたけれど、もっと手軽に更新したいと思い引越しの予定を立てた</li>
</ul>

<p class="about-txt">Sorry, This website don't use any css-frameworks, so it does not appropreate to see from smmartphone at this moment. <br >
        I will fix it near future. I am thinking to use tailwindcss or vuetify.<br>
    </p>

  </div><!-- contents-->
  
</template>

<style>

.parent {
  display: flex;
  height: 100%;
}

.child {
  width: 100%;
  background:white;
  padding: 2em 0 ;
  margin:2em 0;
}

.last-child {
  width: 100%;
  background-color: antiquewhite;
  text-align: center;
}
</style>