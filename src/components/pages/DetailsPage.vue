<template>
  <div class="wrapper">
    <SharedButton class="back-btn" @click="$emit('goHomePage')" label="back" :is-active="true"/>
    <article class="movie-details">
      <div class="movie-poster"
           :style="{
          'background-image': `url(${selectedMovie.posterurl})`,
          'background-size': 'cover'
    }"></div>
      <div class="movie-info">
        <h1>
          {{ selectedMovie.title }}
          <div class="movie-rating">{{ selectedMovie.imdbRating }}</div>
        </h1>
        <p class="movie-promo">{{ selectedMovie.tagline }}</p>
        <div class="additional">
          <p>
            <span class="highlighted">{{ selectedMovie.year }}</span>year
          </p>
          <p>
            <span class="highlighted">{{ duration }}</span>min
          </p>
        </div>
        <p class="description">{{ selectedMovie.storyline }}</p>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import SharedButton from '@/components/shared/SharedButton.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const { getters } = useStore();
const selectedMovie = computed(() => getters.getSelectedMovie);
const duration = computed(() => selectedMovie.value.duration.slice(2, -1));
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
        max-width: 324px;
        width: 100%;
        height: 455px;
        margin: 0 40px 40px 0;
        flex: 1 0 auto;
      }

      .movie-info {
        display: flex;
        flex-direction: column;
        flex: 0 1 auto;

        h1 {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          font-size: 56px;
          font-weight: normal;

          margin: 0;

          .movie-rating {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 44px;
            height: 44px;

            padding: 5px;
            margin-left: 20px;

            border: 1px solid grey;
            border-radius: 50%;

            font-size: 32px;
            color: #A1E66F;
          }
        }

        .additional {
          display: flex;
          align-items: flex-start;

          p {
            margin: 0 40px 0 0;

            .highlighted {
              font-size: 26px;
              color: #F65261;
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
</style>
