<template>
    <div class="contents">
        <h4 class="subtitle1">Not Found page </h4>
    <div class="self-wrap">
      <div class="self-items">1</div>
      <div class="self-items">2</div>
      <div class="self-items">3</div>
  </div>
    <p>アクセスしたページは存在しません。</p>
    <div><RouterLink :to="{ name: 'Top' }">Top</RouterLink>に戻る</div>
  </div>
  </template>