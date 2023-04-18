<script setup lang="ts">

</script>

<template>
  <span>Topページの予定です</span>
  <button @click="About">Aboutにいきたい</button>
  <button @click="Skills">Skillsにいきたい</button>
  <button @click="CV">CVにいきたい</button>
</template>


<style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>

<script>
import About from '@/pages/About.vue';
import Skills from '@/pages/Skills.vue';
import CV from '@/pages/CV.vue';

  export default {
    methods: {
      About: function () {
        this.$router.push('/About')
      },
      Skills: function () {
        this.$router.push('/Skills')
      },
      CV: function () {
        this.$router.push('/CV')
      }
    }
    // router/index.tsにも追加すること
  }
</script>