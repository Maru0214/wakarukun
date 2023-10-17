<script setup lang="ts">
import { useAuth } from "~/components/useAuth";

const { hasAuthorized } = useAuth();

console.log(hasAuthorized);
</script>

<template>
  <VApp>
    <VMain class="v-main">
      <NuxtPage />
    </VMain>
  </VApp>
</template>
