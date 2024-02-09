<template>
  <div class="flex items-center flex-col h-screen w-screen gap-4">
    <div class="flex gap-3 h-1/2 items-end">
      <UiButton @click="getFast">Fast Data</UiButton>
      <UiButton @click="getSlow">Slow Data</UiButton>
    </div>

    <ul class="grid place-items-center">
      <li v-for="item of post">
        <p>{{ item.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Posts } from "~/lib/mockData";

const post = ref<Posts[]>([]);
const getFast = async () => {
  const data = await $fetch<Posts[]>(`/api/requests/fast-req`, {
    method: "GET",
  });
  post.value = data;
};

const getSlow = async () => {
  const data = await $fetch<Posts[]>(`/api/requests/slow-req`, {
    method: "GET",
  });
  post.value = data;
};
</script>
