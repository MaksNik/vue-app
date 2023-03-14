<template>
  <div class="movies-app" ref="appRef">
    <header>
      <CompanyLogo />
      <HomePage v-if="!showDetailsPage" />
      <DetailsPage
        v-if="showDetailsPage"
        @go-home-page="unselectMovie"
      />
    </header>
    <main>
      <SearchResults />
    </main>
    <footer>
      <CompanyLogo />
    </footer>
  </div>
</template>

<script setup lang="ts">
import HomePage from '@/components/pages/HomePage.vue';
import DetailsPage from '@/components/pages/DetailsPage.vue';
import SearchResults from '@/components/results/SearchResults.vue';
import CompanyLogo from '@/components/shared/CompanyLogo.vue';
import { computed, ref, Ref } from 'vue';
import { useStore } from 'vuex';
import actionTypes from '@/store/action-types';

const { getters, dispatch } = useStore();
const appRef = ref(null);
const showDetailsPage: Ref<boolean> = computed(() => {
  console.log(getters.getSelectedMovie);
  if (getters.getSelectedMovie) {
    appRef?.value.scrollIntoView({ behavior: 'smooth' });
  }

  return !!getters.getSelectedMovie;
});

function unselectMovie(): void {
  dispatch(actionTypes.unselectMovie);
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
