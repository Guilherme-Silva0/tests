import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateMovieRentDTO } from "../../dtos/CreateMovieRentDTO";

export class CreateMovieRentUseCase {
  async execute({ movieId, userId }: CreateMovieRentDTO): Promise<void> {
    // console.log(movieId);

    const movieExists = await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!movieExists) {
      throw new AppError("movie does not exist");
    }

    const movieAlreadyRented = await prisma.movieRent.findFirst({
      where: {
        movieId,
      },
    });

    if (movieAlreadyRented) {
      throw new AppError("movie already rented");
    }

    const userExists = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userExists) {
      throw new AppError("user does not exist");
    }

    await prisma.movieRent.create({
      data: {
        movieId,
        userId,
      },
    });
  }
}
