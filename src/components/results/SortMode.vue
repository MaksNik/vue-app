<template>
  <div class="movies-sort-by">
    <p>sort by</p>
    <SharedButton
      @click="setSortMode"
      :label="SortMode.ReleaseDate"
      :is-first="true"
      :is-active="activeButton === SortMode.ReleaseDate" />
    <SharedButton
      @click="setSortMode"
      :label="SortMode.Rating"
      :is-second="true"
      :is-active="activeButton === SortMode.Rating" />
  </div>
</template>

<script setup lang="ts">
import SharedButton from '@/components/shared/SharedButton.vue';
import { Ref, ref } from 'vue';
import { SortMode } from '@/components/models/models';

const emit = defineEmits(['setSortMode']);
const activeButton: Ref<SortMode> = ref(SortMode.ReleaseDate);

function setSortMode(e: MouseEvent): void {
  if (activeButton.value !== (e.target as HTMLElement)?.innerText.toLowerCase()) {
    activeButton.value = (e.target as HTMLElement)?.innerText.toLowerCase() as SortMode;
    emit('setSortMode', activeButton.value);
  }
}
</script>

<style scoped lang="scss">
  .movies-sort-by {
    display: flex;
    align-items: center;
    text-transform: uppercase;

    p {
      margin-right: 15px;
    }
  }
</style>
