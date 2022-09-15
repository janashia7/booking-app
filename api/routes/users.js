import { Router } from 'express';
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = Router();

// router.get('/checkAuthentication', verifyToken, (req, res, next) => {
//   res.send('Logged In');
// });

// router.get('/checkUser/:id', verifyUser, (req, res, next) => {
//   res.send('User logged in you can modify your account');
// });

// router.get('/checkAdmin/:id', verifyAdmin, (req, res, next) => {
//   res.send('Admin logged in you can modify all accounts');
// });

router.put('/:id', verifyUser, updateUser);

router.delete('/:id', verifyUser, deleteUser);

router.get('/:id', verifyUser, getUser);

router.get('/', verifyAdmin, getUsers);

export default router;
