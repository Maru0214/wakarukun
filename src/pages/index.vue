<script setup lang="ts"></script>

<template>
  <body>
    <div class="wide-title">最初のページ</div>
    <div>
      <p>最初のページだよ</p>
      <a href="main">投票画面移動するよ</a>
      <a href="teacher">先生画面移動するよ</a>
    </div>
  </body>
</template>

<style scoped lang="scss">
.background {
  background-color: antiquewhite;
}

.progress {
  background-color: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-on-primary));
}

main {
  padding: 0 100px;
  max-width: 1600px;
  margin: 0 auto;

  @media screen and (max-width: 860px) {
    padding: 0 20px;
  }
}
</style>
