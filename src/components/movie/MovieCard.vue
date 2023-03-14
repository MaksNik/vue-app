<template>
  <article class="movie-card">
    <main v-show-if-in-viewport="showPoster" class="poster">
    </main>
    <footer>
      <div class="row">
        <p class="movie-name">{{movie.title}}</p>
        <p class="movie-year">{{year}}</p>
      </div>
      <div class="row">
        <p class="movie-genre">{{genres}}</p>
      </div>
    </footer>
  </article>
</template>

<script lang="ts" setup>
import { vShowIfInViewport } from '@/components/directives';
import { computed } from 'vue';

const props = defineProps(['movie']);
const year = computed(() => new Date(props.movie.releaseDate).getFullYear());
const genres = computed(() => props.movie.genres.join(', '));

function showPoster(entries: IntersectionObserverEntry[]): void {
  entries.forEach((entry) => {
    const { target, isIntersecting } = entry;

    if (isIntersecting) {
      (target as HTMLElement).style.backgroundImage = `url(${props.movie.posterPath})`;
      (target as HTMLElement).style.backgroundSize = 'cover';
    }
  });
}
</script>

<style lang="scss" scoped>
  .movie-card {
    cursor: pointer;

    .poster {
      width: 324px;
      height: 455px;
      background-color: rebeccapurple;
    }

    footer {
      margin-top: 22px;
      color: white;

      .row {
        display: flex;
        justify-content: space-between;
        line-height: 22px;

        p {
          margin: 0;
        }
      }

      .movie-name {
        font-size: 18px;
      }

      .movie-year {
        font-size: 16px;
        border: 1px solid grey;
        border-radius: 10%;
        padding: 5px;
      }

      .movie-genre {
        font-size: 14px;
      }
    }
  }
</style>
