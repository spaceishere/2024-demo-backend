import { registerUser, loginUser } from "@/services/user-service";

export const userMutations = {
  registerUser: (_: unknown, { input }: { input: { name: string; email: string; password: string; image: string } }) => registerUser(input),
  loginUser: (_: unknown, { input }: { input: { email: string; password: string } }) => loginUser(input),
};
