<template>
  <div>
    <h1>New Post</h1>
    <label>Title:</label><br />
    <input type="text" v-model="title" /><br />
    <label>Content:</label><br />
    <textarea v-model="content"></textarea><br />
    <label>Author:</label><br />
    <input type="text" v-model="author" /><br />
    <button @click="createPost">Create</button>
  </div>
</template>

<script setup>
const router = useRouter();

const title = ref("");
const content = ref("");
const author = ref("");

const createPost = async () => {
  const newPost = await $fetch("/api/posts", {
    body: {
      title: title.value,
      content: content.value,
      author: author.value,
      date: new Date().toISOString(),
    },
    method: "POST",
  });
  console.log("newPost", newPost);
  router.push("/posts");
};
</script>
