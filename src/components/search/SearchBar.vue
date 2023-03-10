<template>
  <div class="search-wrapper">
    <label htmlFor="{searchInput}">
      <input type="text"
             placeholder="Type movie title or genre..."
             v-model="inputValue"
             @keyup.enter="$emit('setSearchValue', inputValue)"
      />
    </label>
    <SharedButton
      @click="$emit('setSearchValue', inputValue)"
      label="Search"
      :is-active="true"
      :is-large="true"
    />
  </div>
</template>

<script setup lang="ts">
import SharedButton from '@/components/shared/SharedButton.vue';
import { ref } from 'vue';

const inputValue = ref('');
</script>

<style scoped lang="scss">
  .search-wrapper {
    display: flex;
    height: 56px;
    margin-bottom: 20px;

    color: white;
    font-size: 20px;

    label {
      display: flex;
      flex-grow: 1;
      margin-right: 10px;

      input {
        min-width: 200px;
        width: 100%;
        height: 100%;
        padding: 0 20px;

        font-size: inherit;
        color: inherit;

        background-color: rgba(50,50,50,0.8);
        border: none;

        box-shadow: none;
      }
    }
  }
</style>
