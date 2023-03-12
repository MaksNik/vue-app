<template>
  <div class="search-wrapper">
    <label htmlFor="{searchInput}">
      <input type="text"
             placeholder="Type movie title or genre..."
             v-model="inputValue"
             @keyup.enter="search"
      />
    </label>
    <SharedButton
      @click="search"
      label="Search"
      :is-active="true"
      :is-large="true"
    />
  </div>
</template>

<script setup lang="ts">
import SharedButton from '@/components/shared/SharedButton.vue';
import { useStore } from 'vuex';
import { ref } from 'vue';
import actionTypes from '@/store/action-types';

const inputValue = ref('');
const { dispatch } = useStore();

function search() {
  dispatch(actionTypes.searchMovies, inputValue.value);
}
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
