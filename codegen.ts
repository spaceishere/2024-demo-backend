import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/graphql/schemas",
  generates: {
    "./src/graphql/generated/index.ts": {
      overwrite: true,
      plugins: ["typescript", "typescript-resolvers", "typescript-operations", "typescript-react-apollo"],
      config: {
        withHooks: true,
      },
    },
  },
};

export default config;
