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
import { Ref, ref } from 'vue';
import { SearchMode } from '@/components/models/models';

const emit = defineEmits(['setSearchMode']);
const activeButton: Ref<SearchMode> = ref(SearchMode.Title);

function setSearchMode(e: MouseEvent): void {
  if (activeButton.value !== (e.target as HTMLElement)?.innerText.toLowerCase()) {
    activeButton.value = (e.target as HTMLElement)?.innerText.toLowerCase() as SearchMode;
    emit('setSearchMode', activeButton.value);
  }
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
