<template>
  <div class="wrapper">
    <SharedButton class="back-btn" @click="$emit('goHomePage')" label="back" :is-active="true"/>
    <article class="movie-details">
      <div class="movie-poster"
           :style="{
          'background-image': `url(${movie.posterUrl})`,
          'background-size': 'cover'
    }"></div>
      <div class="movie-info">
        <h1>
          {{ movie.name }}
          <span class="movie-rating">{{ movie.rating }}</span>
        </h1>
        <p class="movie-promo">{{ movie.promo }}</p>
        <div class="highlighted">
          <p>
            <span class="number-highlighted">{{ movie.date.getFullYear() }}</span>&nbsp;year
          </p>
          <p>
            <span class="number-highlighted">{{ movie.duration }}</span>&nbsp;min
          </p>
        </div>
        <p class="description">{{ movie.description }}</p>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import SharedButton from '@/components/shared/SharedButton.vue';

defineProps(['movie']);
</script>

<style scoped lang="scss">
  .wrapper {
    width: 1092px;
    margin: 0 auto;

    .back-btn {
      margin-bottom: 20px;
    }

    .movie-details {
      display: flex;

      .movie-poster {
        width: 324px;
        height: 455px;
        margin: 0 40px 40px 0;
        flex: 1 0 auto;
      }

      .movie-info {
        flex: 0 1 auto;
      }
    }
  }
</style>
