import { Movie } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateMovieDTO } from "../../dtos/CreateMovieDTO";
import { AppError } from "../../../../errors/AppError";

export class CreateMovieUseCase {
  async execute({
    title,
    release_date,
    duration,
  }: CreateMovieDTO): Promise<Movie> {
    const movieAlreadExist = await prisma.movie.findUnique({
      where: { title },
    });

    if (movieAlreadExist) {
      throw new AppError("Movie alread exist");
    }

    const movie = await prisma.movie.create({
      data: {
        title,
        duration,
        release_date,
      },
    });

    return movie;
  }
}
