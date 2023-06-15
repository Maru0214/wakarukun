<script setup lang="ts">
const isStudent = false; // いじってみよう
</script>

<template>
  <div class="background">
    <div>{{ isStudent ? "生徒" : "先生" }}</div>
    <article>
      <VBtn @click="$router.push('/')"> 最初の画面に移動するよ </VBtn>
      
    </article>
  </div>
</template>

<style scoped lang="scss"></style>
