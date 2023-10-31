<script setup lang="ts">
const password = ref("");

const { passwordTeacher } = useRuntimeConfig().public;

function checkPassword(): void {
  console.log(password.value === passwordTeacher);
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
