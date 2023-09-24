<script setup lang="ts">
import { useAuth } from "./useAuth";

const { googleSignUp, currentUser, hasAuthorized, userSignOut } = useAuth();
</script>

<template>
  <div class="signup-form">
    <p class="title">SNSアカウントで登録</p>
    <ul class="signup-buttons">
      <li>
        <button @click="googleSignUp">
          <img src="@/assets/img/google-logo.svg" />
          <span>Googleで登録</span>
          <p @click="userSignOut">これをおすと、ログアウトする魔法のボタン</p>
        </button>
      </li>
    </ul>
  </div>
  <div>
    今のユーザー:{{ currentUser?.displayName }}
    <br />
    UID:{{ currentUser?.displayName }}
    <br />
    認証済み:{{ hasAuthorized ? "はい" : "いいえ" }}
  </div>
</template>
