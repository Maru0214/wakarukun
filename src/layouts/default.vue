<script setup lang="ts">
import { useAuth } from "~/components/useAuth";

const router = useRouter();

const { hasAuthorized } = useAuth();

console.log("default!");
if (!hasAuthorized) {
  await router.push("/");
}
</script>

<template>
  <VApp>
    <VMain class="v-main">
      <NuxtPage />
    </VMain>
  </VApp>
</template>
