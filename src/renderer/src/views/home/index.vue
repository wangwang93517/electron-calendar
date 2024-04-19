<template>
  <div>
    Home Page <router-link to="/test">Go Test</router-link>
    <a-button type="primary">Primary Button</a-button>
  </div>
</template>
<script setup lang="ts">
const a = ref(3)
console.log(a.value)
</script>
