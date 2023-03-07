<template>
  <header class="results-header">
    <div class="wrapper">
      <div class="movie-counter">
        <span>{{results.length}} Movie found</span>
      </div>
      <SortBySwitcher @set-sort-mode="onSetSortMode"></SortBySwitcher>
    </div>
  </header>
  <main class="results-container">
    <div class="wrapper">
      <MovieList
        :movie-list="sortResultsByMode(results)"
        @set-active-movie="$emit('setActiveMovie', $event)"
      ></MovieList>
    </div>
  </main>
</template>

<script setup lang="ts">
import SortBySwitcher from '@/components/results/SortMode.vue';
import MovieList from '@/components/movie/MovieList.vue';
import { ref, Ref, watch } from 'vue';
import { IMovie, SortMode } from '@/components/models/models';

const sortMode: Ref<SortMode> = ref(SortMode.ReleaseDate);
const props = defineProps(['results']);

function sortResultsByMode(searchResults: IMovie[]): IMovie[] {
  if (sortMode.value === SortMode.Rating) {
    return [...searchResults].sort((a, b) => b.rating - a.rating);
  }
  return [...searchResults].sort((a: any, b: any) => a.date - b.date);
}

function onSetSortMode(mode: SortMode): void {
  sortMode.value = mode;
  sortResultsByMode(props.results);
}

watch(() => props.results, (oldValue, newValue) => {
  sortResultsByMode(newValue);
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
  }
</style>
