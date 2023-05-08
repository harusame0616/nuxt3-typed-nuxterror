<script setup lang="ts">
const goToErrorPage = () => {
  throw createError({
    data: {
      additionalMessage: "additional message",
    },
    fatal: true, // クライアントサイドで error.vue を表示するために必要
  });

  // throw createError({
  //   data: {
  //     errorMessage: "additional message", // 型エラーが出る
  //   },
  //   fatal: true, // クライアントサイドで error.vue を表示するために必要
  // });
};
</script>

<template>
  <h1>app.vue</h1>
  <button @click="goToErrorPage">error</button>
</template>
