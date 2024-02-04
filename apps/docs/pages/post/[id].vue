<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
    <p>Author: {{ post.author }}</p>
    <p>Date: {{ post.date }}</p>
    <button @click="deletePost">Delete</button>
  </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const {
  data: post,
  pending,
  error,
} = await useFetch(`/api/posts/${route.params.id}`);

const deletePost = async () => {
  await $fetch(`/api/posts/${route.params.id}`, {
    method: "Delete",
  });
  router.push("/posts");
};
</script>
