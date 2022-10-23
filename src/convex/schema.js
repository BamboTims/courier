import { defineSchema, defineTable, s } from "convex/schema";

export default defineSchema({
  users: defineTable({
    name: s.string(),
    tokenIdentifier: s.string(),
  }),
});
