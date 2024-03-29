import { prisma } from "@/utils/prisma";
import { GraphQLError } from "graphql";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import chalk from "chalk";
export const getUsers = async () => {
  try {
    const result = await prisma.user.findMany();
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching users");
  }
};

export const getUser = async (id: string) => {
  try {
    const result = await prisma.user.findUnique({ where: { id } });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching users");
  }
};

export const registerUser = async (input: { name: string; email: string; password: string; image: string }) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(input.password, saltRounds);
    const userData = {
      ...input,
      password: hashedPassword,
    };
    const result = await prisma.user.create({ data: userData });
    console.log(chalk.green("User created successfully"));
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error creating user");
  }
};

export const loginUser = async (input: { email: string; password: string }) => {
  try {
    const findUser = await prisma.user.findUnique({
      where: {
        email: input.email,
      },
    });
    if (findUser && (await bcrypt.compare(input.password, findUser.password))) {
      const secretKey = process.env.JWT_SECRET_KEY || "SECRET123";
      const token = jwt.sign({ id: findUser.id, email: findUser.email }, secretKey, { expiresIn: "24h" });
      console.log("psda=====================================");
      return {
        token,
        user: {
          id: findUser.id,
          name: findUser.name,
          email: findUser.email,
          image: findUser.image,
        },
      };
    } else {
      throw new GraphQLError("Invalid credentials");
    }
  } catch (error) {
    console.error(chalk.red(error));
    throw new GraphQLError("Error fetching users");
  }
};
