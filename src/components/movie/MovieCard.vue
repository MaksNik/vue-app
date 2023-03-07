<template>
  <article class="movie-card">
    <main :style="{'background-image': `url(${movie.posterUrl})`, 'background-size': 'cover'}"
          class="poster">
    </main>
    <footer>
      <div class="row">
        <p class="movie-name">{{movie.name}}</p>
        <p class="movie-year">{{movie.date.getFullYear()}}</p>
      </div>
      <div class="row">
        <p class="movie-genre">{{movie.genre}}</p>
      </div>
    </footer>
  </article>
</template>

<script lang="ts" setup>
defineProps(['movie']);
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
