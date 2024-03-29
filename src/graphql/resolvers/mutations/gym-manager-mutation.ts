import { registerManager, loginManager } from "@/services/gym-manager-service";

export const gymManagerMutations = {
  registerManager: (_: unknown, { input }: { input: { email: string; password: string; name: string } }) => registerManager(input),
  loginManager: (_: unknown, { input }: { input: { email: string; password: string } }) => loginManager(input),
};
