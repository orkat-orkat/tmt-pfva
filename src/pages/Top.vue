<script setup lang="ts">

</script>

<template>
  <span>Topページの予定です</span>
  <button @click="About">Aboutにいきたい</button>
  
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
import About from '../pages/About.vue';

  export default {
    methods: {
      About: function () {
        this.$router.push('/About')
      }
    }
  }
</script>