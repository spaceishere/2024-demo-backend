import { userQueries } from "./queries/user-queries";
import { userMutations } from "./mutations/user-mutations";
import { gymManagerMutations } from "./mutations/gym-manager-mutation";
import { gymManagerQueries } from "./queries/gym-manager-queries";
import { gymMutations } from "./mutations/gym-mutation";
import { gymQueries } from "./queries/gym-queries";

export const resolvers = {
  Query: {
    ...userQueries,
    ...gymManagerQueries,
    ...gymQueries,
  },
  Mutation: {
    ...userMutations,
    ...gymManagerMutations,
    ...gymMutations,
  },
};
