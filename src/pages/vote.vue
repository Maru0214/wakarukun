<script setup lang="ts">
import { ref } from "vue";

const clicked = ref(false);

// ボタンを押すイベントハンドラ
const handleClick = () => {
  clicked.value = !clicked.value;
};
</script>

<template>
  <div class="background">
    <div class="wide-title">投票ページ</div>
    <article>
      <VoteStudent />
    </article>
    <div @click="handleClick"  class="wakaranaibtn">
    <img src="../assets/img/wakaranaibtn1.svg" style="display: block; margin: auto;">
    </div>
    <div class="rikaibtn"> {{ clicked ? "理解しています" : "理解していません" }}</div>
  </div>
</template>

<style scoped lang="scss">
.wakaranaibtn{
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.rikaibtn{
  color: #5F5F5F;
  text-align: center
}

</style>