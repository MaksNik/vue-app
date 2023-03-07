<template>
  <ul class="movie-list">
    <li v-for="movie in movieList" :key="movie.name" class="movie-item">
      <MovieCard @click="$emit('setActiveMovie', movie)" :movie="movie"></MovieCard>
    </li>
  </ul>
</template>

<script setup lang="ts">
import MovieCard from '@/components/movie/MovieCard.vue';

defineProps(['movieList']);
</script>

<style scoped lang="scss">
  .movie-list {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;

    .movie-item {
      margin-bottom: 20px;

      &:not(:nth-child(3n)) {
        margin-right: 60px;
      }
    }
  }
</style>
