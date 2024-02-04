<template>
  <div>
    <h1>All Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="'/post/' + post.id">{{ post.title }}</NuxtLink>
      </li>
    </ul>
    <NuxtLink to="/new-post">Add new post</NuxtLink>
  </div>
</template>

<script setup>
const { data: posts, pending, error } = await useFetch("/api/posts");

//const posts = await $fetch.$get("http://localhost:3000/api/posts");
</script>
