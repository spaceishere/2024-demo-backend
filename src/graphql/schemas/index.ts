import mergeTypeDefs from "graphql-tools-merge-typedefs";
import { userTypeDefs } from "./user-schema";
import { gymManagerTypeDefs } from "./gym-manager-schema";
import { gymTypeDefs } from "./gym-schema";

export const typeDefs = mergeTypeDefs([userTypeDefs, gymManagerTypeDefs, gymTypeDefs]);
