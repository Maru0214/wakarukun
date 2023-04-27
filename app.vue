<script setup>
import { mdiPost } from "@mdi/js";
</script>

<template>
  <VApp>
    <VAppBar color="primary">
      <template v-slot:prepend>
        <VAppBarNavIcon color="on-primary" :icon="mdiPost" />
      </template>
      <v-app-bar-title>tpl-nuxt</v-app-bar-title>
    </VAppBar>
    <VMain>
      <NuxtPage />
    </VMain>
  </VApp>
</template>
