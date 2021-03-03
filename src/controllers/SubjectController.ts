import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Subject } from '../entities/Subject';
import { ScheduleController } from '../controllers/ScheduleController';

const scheduleController = new ScheduleController();

class SubjectController {
  async getSubjectByName(request: Request, response: Response) {
    const { name } = request.params;
    const subjects = await getRepository(Subject).find({
      where: { name },
      relations: ['schedules'],
    });

    return response.status(200).json(subjects);
  }

  async getSubjetcs(request: Request, response: Response) {
    const subjects = await getRepository(Subject).find();
    return response.status(200).json(subjects);
  }

  async create(request: Request, response: Response) {
    const { name, cost, teacher_id, schedule } = request.body;

    const newSubject = getRepository(Subject).create({
      name,
      cost,
      teacher_id,
    });

    await getRepository(Subject).save(newSubject);

    await scheduleController.create(newSubject.id, schedule);

    return response.status(201).json(newSubject);
  }

  async editSubjectById(request: Request, response: Response) {
    const { id } = request.params;
    const { name, cost, schedule } = request.body;

    await scheduleController.create(id, schedule);

    const subject = await getRepository(Subject).save({ id, name, cost });

    response.status(200).json(subject);
  }
}

export { SubjectController };
