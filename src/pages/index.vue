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
  <div>
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
    </article>
    <div v-if="hasAuthorized" @click="userSignOut">
      <img src="../assets/img/logoutBtn.svg" />
      <p>{{ hasAuthorized ? "ログイン済み" : "未ログイン" }}</p>
    </div>

    <div v-else class="notLoginDesu">未ログインです。ログインが必要です。</div>
  </div>
</template>

<style scoped lang="scss">
.logo {
  width: 80%;
  margin: 0 auto;
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
