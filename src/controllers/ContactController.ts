import { getRepository } from 'typeorm';
import { Response, Request } from 'express';
import { Contact } from '../entities/Contact';
class ContactController {
  async create(request: Request, response: Response) {
    const { user_id, subject_id } = request.body;
    const newContact = getRepository(Contact).create({ user_id, subject_id });
    await getRepository(Contact).save(newContact);
    return response
      .status(201)
      .json({ message: 'Contato registrado com sucesso.' });
  }
}
export { ContactController };
