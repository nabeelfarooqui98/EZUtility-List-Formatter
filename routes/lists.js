import express from 'express';

//import { createUser, deleteUser, getUser, getUserById, updateUser } from '../controllers/users.js';
import { QuotesComma } from '../controllers/lists.js';

const router = express.Router();

//router.get('/', getUser);

router.post('/QuotesComma', QuotesComma);

//router.get('/:id', getUserById);

//router.delete('/:id', deleteUser);

//router.patch('/:id', updateUser);

export default router;