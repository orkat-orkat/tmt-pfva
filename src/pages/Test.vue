<template>
  <div class="contents">
  <h4 class="subtitle1">Test</h4>
  <div class="self-wrap">
  <ul class="about-txt">
        <li>Test</li>
        <li>https://ics.media/entry/230510/#view-transitons-api%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9<br></li>
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


   
   <!-- 一覧画面 -->
   <div id="view-index">
        <h1>Pickup Pictures</h1>
        <ul class="photo-list">
          <li>
            <div class="photo-link">
              <img class="photo-thumb" src="../assets/img/MicrosoftAzureFunadmentals.png" width="340" height="360" alt="" />
              <div class="photo-meta">
                <p class="i-title">グリフィス天文台からの景観</p>
                <div>
                  <button class="btn button-open">詳細をひらく</button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- 詳細画面 -->
      <div id="view-detail" hidden>
        <!-- 🌟hiddenで隠す -->
        <div class="detail-action">
          <button class="btn button-close">一覧へもどる</button>
        </div>
        <div class="detail-layout">
          <div>
            <img class="photo-detail" src="../assets/img/nekoshadow1.png" width="640" height="360" alt="" />
          </div>
          <div class="photo-details">
            <p class="i-title">グリフィス天文台からの景観</p>
            <p class="i-sub">ロサンゼルス</p>
            <p class="i-desc">
              グリフィス天文台は、ロサンゼルスのグリフィス公園内にある天文台です。アールデコ調の外観と、ダウンタウンをふくめ市内を一望できます。<br />
              2006年に、4年に渡る大規模な改築工事が完成し、展示場やシアター、カフェなどが加えられた[1]。また敷地内には映画「理由なき反抗」のロケ地として使用され、天文台の知名度を向上させた功績から、同作品で主演を務めたジェームズ・ディーンの銅像が建てられている。
            </p>
          </div>
        </div>
      </div>

  </div><!-- contents-->
  
</template>




<script>
import Test from './Test.vue';
window.addEventListener("DOMContentLoaded", init);
function init() {
  // ---------------------------
  // 一覧画面から詳細画面へ
  // ---------------------------
  const buttonOpen = document.querySelector(".button-open");

  buttonOpen.addEventListener("click", () => {
    // View Transitions APIを呼び出す
    document.startViewTransition(() => {
      // 遷移後のDOM構造を指定
      document.querySelector("#view-index").hidden = true;
      document.querySelector("#view-detail").hidden = false;
    });
  });

  // ---------------------------
  // 詳細画面から一覧画面へ
  // ---------------------------
  const buttonClose = document.querySelector(".button-close");

  buttonClose.addEventListener("click", () => {
    // View Transitions APIを呼び出す
    document.startViewTransition(() => {
      // 遷移後のDOM構造を指定
      document.querySelector("#view-index").hidden = false;
      document.querySelector("#view-detail").hidden = true;
    });
  });
}
</script>
