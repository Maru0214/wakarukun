<script setup lang="ts">
import { useAuth } from "~/components/useAuth";

const router = useRouter();

const { currentUser } = useAuth();

const jumpToLogin = async (): Promise<never> => {
  await router.push("./signUpFrom");
  throw new Error("ろぐいんしてね");
};

if (currentUser == null) {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define, @typescript-eslint/no-throw-literal
  throw jumpToLogin();
}
</script>

<template>
  <VApp>
    <VMain class="v-main">
      <NuxtPage />
    </VMain>
  </VApp>
</template>
