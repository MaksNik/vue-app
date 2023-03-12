<template>
 <div class="searchBy-wrapper">
   <span class="title">Search By</span>
   <div>
     <SharedButton
       @click="setSearchMode"
       :label="SearchMode.Title"
       :is-active="activeButton === SearchMode.Title"
       :is-first="true" />
     <SharedButton
       @click="setSearchMode"
       :label="SearchMode.Genre"
       :is-active="activeButton === SearchMode.Genre"
       :is-second="true" />
   </div>
 </div>
</template>

<script setup lang="ts">
import SharedButton from '@/components/shared/SharedButton.vue';
import { computed, Ref, ref } from 'vue';
import { SearchMode } from '@/models/models';
import { useStore } from 'vuex';
import actionTypes from '@/store/action-types';

const { getters, dispatch } = useStore();
const activeButton = computed(() => getters.getSearchMode);

function setSearchMode(e: MouseEvent): void {
  dispatch(actionTypes.setSearchMode, (e.target as HTMLElement)?.innerText.toLowerCase());
}

</script>

<style scoped lang="scss">
  .searchBy-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-transform: uppercase;

    .title {
      font-size: 16px;
      margin-right: 20px;
    }
  }
</style>
