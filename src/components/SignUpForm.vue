<template>
  <div class="signup-form">
    <p class="title">SNSアカウントで登録</p>
    <ul class="signup-buttons">
      <li>
        <button class="google-button" @click="googleSignUp">
          <i><GoogleLogo></GoogleLogo></i><span>Googleで登録</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from "./useAuth";

const googleSignUp = async () => {
  const { googleSignUp } = useAuth();
  await googleSignUp();
};
</script>
