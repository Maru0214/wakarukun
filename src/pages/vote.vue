<script setup lang="ts">
import { ref } from "vue";

const isStudent = true; // いじってみよう
const clicked = ref(false);

// ボタンを押すイベントハンドラ
const handleClick = () => {
  clicked.value = !clicked.value;
};
</script>

<template>
  <div class="background">
    <div class="wide-title">投票ページ - {{ isStudent ? "生徒" : "先生" }}</div>
    <article>
      <VoteStudent v-if="isStudent" />
      <VoteTeacher v-else />
    </article>

    <div>Clicked: {{ clicked ? "理解しています" : "理解していません" }}</div>
    <UnderstoodBtn @click="handleClick"></UnderstoodBtn>
  </div>
</template>

<style scoped lang="scss"></style>
