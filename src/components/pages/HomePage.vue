<template>
  <div class="wrapper">
    <h1>FIND YOUR MOVIE</h1>
    <SearchBar></SearchBar>
    <SearchBySwitcher></SearchBySwitcher>
  </div>
</template>

<script setup lang="ts">
import SearchBar from '@/components/search/SearchBar.vue';
import SearchBySwitcher from '@/components/search/SearchMode.vue';
</script>

<style scoped lang="scss">
  .wrapper {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 0 100px;

    .logo {
      margin: 0 0 80px;
      padding: 20px 0;
    }

    h1 {
      margin-bottom: 50px;
    }
  }
</style>
