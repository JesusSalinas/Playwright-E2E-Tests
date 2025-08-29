import { JSONSchemaType } from "ajv";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const postSchema: JSONSchemaType<Post> = {
  type: "object",
  required: ["userId", "id", "title", "body"],
  properties: {
    userId: { type: "integer" },
    id: { type: "integer" },
    title: { type: "string", minLength: 1 },
    body: { type: "string", minLength: 1 },
  },
  additionalProperties: false,
};
