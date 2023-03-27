<template>
  <ul class="movie-list">
    <li v-for="movie in movieList" :key="movie.title" class="movie-item">
      <MovieCard @click="onMovieClick(movie.id)" :movie="movie"></MovieCard>
    </li>
  </ul>
</template>

<script setup lang="ts">
import MovieCard from '@/components/movie/MovieCard.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { computed, onMounted } from 'vue';
import { IMovie } from '@/models/models';

const { getters } = useStore();
const movieList = computed(() => getters.getMoviesList);
const router = useRouter();

function onMovieClick(id: string): void {
  router.push({ name: 'movieDetails', params: { id } });
}

</script>

<style scoped lang="scss">
  .movie-list {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;

    .movie-item {
      margin-bottom: 20px;
      max-width: 324px;

      &:not(:nth-child(3n)) {
        margin-right: 60px;
      }
    }
  }
</style>
