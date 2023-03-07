<template>
  <button
    :type="type"
    class="movies-app-btn"
    :class="{ 'active': isActive, 'large': isLarge, 'first': isFirst, 'second': isSecond }"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps([
  'label',
  'isActive',
  'isLarge',
  'isFirst',
  'isSecond',
  'type',
]);
</script>

<style scoped lang="scss">
  .movies-app-btn {
    height: 36px;
    padding: 8px 20px;
    background-color: rgba(66,66,66,0.68);
    border: 1px solid rgba(66,66,66,0.68);
    text-transform: uppercase;

    font-size: 15px;
    color: white;

    cursor: pointer;

    &.first {
      border-radius: 4px 0 0 4px;
    }

    &.second {
      border-radius: 0 4px 4px 0;
    }

    &.active {
      background-color: #F65261;
      border: 1px solid #F65261;
    }

    &.large {
      width: 233px;
      height: 56px;
      font-size: 20px;
      border-radius: 4px;
    }
  }
</style>
