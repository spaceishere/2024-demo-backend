import { getManagers, getManager } from "@/services/gym-manager-service";

export const gymManagerQueries = {
  getManagers: () => getManagers(),
  getManager: (_: unknown, { id }: { id: string }) => getManager(id),
};
