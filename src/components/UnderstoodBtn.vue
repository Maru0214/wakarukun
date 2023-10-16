<script setup lang="ts"></script>

<template>
  <div class="circle">
    <div class="wakaranaitx">わからない</div>
  </div>
</template>

<style scoped lang="scss">
.circle {
  width: 100px; /* 円の直径を指定 */
  height: 100px; /* 円の直径を指定 */
  border-radius: 50%; /* border-radiusを50%に指定 */
  background-color: rgb(119, 196, 213); /* 円の背景色を指定 */
  margin-left: 1000px;
}

.wakaranaitx {
  color: white;
  font-weight: bold;
  padding-top: 35px;
  text-align: center;
}
</style>
