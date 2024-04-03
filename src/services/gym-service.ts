import { prisma } from "@/utils/prisma";
import { GraphQLError } from "graphql";
import chalk from "chalk";

export const getGyms = async () => {
  try {
    const result = await prisma.gym.findMany();
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching users");
  }
};

export const getGym = async (id: string) => {
  try {
    const result = await prisma.gym.findUnique({ where: { id } });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching users");
  }
};

export const registerGym = async (input: {
  name: string;
  title: string;
  ownerid: string;
  postition: string[];
  image: string[];
  rate: string;
  thumbnail: string;
}) => {
  try {
    const result = await prisma.gym.create({ data: input });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error creating user");
  }
};
export const deleteGym = async (id: string) => {
  console.log(chalk.blue(id));
  try {
    const result = await prisma.gym.delete({ where: { id: id } });
    console.log("Gym deleted successfully");
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error deleting gym");
  }
};

export const changeStatusGym = async (id: string) => {
  console.log(chalk.red("id==================> ", id));
  console.log("sdflnslkfsdklm");
  try {
    const gym = await prisma.gym.findUnique({ where: { id } });
    if (!gym) {
      throw new Error("Gym not found");
    }
    const updatedGym = await prisma.gym.update({
      where: { id },
      data: { pending: true },
    });

    console.log("Gym status updated successfully");
    return updatedGym;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error updating gym status");
  }
};
