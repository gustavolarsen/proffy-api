import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entities/User';

class UserController {
  async getUsers(request: Request, response: Response) {
    const users = await getRepository(User).find();

    return response.status(200).json(users);
  }

  async getUserById(request: Request, response: Response) {
    const { id } = request.params;
    const user = await getRepository(User).findOne(id);
    return response.status(200).json(user);
  }

  async create(request: Request, response: Response) {
    const { name, email, password, whatsapp } = request.body;

    const newUser = getRepository(User).create({
      name,
      email,
      password,
      whatsapp,
    });

    await getRepository(User).save(newUser);

    return response.status(201).json(newUser);
  }

  async editUserById(request: Request, response: Response) {
    const { id } = request.params;
    const { name, email, whatsapp } = request.body;

    const user = await getRepository(User).save({ id, name, email, whatsapp });

    response.status(200).json(user);
  }
}

export { UserController };
