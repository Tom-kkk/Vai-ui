<script setup>
import { VaiButton } from '../packages/components';

</script>

<template>
  <div class="app">
    <VaiButton type="primary" @click="() => alert('Clicked!')">Primary Button</VaiButton>
    <VaiButton type="success" @click="() => alert('Clicked!')">Success Button</VaiButton>
    <VaiButton disabled @click="() => alert('Clicked!')">Disabled Button</VaiButton>
    <VaiButton loading @click="() => alert('Clicked!')">Loading Button</VaiButton>
  </div>

</template>

<style scoped>

</style>
