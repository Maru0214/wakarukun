<script setup lang="ts">
import { useAuth } from "./useAuth";

const { currentUser, hasAuthorized, userSignOut } = useAuth();
</script>

<template>
  <div class="signup-form">
    <li>
      <p @click="userSignOut">これをおすと、ログアウトする魔法のボタン</p>
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
