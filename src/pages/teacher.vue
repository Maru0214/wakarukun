<script setup lang="ts">
import { ref } from "vue";

const clicked = ref(true);

// ボタンを押すイベントハンドラ
const handleClick = () => {
  clicked.value = !clicked.value;
};
</script>

<template>
   
      <div class="logo-vote">
      <img
        src="../assets/img/logo.svg"
      />
    </div >

      <VBtn  class="homebtn" height="80" width="160" @click="$router.push('/')"> HOME </VBtn>
    
    <div class="wakaranaibtn">
      <img
        src="../assets/img/wakaranaibtn1.svg"
      />
      </div>


</template>

<style scoped lang="scss">

.homebtn{
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
  background-color: #E9E0DB;
  color: #5F5F5F;
  height: 30%;
}

.wakaranaibtn {
  /* わからないボタンのスタイル */
  
  margin : 0 auto;
  margin-right: 30%;
  margin-left: 30%;
}

.rikaibtn {
  /* 理解ボタンのスタイル */
  color: #5F5F5F;
  text-align: center;
  font-size: 20px;
  }
</style>
