import {Router} from 'express'
import {getAreas, postAreas, putAreas, deleteAreas, getAreaID} from '../controllers/areas.controller.js'

const router = Router()

router.get('/areas', getAreas);
router.get('/areas/:id', getAreaID);
router.post('/areas', postAreas);
router.put('/areas/:id', putAreas);
router.delete('/areas/:id', deleteAreas);

export default router