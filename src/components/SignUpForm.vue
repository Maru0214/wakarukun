<template>
  <div class="signup-form">
    <p class="title">SNSアカウントで登録</p>
    <ul class="signup-buttons">
      <li>
        <button class="google-button" @click="googleSignUp">
          <img src="@/assets/img/google-logo.svg" />
          <span>Googleで登録</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const googleSignUp = () => {
  const { googleSignUp } = useAuth();
  googleSignUp();
};
</script>
