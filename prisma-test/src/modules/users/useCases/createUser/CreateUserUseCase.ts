import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { AppError } from "../../../../errors/AppError";

export class CreateUserUseCase {
  async execute({ name, email }: CreateUserDTO): Promise<User> {
    const userAlreadExist = await prisma.user.findUnique({ where: { email } });

    if (userAlreadExist) {
      throw new AppError("user alread exist");
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return user;
  }
}
