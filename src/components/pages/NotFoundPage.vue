<template>
  <div class="not-found">
    <p>OOPS!</p>
    <p>There is no any results</p>
    <router-link to="/">
      <SharedButton class="back-btn" label="back" :is-active="true"/>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import SharedButton from '@/components/shared/SharedButton.vue';
</script>

<style scoped lang="scss">
  .not-found {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;

    p {
      margin: 0;
      line-height: normal;
      font-size: 40px;
      font-weight: bolder;
    }
  }
</style>
