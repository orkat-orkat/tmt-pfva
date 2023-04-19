

<template>
  <div class="nav">
  <h1 class="title">
   H1dayo (Headerに書いてる)　ナビゲーションだけにする
  </h1>

  <nav>
    <ul class="header-list">
    <li><RouterLink to="/Top">Top</RouterLink></li>
    <li><RouterLink to="/CV">CV </RouterLink></li>
    <li><RouterLink to="/About">About</RouterLink></li>
    <li><RouterLink to="/Skills">Skills</RouterLink></li>
    <li><RouterLink to="/Contact">Contact</RouterLink></li>   
	</ul>
</nav>

</div>
</template>





<style scoped>
.title{
 width:100%;
 padding:2% 10%;
 text-align: left;
 font-size: 32px;
 font-weight: bold;
}

.nav{
  width: 100%;
}

ul.header-list {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding:2% 10%;
}

ul.header-list li{
  margin-right: 10px;
}

ul.header-list li:nth-of-type(4) {
  margin-left: auto;
  background-color: #ffc;
}
</style>