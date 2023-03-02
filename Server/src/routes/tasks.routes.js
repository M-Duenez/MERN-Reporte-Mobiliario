import {Router} from 'express'
import {getTasks, postTasks, putTasks, deleteTasks, getTaskID} from '../controllers/tasks.controller.js'

const router = Router()

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTaskID);
router.post('/tasks', postTasks);
router.put('/tasks/:id', putTasks);
router.delete('/tasks/:id', deleteTasks);

export default router