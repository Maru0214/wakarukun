<script setup lang="ts">
const isLoading = ref(true);

onMounted(() => (isLoading.value = false));
</script>

<template>
  <div class="background">
    <VProgressLinear
      :indeterminate="isLoading"
      class="progress"
    ></VProgressLinear>
    <div class="wide-title">先生確認</div>
    <main>
      <check-teacher/>
    </main>
  </div>
</template>

<style scoped lang="scss">
.background {
  background-color: antiquewhite;
}

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
