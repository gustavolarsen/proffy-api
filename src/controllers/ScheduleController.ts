import { getRepository } from 'typeorm';
import { Request, Response } from 'express';

import { Schedule } from '../entities/Schedule';
import { ISchedule } from '../interfaces/ScheduleInterface';
import convertHourToMinutes from '../utils/convertHourToMinutes';

class ScheduleController {
  async deleteScheduleById(request: Request, response: Response) {
    const { id } = request.params;

    await getRepository(Schedule).delete(id);

    return response
      .status(200)
      .json({ message: 'Horário removido com sucesso' });
  }

  async create(subject_id: string, schedule: any) {
    await getRepository(Schedule).delete({ subject_id });

    const scheduleSubject = schedule.map((scheduleItem: ISchedule) => {
      return {
        week_day: scheduleItem.week_day,
        time_start: convertHourToMinutes(scheduleItem.time_start),
        time_end: convertHourToMinutes(scheduleItem.time_end),
        subject_id: subject_id,
      };
    });

    const newSchedule = getRepository(Schedule).create(scheduleSubject);

    await getRepository(Schedule).save(newSchedule);

    return newSchedule;
  }
}

export { ScheduleController };
