<script setup lang="ts">
const isStudent = false; // いじってみよう
</script>

<template>
  <div class="background">
    <div>{{ isStudent ? "生徒" : "" }}</div>
    <article>
      <VBtn @click="$router.push('/')"> HOME </VBtn>
      
    </article>
  </div>
</template>

<style scoped lang="scss"></style>
