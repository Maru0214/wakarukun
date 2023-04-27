<script setup lang="ts">
import Coffee from "@/components/coffee.vue";
</script>

<template>
  <VProgressLinear class="progress"></VProgressLinear>
  <div class="wide-title">
    A Vue3 project template with<br />
    Nuxt3 & Vuetify3
  </div>
  <main>
    <Coffee />
  </main>
</template>

<style scoped lang="scss">
.progress {
  background-color: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-on-primary));
}

main {
  padding: 0 100px;
  max-width: 1600px;
  margin: 0 auto;
  @media screen and (max-width: 860px) {
    padding: 0 20px;
  }
}
</style>
