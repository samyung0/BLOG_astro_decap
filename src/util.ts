import { getCollection, getEntry } from "astro:content";
export const posts = await getCollection("posts");
export const getPost = async (slug: string) => await getEntry("posts", slug);
export const authors = await getCollection("authors");
export const getAuthor = async (slug: string) => await getEntry("authors", slug);
export const tags = await getCollection("tags");
export const getTag = async (slug: string) => await getEntry("tags", slug);
