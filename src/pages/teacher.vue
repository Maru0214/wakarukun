<script setup lang="ts">
import { useStudentsData } from "~/composables/useStudentsData";

const { getIdListWithIsWakaru } = useStudentsData();
</script>

<template>
  <head>
    <meta name="viewport" content="width=device-width" />
  </head>
  <p class="title">わからない生徒</p>
  <p class="seitosu">{{ getIdListWithIsWakaru(false).length }}</p>
  <v-btn class="toHomeBtn" @click="$router.push('/')"> homeへ戻る </v-btn>
</template>

<style>
/*共通スタイル*/

.toHomeBtn {
  margin-left: 5%;
  height: 10%;
  width: 20%;
  right: 10px; /* 右に10px移動 */
  top: 10px; /* 下に10px移動 */
}
.title {
  margin-top: 5%;
  text-align: center;
  color: #5f5f5f;
  font-family: vdl-logojrblack, sans-serif;
  font-style: normal;
  font-size: 350%;
}

.seitosu {
  text-align: center;
  color: #5f5f5f;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-style: normal;
  font-size: 1300%;
}

.hito {
  text-align: center;
  color: #5f5f5f;
  font-family: vdl-logojrblack, sans-serif;
  font-style: normal;
  font-size: 30%;
  margin-top: -22%;
  margin-left: 30%;
}

h2 {
  position: relative;
  padding: 0.8rem 0;
  margin-top: 8%;
  margin-bottom: 0.2rem;
  border-bottom: 5px solid;
  color: #a1b9c7;
  font-weight: bold;
  font-size: 26px;
  text-align: center;
}

h2:before,
h2:after {
  position: absolute;
  top: 100%;
  left: 50%;
  content: "";
  height: 0;
  width: 0;
}

h2:before {
  border: 16px solid;
  border-color: transparent;
  border-top-color: #a1b9c7;
  margin-left: -16px;
}

h2:after {
  border: 10px solid;
  border-color: transparent;
  border-top-color: #e9e0db;
  margin-left: -10px;
}

.example p {
  position: absolute;
  bottom: -8%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  font-size: 25vw;
  color: #5f5f5f;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}

.pasento {
  top: 10%;
  margin-left: 43%;
  font-size: 10vw;
  color: #5f5f5f;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}

.pasento {
  margin-top: 20%;
  text-align: center;
  font-size: 10vw;
  color: #5f5f5f;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}
</style>
