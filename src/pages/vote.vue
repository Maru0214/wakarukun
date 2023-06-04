<script setup lang="ts">
const isStudent = false; // いじってみよう
</script>

<template>
  <div class="background">
    <div class="wide-title">投票ページ - {{ isStudent ? "生徒" : "先生" }}</div>
    <article>
      <VoteStudent v-if="isStudent" />
      <VoteTeacher v-else />
    </article>
  </div>
</template>

<style scoped lang="scss"></style>
