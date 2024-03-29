import { registerGym, deleteGym, changeStatusGym } from "@/services/gym-service";

export const gymMutations = {
  registerGym: (
    _: unknown,
    { input }: { input: { name: string; title: string; postition: string[]; ownerid: string; image: string[]; rate: string } }
  ) => registerGym(input),
  deleteGym: (_: unknown, { input }: { input: { id: string } }) => deleteGym(input.id),
  changeStatusGym: (_: unknown, { input }: { input: { id: string } }) => changeStatusGym(input.id),
};
