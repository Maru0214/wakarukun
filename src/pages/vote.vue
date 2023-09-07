<script setup lang="ts">
import { ref } from "vue";

const clicked = ref(true);

// ボタンを押すイベントハンドラ
const handleClick = () => {
  clicked.value = !clicked.value;
};
</script>

<template>
  <div>
    <div class="logo-vote">
      <img src="../assets/img/logo.svg" />
    </div>

    <VBtn class="homebtn" height="80" width="160" @click="$router.push('/')">
      HOME
    </VBtn>

    <div class="wakaranaibtn" @click="handleClick">
      <img
        v-if="clicked"
        src="../assets/img/wakaranaibtn.png"
        style="display: block; margin: auto"
      />
      <img
        v-else
        src="../assets/img/wakattabtn.png"
        style="display: block; margin: auto"
      />
    </div>
    <div class="rikaibtn">
      {{ clicked ? "理解しています" : "理解していません" }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.homebtn {
  background-size: cover;
  font-size: 35px;
  margin-left: 3%;
  margin-top: 25px;
}
.logo-vote {
  width: 400px;
  margin-left: 3%;
  margin-top: 10px;
}
.wide-title {
  /* タイトルのスタイル */
  background-color: #e9e0db;
  color: #5f5f5f;
  height: 30%;
}

.wakaranaibtn {
  /* わからないボタンのスタイル */

  margin: 0 auto;
  margin-right: 30%;
  margin-left: 30%;
  text-align: center;
}

.rikaibtn {
  /* 理解ボタンのスタイル */
  color: #5f5f5f;
  text-align: center;
  font-size: 20px;
}
</style>
