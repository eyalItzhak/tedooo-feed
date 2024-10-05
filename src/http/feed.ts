import { QueryFunctionContext } from "@tanstack/react-query";
import { Post } from "../models/post";

const BASE_URL = "https://backend.tedooo.com";
const FEED_URL = `${BASE_URL}/hw/feed.json`;
const IMPRESSION_URL = BASE_URL;

const PAGE_SIZE = 6;

// Fetch feed with paginated posts
export async function fetchFeed({
  pageParam = 0,
}: QueryFunctionContext): Promise<{
  posts: Post[];
  hasMore: boolean;
  nextPage: number;
}> {
  const page = typeof pageParam === "number" ? pageParam : 0;
  const skip = page * PAGE_SIZE;

  const params = new URLSearchParams({
    skip: skip.toString(),
  });

  await delay(2000); // Simulate delay to server response

  try {
    const res = await fetch(`${FEED_URL}?${params.toString()}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch feed: ${res.statusText}`);
    }

    const data = await res.json();

    return {
      posts: data.data.map((post: any) => {
        return { ...post, date: new Date(post.date) };
      }) as Post[],
      hasMore: data.hasMore,
      nextPage: page + 1,
    };
  } catch (error) {
    throw new Error(`An error occurred. Please try again later.`);
  }
}

// Send impression for a post
export async function sendImpression(id: string) {
  const params = new URLSearchParams({
    itemId: id,
  });

  try {
    const res = await fetch(`${IMPRESSION_URL}?${params.toString()}`);
    if (!res.ok) {
      console.error(`Failed to send impression: ${res.statusText}`);
    }
  } catch (error) {
    console.error(`Failed to send impression`);
  }
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
