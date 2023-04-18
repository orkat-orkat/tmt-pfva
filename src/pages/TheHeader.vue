

<template>
  <h1 class="title">
   H1dayo
  </h1>

  <ul class="heade-list">
  <li>１番目の要素</li>
  <li><button @click="Top">Top</button></li>
  <li><RouterLink to="/CV">CV </RouterLink></li>
  <li><RouterLink to="/About">About</RouterLink></li>
  <li><RouterLink to="/Skills">Skills</RouterLink></li>
  <li>Contact</li>   
  </ul>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
setup() {
  const router = useRouter()
  const Top = () => {
    router.push('/Top')
  }
  return {
    Top
  }
}
}
</script>




<style scoped>
.title{
 width:100%;
 text-align: left;
 font-size: 32px;
 font-weight: bold;
 padding:2% 10%;
}

ul.heade-list {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding:2% 10%;
}

ul.heade-list li{
  margin-right: 10px;
}

ul.heade-list li:nth-of-type(4) {
  margin-left: auto;
  background-color: #ffc;
}
</style>