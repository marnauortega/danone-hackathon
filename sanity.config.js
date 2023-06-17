import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "default",
  title: "graphql-test",

  projectId: "xm5sznzi",
  dataset: "production",
  basePath: "/admin",

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
