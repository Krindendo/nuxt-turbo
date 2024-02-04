import { posts } from "../../../lib/mockData";

export default defineEventHandler(async (event) => {
  const postId = parseInt(event.context.params?.id || "") as number;
  const updatedPost = await readBody(event);

  if (!Number.isInteger(postId)) {
    throw createError({
      statusCode: 400,
      statusMessage: "ID should be an integer",
    });
  }

  const index = posts.findIndex((post) => post.id === postId);

  if (index === -1) {
    throw createError({
      statusCode: 404,
      statusMessage: "Post not found",
    });
  }

  posts[index] = { ...posts[index], ...updatedPost };

  return posts[index];
});
