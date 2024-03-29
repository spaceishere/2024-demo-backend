import { prisma } from "@/utils/prisma";
import { GraphQLError } from "graphql";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import chalk from "chalk";

export const getManagers = async () => {
  try {
    const result = await prisma.gymManager.findMany();
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching managers");
  }
};

export const getManager = async (id: string) => {
  try {
    const result = await prisma.gymManager.findUnique({ where: { id } });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching manager");
  }
};

export const registerManager = async (input: { email: string; password: string; name: string }) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(input.password, saltRounds);
    const managerData = {
      ...input,
      password: hashedPassword,
    };
    const result = await prisma.gymManager.create({ data: managerData });
    console.log(chalk.green("Manager created successfully"));
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error creating manager");
  }
};

export const loginManager = async (input: { email: string; password: string }) => {
  try {
    const findManager = await prisma.gymManager.findUnique({
      where: {
        email: input.email,
      },
    });
    if (findManager && (await bcrypt.compare(input.password, findManager.password))) {
      const secretKey = process.env.JWT_SECRET_KEY || "SECRET123";
      const token = jwt.sign({ id: findManager.id, email: findManager.email }, secretKey, { expiresIn: "24h" });
      return {
        token,
        manager: {
          id: findManager.id,
          name: findManager.name,
          email: findManager.email,
        },
      };
    } else {
      throw new GraphQLError("Invalid credentials");
    }
  } catch (error) {
    console.error(chalk.red(error));
    throw new GraphQLError("Error fetching manager");
  }
};
