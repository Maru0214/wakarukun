<script setup lang="ts">
import { useAuth } from "./useAuth";

const { currentUser, hasAuthorized, userSignOut } = useAuth();
</script>

<template>
  <div class="signup-form">
    <li>
      <button @click="userSignOut">ろぐあうとだ！！！！！！！！</button>
    </li>
  </div>
  <div>
    今のユーザー:{{ currentUser?.displayName }}
    <br />
    UID:{{ currentUser?.displayName }}
    <br />
    認証済み:{{ hasAuthorized ? "はい" : "いいえ" }}
  </div>
</template>

<style>
.logo-vote {
  width: 400px;
  margin-left: 3%;
  margin-top: 10px;
}
</style>
