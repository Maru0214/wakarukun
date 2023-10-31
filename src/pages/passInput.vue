<script setup lang="ts">
import { LocalStorage } from "~/helpers/localstorage";

const hasTeacherAuthorizedStorage = new LocalStorage("hasTeacherAuthorized");

const password = ref("");
const router = useRouter();
const { passwordTeacher } = useRuntimeConfig().public;

onMounted(() => {
  const hasTeacherAuthorized = hasTeacherAuthorizedStorage.get();
  console.log(hasTeacherAuthorized ? "認証したことある" : "認証したことない");
});

async function checkPassword(): Promise<void> {
  if (password.value === passwordTeacher) {
    hasTeacherAuthorizedStorage.set(true);
    console.log("認証済み！");

    await router.push("/teacher");
  } else {
    console.log("認証失敗");
  }
  password.value = "";
}
</script>

<template>
  <main>
    <v-form @submit.prevent="checkPassword">
      <div class="form-container">
        <v-text-field
          v-model="password"
          label="パスワード入れろ"
          variant="outlined"
          type="password"
          clearable
          focused
        >
        </v-text-field>
        <v-btn :disabled="password.length === 0" color="success" type="submit">
          Sign In
        </v-btn>
      </div>
    </v-form>
  </main>
</template>

<style lang="scss">
main {
  height: 100%;
  width: 100%;
  display: grid;
  display: grid;
  place-content: center;
  place-items: center;

  .form-container {
    display: flex;
    width: 500px;
    gap: 20px;
  }
}
</style>
