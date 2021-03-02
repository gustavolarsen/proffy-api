import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Subject } from '../entities/Subject';
import { Schedule } from '../entities/Schedule';
import { ISchedule } from '../interfaces/ScheduleInterface';
import convertHourToMinutes from '../utils/convertHourToMinutes';

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

    const scheduleSubject = schedule.map((scheduleItem: ISchedule) => {
      return {
        week_day: scheduleItem.week_day,
        time_start: convertHourToMinutes(scheduleItem.time_start),
        time_end: convertHourToMinutes(scheduleItem.time_end),
        subject_id: newSubject.id,
      };
    });

    const newSchedule = getRepository(Schedule).create(scheduleSubject);

    await getRepository(Subject).save(newSubject);
    await getRepository(Schedule).save(newSchedule);

    return response.status(201).json(newSubject);
  }
}

export { SubjectController };
