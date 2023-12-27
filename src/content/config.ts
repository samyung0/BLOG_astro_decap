import { defineCollection, z, reference } from "astro:content";
const Posts = defineCollection({
  type: "content",
  schema: z.object({
    layout: z.string(),
    title: z.string().min(1),
    description: z.string().optional(),
    tags: z.array(reference("tags")).min(1),
    author: reference("authors"),
    date: z.date(),
    thumbnail: z.string(),
    readingTime: z.number().or(z.literal("")).optional(),
    relatedPosts: z.array(reference("posts")).optional(),
  }),
});
const Tags = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});
const Authors = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1),
    bio: z.string().min(1),
    bioImage: z.string().min(1),
  }),
});
export const collections = {
  posts: Posts,
  tags: Tags,
  authors: Authors,
};
