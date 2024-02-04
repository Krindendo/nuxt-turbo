import { posts } from "../../../lib/mockData";

export default defineEventHandler((event) => {
  const postId = parseInt(event.context.params?.id || "") as number;

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

  return { message: "Post deleted successfully" };
});
