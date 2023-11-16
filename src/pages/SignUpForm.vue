<script setup lang="ts">
import { useAuth } from "~/composables/useAuth";

const { googleSignUp } = useAuth();
const router = useRouter();

const onClick = async () => {
  await googleSignUp();
  await router.push("/vote");
};
</script>

<template>
  <div class="logo-vote">
    <img src="../assets/img/logo.svg" />
  </div>

  <div class="signup-form">
    <p class="title">SNSアカウントで登録</p>
    <ul class="signup-buttons">
      <li>
        <p>おまえろぐいんしてないぞ。下のロゴを押して、ろぐいんするのだ!!</p>
        <button class="googleLogo" @click="onClick">
          <img src="@/assets/img/google-logo.svg" />
          <span>Googleで登録</span>
          <p></p>
        </button>
      </li>
    </ul>
  </div>
  <div></div>
</template>

<style>
.logo-vote {
  width: 400px;
  margin-left: 3%;
  margin-top: 10px;
}
.googleLogo {
  width: 50%;
}
</style>
