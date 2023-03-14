<template>
  <div class="movies-sort-by">
    <p>sort by</p>
    <SharedButton
      @click="setSortMode"
      :label="SortMode.ReleaseDate"
      :is-first="true"
      :is-active="activeButton === SortMode.ReleaseDate" />
    <SharedButton
      @click="setSortMode"
      :label="SortMode.Rating"
      :is-second="true"
      :is-active="activeButton === SortMode.Rating" />
  </div>
</template>

<script setup lang="ts">
import SharedButton from '@/components/shared/SharedButton.vue';
import { computed, Ref, ref } from 'vue';
import { SortMode } from '@/models/models';
import actionTypes from '@/store/action-types';
import { useStore } from 'vuex';

const { dispatch, getters } = useStore();
const activeButton = computed(() => getters.getSortMode);

function setSortMode(e: MouseEvent): void {
  dispatch(actionTypes.setSortMode, (e.target as HTMLElement)?.innerText.toLowerCase());
}
</script>

<style scoped lang="scss">
  .movies-sort-by {
    display: flex;
    align-items: center;
    text-transform: uppercase;

    p {
      margin-right: 15px;
    }
  }
</style>
