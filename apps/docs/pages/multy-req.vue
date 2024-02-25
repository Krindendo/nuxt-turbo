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
import { fetchData } from "~/lib/fetchData";
import type { Posts } from "~/lib/mockData";

const post = ref<Posts[]>([]);
const getFast = async () => {
  try {
    const { data, error } = await fetchData.get<Posts[]>(
      "/api/requests/fast-req1"
    );
    if (data) {
      post.value = data;
    }
  } catch (error) {}
};

const getSlow = async () => {
  const { data, error } = await fetchData.get<Posts[]>(
    "/api/requests/slow-req"
  );
  if (data) {
    post.value = data;
  }
};
</script>
