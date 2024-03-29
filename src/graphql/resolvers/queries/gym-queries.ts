import { getGym, getGyms } from "@/services/gym-service";

export const gymQueries = {
  getGyms: () => getGyms(),
  getGym: (_: unknown, { id }: { id: string }) => getGym(id),
};
