<script setup lang="ts"></script>

<template>
  <div>
    <article>
      <div class="logo">
        <img src="../assets/img/logo.svg" />
      </div>

      <div class="bota">
        <VBtn
          class="vote"
          height="80"
          width="160"
          @click="$router.push('/vote')"
        >
          生徒
        </VBtn>
        <VBtn
          class="teacher"
          height="80"
          width="160"
          @click="$router.push('/teacher')"
        >
          先生
        </VBtn>
      </div>

      <!-- もしくは

      <NuxtLink to="/vote">
        <VBtn> 投票画面移動するよ </VBtn>
      </NuxtLink>
      

      -->
     
      <SignUpForm/>
      
    </article>
  </div>
</template>

<style scoped lang="scss">
.logo {
  width: 80%;
  margin: 0 auto;
  margin-top: 25%;
}

.bota {
  text-align: center;
  margin-top: 10%;
}

.vote {
  background-size: cover;
  text-align: center;
  font-size: 45px;
  margin-right: 15px;
}

.teacher {
  background-size: cover;
  text-align: center;
  font-size: 45px;
  margin-left: 15px;
}
</style>
