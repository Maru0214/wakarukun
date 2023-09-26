<script setup lang="ts">
import { useStudentData } from "../hooks/useStudentData";

const { addTest } = useStudentData();
</script>

<template>
  <div class="logo-vote">
    <img src="../assets/img/logo.svg" />
  </div>

  <div @click="addTest">でーたついか</div>
</template>

<style scoped lang="scss"></style>
