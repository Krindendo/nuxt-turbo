import { posts } from "../../../lib/mockData";

export default defineEventHandler((event) => {
  return posts;
});
