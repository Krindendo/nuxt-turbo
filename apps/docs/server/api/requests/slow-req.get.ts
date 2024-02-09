import { sleep } from "~/lib/fetchData";
import { posts } from "~/lib/mockData";

export default defineEventHandler(async (event) => {
  await sleep(4000);
  return [posts[1]];
});
