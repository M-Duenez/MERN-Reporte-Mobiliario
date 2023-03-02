import {Router} from 'express'
import {getPosts, postPosts, putPosts, deletePosts, getPostID} from '../controllers/posts.controller.js'

const router = Router()

router.get('/posts', getPosts);
router.get('/posts/:id', getPostID);
router.post('/posts', postPosts);
router.put('/posts', putPosts);
router.delete('/posts', deletePosts);

export default router