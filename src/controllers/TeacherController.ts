import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Teacher } from '../entities/Teacher';

class TeacherController {
  async getTeachers(request: Request, response: Response) {
    const tecahers = await getRepository(Teacher).find();

    return response.status(200).json(tecahers);
  }

  async getTeacherById(request: Request, response: Response) {
    const { id } = request.params;
    const tecaher = await getRepository(Teacher).findOne(id);
    return response.status(200).json(tecaher);
  }

  async create(request: Request, response: Response) {
    const { avatar, bio, user_id } = request.body;

    const newTeacher = getRepository(Teacher).create({
      avatar,
      bio,
      user_id,
    });

    await getRepository(Teacher).save(newTeacher);

    return response.status(201).json({ teacher: newTeacher });
  }
}

export { TeacherController };
