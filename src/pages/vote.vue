<script setup lang="ts">
import { useStudentData } from "~/hooks/useStudentData";

const { student } = useStudentData();

// ボタンを押すイベント
const understandClick = () => {
  student.value.isWakaru = !student.value.isWakaru;
  
};
</script>
<template>
  <div>
    <div class="logo-vote">
      <img src="../assets/img/logo.svg" />
    </div>
    <VBtn class="homeBtn" height="80" width="160" @click="$router.push('/')">
      HOME
    </VBtn>

    <div class="understandBtn" @click="understandClick">
      <img
        v-if="student.isWakaru"
        src="../assets/img/ositaato.svg"
        style="displvscode-file://vscode-app/c:/Users/syunn/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.htmlay: block; margin: auto"
      />
      <img
        v-else
        src="../assets/img/osumae.svg"
        style="display: block; margin: auto"
      />
    </div>
    <div class="understandText"></div>
  </div>
</template>

<style scoped lang="scss">
.homeBtn {
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

.understandBtn {
  /* わからないボタンのスタイル */

  margin: 0 auto;
  margin-right: 30%;
  margin-left: 30%;
  text-align: center;
}

.understandText {
  /* 理解ボタンのスタイル */
  color: #5f5f5f;
  text-align: center;
  font-size: 20px;
}
</style>
