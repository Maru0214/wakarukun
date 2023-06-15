<script setup lang="ts">
import { ref } from "vue";

const clicked = ref(true);

// ボタンを押すイベントハンドラ
const handleClick = () => {
  clicked.value = !clicked.value;
};
</script>

<template>
  <div class="background">
   
    <article>
      <VBtn @click="$router.push('/')"> HOME </VBtn>
    </article>
    <div class="wakaranaibtn" @click="handleClick">
      <img
        v-if="clicked"
        src="../assets/img/wakaranaibtn1.svg"
        style="display: block; margin: auto"
      />
      <img
        v-else
        src="../assets/img/wakaranaibtn2.svg"
        style="display: block; margin: auto"
      />
    </div>
    <div class="rikaibtn">
      {{ clicked ? "理解しています" : "理解していません" }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.background {
  /* 背景のスタイル */
}

.wide-title {
  /* タイトルのスタイル */
  background-color: #E9E0DB;
  color: #5F5F5F;
  height: 10px;
}

.wakaranaibtn {
  /* わからないボタンのスタイル */
  width: 70%;
  margin : 0 auto;
}

.rikaibtn {
  /* 理解ボタンのスタイル */
  color: #5F5F5F;
  text-align: center;
  font-size: 20px;
  }
</style>
