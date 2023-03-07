<template>
  <div class="movies-app" ref="appRef">
    <header>
      <CompanyLogo />
      <HomePage
        v-if="!showDetailsPage"
        @set-active-movie="setActiveMovie"
        @search-finished="setSearchResults"
      />
      <DetailsPage
        v-if="showDetailsPage"
        :movie="activeMovie"
        @go-home-page="() => {
          showDetailsPage = false;
          activeMovie.value = {};
        }"
      />
    </header>
    <main>
      <SearchResults
        :results="searchResults"
        @set-active-movie="setActiveMovie"
      />
    </main>
    <footer>
      <CompanyLogo />
    </footer>
  </div>
</template>

<script setup lang="ts">
import HomePage from '@/components/Pages/HomePage.vue';
import DetailsPage from '@/components/Pages/DetailsPage.vue';
import SearchResults from '@/components/results/SearchResults.vue';
import CompanyLogo from '@/components/shared/CompanyLogo.vue';
import { ref, Ref } from 'vue';
import { IMovie } from '@/components/models/models';
import allMovies from '@/components/models/movies-mock';

const appRef = ref(null);
const searchResults: Ref<IMovie[]> = ref(allMovies);
const activeMovie: Ref<IMovie> = ref({} as IMovie);
const showDetailsPage: Ref<boolean> = ref(false);

function setSearchResults(results: IMovie[]): void {
  searchResults.value = results;
}

function setActiveMovie(movie: IMovie): void {
  activeMovie.value = movie;
  showDetailsPage.value = true;
  appRef.value.scrollIntoView({ behavior: 'smooth' });
}
</script>

<style lang="scss">
  .movies-app {
    color: white;

    &>header {
      background: rgba(0, 0, 0, 0.75);
      position: relative;

      &::after {
        content: "";
        background: url('https://wallpapercave.com/wp/wp10615928.jpg');
        filter: blur(2px);
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
      }

      .logo {
        padding: 30px 0 20px 50px;
      }
    }

    &>main {
      background-color: #232323;
    }

    &>footer {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      background-color: #424242;
    }
  }
</style>
