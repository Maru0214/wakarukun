<template>
  <div class="background">
    <div class="wide-title">投票ページ</div>
    <article>
      <VoteStudent />
    </article>
    <div class="wakaranaibtn" @click="handleClick">
      <img v-if="clicked" src="../assets/img/wakaranaibtn1.svg" style="display: block; margin: auto;">
      <img v-else src="../assets/img/wakaranaibtn2.svg" style="display: block; margin: auto;">
    </div>
    <div class="rikaibtn">{{ clicked ? "理解しています" : "理解していません" }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const clicked = ref(false);

// ボタンを押すイベントハンドラ
const handleClick = () => {
  clicked.value = !clicked.value;
};
</script>

<style scoped lang="scss">
.background {
  /* 背景のスタイル */
}

.wide-title {
  /* タイトルのスタイル */
}

.wakaranaibtn {
  /* わからないボタンのスタイル */
}

.rikaibtn {
  /* 理解ボタンのスタイル */
}
</style>
