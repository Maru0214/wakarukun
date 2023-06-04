<script setup lang="ts"></script>

<template>
  <div>
    <div class="wide-title">最初のページ</div>
    <article>
      <p>最初のページだよ</p>

      <VBtn @click="$router.push('/vote')"> 投票画面移動するよ </VBtn>

      <!-- もしくは

      <NuxtLink to="/vote">
        <VBtn> 投票画面移動するよ </VBtn>
      </NuxtLink>
      
      -->
    </article>
  </div>
</template>

<style scoped lang="scss"></style>
