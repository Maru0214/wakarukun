<script setup lang="ts"></script>

<template>
  <div>
    <article>
      <p>ホーム画面</p>

      <VBtn @click="$router.push('/vote')"> 生徒 </VBtn>
      <VBtn @click="$router.push('/teacher')"> 先生 </VBtn>

      <!-- もしくは

      <NuxtLink to="/vote">
        <VBtn> 投票画面移動するよ </VBtn>
      </NuxtLink>
      
      -->
    </article>
  </div>
</template>

<style scoped lang="scss"></style>
