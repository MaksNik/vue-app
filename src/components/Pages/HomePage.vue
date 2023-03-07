<template>
  <div class="wrapper">
    <h1>FIND YOUR MOVIE</h1>
    <SearchBar @set-search-value="onSetSearchValue"></SearchBar>
    <SearchBySwitcher @set-search-mode="onSetSearchMode"></SearchBySwitcher>
  </div>
</template>

<script setup lang="ts">
import SearchBar from '@/components/search/SearchBar.vue';
import SearchBySwitcher from '@/components/search/SearchMode.vue';
import { Ref, ref } from 'vue';
import { IMovie, SearchMode } from '@/components/models/models';
import allMovies from '@/components/models/movies-mock';

const searchValue: Ref<string> = ref('');
const searchMode: Ref<SearchMode> = ref(SearchMode.Title);
const emit = defineEmits(['searchFinished']);

function searchByMode(movie:IMovie): boolean {
  if (searchMode.value === SearchMode.Genre) {
    return movie.genre.toLowerCase().includes(searchValue.value);
  }

  return movie.name.toLowerCase().includes(searchValue.value);
}

function performSearch(): void {
  const result = allMovies.filter((movie) => searchByMode(movie));
  emit('searchFinished', result);
}

function onSetSearchMode(mode: SearchMode): void {
  searchMode.value = mode;
  if (searchValue.value) {
    performSearch();
  }
}

function onSetSearchValue(value: string): void {
  searchValue.value = value.toLowerCase();
  performSearch();
}
</script>

<style scoped lang="scss">
  .wrapper {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 0 100px;

    .logo {
      margin: 0 0 80px;
      padding: 20px 0;
    }

    h1 {
      margin-bottom: 50px;
    }
  }
</style>
