import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Favorite } from '../entities/Favorite';

class FavoriteController {
  async create(request: Request, response: Response) {
    const { user_id, subject_id } = request.body;
    const newFavorite = getRepository(Favorite).create({ user_id, subject_id });
    await getRepository(Favorite).save(newFavorite);
    return response
      .status(201)
      .json({ message: 'Aula favoritada com sucesso.' });
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    await getRepository(Favorite).delete(id);
    return response
      .status(201)
      .json({ message: 'Aula removida dos favoritos.' });
  }

  async getFavorite(request: Request, response: Response) {
    const { user_id, subject_id } = request.body;

    const favorite = await getRepository(Favorite).findOne({
      where: { user_id, subject_id },
    });
    return response.status(201).json(favorite);
  }

  async getFavoritesByUser(request: Request, response: Response) {
    const { user_id } = request.body;

    const favorite = await getRepository(Favorite).find({
      where: { user_id },
    });
    return response.status(201).json(favorite);
  }
}

export { FavoriteController };
