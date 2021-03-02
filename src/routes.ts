import { Router } from 'express';
import { ContactController } from './controllers/ContactController';
import { FavoriteController } from './controllers/FavoriteController';
import { SubjectController } from './controllers/SubjectController';
import { TeacherController } from './controllers/TeacherController';
import { UserController } from './controllers/UserController';

const router = Router();

const teacherController = new TeacherController();
const subjectController = new SubjectController();
const userControler = new UserController();
const contactController = new ContactController();
const favoriteController = new FavoriteController();

router.get('/teachers', teacherController.getTeachers);
router.get('/teachers/:id', teacherController.getTeacherById);
router.post('/teachers', teacherController.create);
router.patch('/teachers/:id', teacherController.editTeacherById);

router.get('/subjects/', subjectController.getSubjetcs);
router.get('/subjects/:name', subjectController.getSubjectByName);
router.post('/subjects', subjectController.create);
router.patch('/subjects/:id', subjectController.editSubjectById);

router.get('/users', userControler.getUsers);
router.get('/users/:id', userControler.getUserById);
router.post('/users', userControler.create);
router.patch('/users/:id', userControler.editUserById);

router.post('/conctacts', contactController.create);

router.post('/favorites', favoriteController.create);
router.get('/favorites', favoriteController.getFavorite);
router.get('/favorites/:user_id', favoriteController.getFavoritesByUser);
router.delete('/favorites/:id', favoriteController.delete);

export { router };
