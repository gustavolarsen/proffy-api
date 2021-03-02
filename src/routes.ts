import { Router } from 'express';
import { SubjectController } from './controllers/SubjectController';
import { TeacherController } from './controllers/TeacherController';
import { UserController } from './controllers/UserController';

const router = Router();

const teacherController = new TeacherController();
const subjectController = new SubjectController();
const userControler = new UserController();

router.post('/teachers', teacherController.create);
router.get('/teachers', teacherController.getTeachers);
router.get('/teachers/:id', teacherController.getTeacherById);

router.post('/subjects', subjectController.create);
router.get('/subjects/', subjectController.getSubjetcs);
router.get('/subjects/:name', subjectController.getSubjectByName);

router.post('/users', userControler.create);
router.get('/users', userControler.getUsers);
router.get('/users/:id', userControler.getUserById);
router.patch('/users/:id', userControler.editUserById);

export { router };
