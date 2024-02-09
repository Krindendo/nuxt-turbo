import { posts } from "~/lib/mockData";

export default defineEventHandler(async (event) => {
  return posts;
});
