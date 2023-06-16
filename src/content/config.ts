// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
import { convertGermanToISODate } from '../utils'

// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        isDraft: z.boolean().default(false),
        title: z.string().trim().min(1).or(z.number()).transform(val => String(val)),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }).optional(),
        description: z.string().optional(),
        author: z.string().default('Tom'),
        tags: z.array(z.coerce.string()),
        footnote: z.string().optional(),
        pubDate: z.coerce.string().transform(convertGermanToISODate).pipe(z.date()).optional()
    }).superRefine(({ isDraft, pubDate }, ctx) => {
        if (!isDraft && pubDate === undefined) {
            ctx.addIssue({
                code: "custom",
                message: "pubDate is required when it's not a draft :)",
                path: ["pubDate"]
            });
        }
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
    posts: postsCollection,
};