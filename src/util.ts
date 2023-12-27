import { getCollection } from "astro:content";
export const posts = await getCollection("posts")
export const authors = await getCollection("authors");
export const tags = await getCollection("tags");
