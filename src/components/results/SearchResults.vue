<template>
  <header class="results-header">
    <div class="wrapper">
      <div class="movie-counter">
        <span>{{results.length}} Movie found</span>
      </div>
      <SortBySwitcher @set-sort-mode="sortMode = $event"></SortBySwitcher>
    </div>
  </header>
  <main class="results-container">
    <div class="wrapper">
      <MovieList
        :movie-list="sortedResults"
        @set-active-movie="$emit('setActiveMovie', $event)"
      ></MovieList>
    </div>
  </main>
</template>

<script setup lang="ts">
import SortBySwitcher from '@/components/results/SortMode.vue';
import MovieList from '@/components/movie/MovieList.vue';
import {
  computed, ComputedRef, ref, Ref,
} from 'vue';
import { IMovie, SortMode } from '@/components/models/models';

const sortMode: Ref<SortMode> = ref(SortMode.ReleaseDate);
const props = defineProps(['results']);
const sortedResults: ComputedRef<IMovie[]> = computed(() => {
  const compareFn = sortMode.value === SortMode.Rating
    ? ((a: { rating: number; }, b: { rating: number; }) => b.rating - a.rating)
    : ((a: { date: number; }, b: { date: number; }) => a.date - b.date);

  return [...props.results].sort(compareFn);
});
</script>

<style scoped lang="scss">
  .wrapper {
    margin: 0 auto;
    width: 1092px;
    display: flex;
  }

  .results-header {
    padding: 10px 0;
    background-color: #888888;

    .wrapper {
      width: 1000px;
      justify-content: space-between;
      align-items: center;
    }

    .movie-counter {
      font-size: 16px;
      font-weight: bolder;
    }
  }

  .results-container {
    background-color: #232323;
    color: white;
    height: 100%;
  }
</style>
