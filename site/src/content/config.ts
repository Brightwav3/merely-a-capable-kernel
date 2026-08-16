import { defineCollection, z } from "astro:content";

const log = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    area: z.enum(["Voice", "Intelligence", "Audio", "Memory", "Tools", "Platform"]),
    status: z.enum(["VERIFIED", "ACTIVE", "EXPERIMENTAL", "NEEDS WORK", "SUPERSEDED", "RETIRED"]).default("ACTIVE"),
    verification: z.enum(["DETERMINISTIC TEST", "HARDWARE", "EXPERIMENTAL", "NOT VERIFIED", "N/A"]).default("N/A"),
    replacedBy: z.string().optional(),
    diagrams: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string(),
    })).optional(),
    mark: z.enum(["I", "II", "III"]).default("II"),
  }),
});

export const collections = { log };
