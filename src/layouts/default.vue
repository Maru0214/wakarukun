<script setup lang="ts">
import { mdiPost } from "@mdi/js";
</script>

<template>
  <VApp>
    <VAppBar color="primary">
      <template #prepend>
        <VAppBarNavIcon color="on-primary" :icon="mdiPost" />
      </template>
      <v-app-bar-title>わかるくんw</v-app-bar-title>
    </VAppBar>
    <VMain class="v-main">
      <NuxtPage />
    </VMain>
  </VApp>
</template>
