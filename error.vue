<script setup lang="ts">
import { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();
</script>

<template>
  <div>
    <h1>error.vue</h1>
    <div>{{ props.error.data.additionalMessage }}</div>
    <!-- {{ props.error.data.errorMessage }} 型エラー -->
  </div>
</template>
