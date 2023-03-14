<template>
  <header class="results-header">
    <div class="wrapper">
      <div class="movie-counter">
        <span>{{moviesList.length}} Movie found</span>
      </div>
      <SortBySwitcher/>
    </div>
  </header>
  <main class="results-container">
    <div class="wrapper">
      <MovieList/>
    </div>
  </main>
</template>

<script setup lang="ts">
import SortBySwitcher from '@/components/results/SortMode.vue';
import MovieList from '@/components/movie/MovieList.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

const { getters } = useStore();
const moviesList = computed(() => getters.getMoviesList);

</script>

<style scoped lang="scss">
  .wrapper {
    margin: 0 auto;
    width: 1094px;
    display: flex;
  }

  .results-header {
    display: flex;
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
