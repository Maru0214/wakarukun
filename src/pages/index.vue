<script setup lang="ts">
import { useAuth } from "~/composables/useAuth";

const { hasAuthorized, userSignOut, googleSignUp } = useAuth();

const router = useRouter();

const voteSignUp = async () => {
  await googleSignUp();
  await router.push("/vote");
};
</script>

<template>
  <div class="logoutBtnCenter">
    <div class="logoutBtn">
      <div v-if="hasAuthorized" @click="userSignOut">
        <img src="../assets/img/logoutBtn.svg" />
      </div>
    </div>
  </div>
  <article>
    <div class="logo">
      <img src="../assets/img/logo.svg" />
    </div>
    <div class="bota">
      <VBtn
        v-if="hasAuthorized"
        class="vote"
        height="80"
        width="160"
        @click="$router.push('/vote')"
      >
        生徒
      </VBtn>

      <VBtn v-else class="vote" height="80" width="160" @click="voteSignUp">
        生徒
      </VBtn>

      <VBtn
        class="teacher"
        height="80"
        width="160"
        @click="$router.push('/passInput')"
      >
        先生
      </VBtn>
    </div>

    <!-- もしくは

      <NuxtLink to="/vote">
        <VBtn> 投票画面移動するよ </VBtn>
      </NuxtLink>
      

      -->
  </article>
  
</template>

<style scoped lang="scss">
.logo {
  width: 80%;
  margin: 0 auto;
  margin-top: -70px;
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

.logoutBtnCenter {
  text-align: center; /* 水平方向に中央揃え */
}

.logoutBtn {
  width: 30%;
  margin-right: 60px;
  margin-top: -30px;
  display: flex;
  flex-direction: column;
}
</style>
