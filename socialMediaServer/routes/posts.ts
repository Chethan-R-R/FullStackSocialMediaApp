import express from 'express'
import { addComment, deleteComment, getComments, getPost, likeDislikePost, removePost, userPostList } from '../controllers/posts'
import { verifyToken } from '../middleware/authorisation'
export const posts=express.Router()

posts.get('/list/:id',userPostList)
posts.get('/:id',getPost)
posts.patch('/addComment',verifyToken,addComment)
posts.delete('/remove',verifyToken,removePost)
posts.delete('/deleteComment',verifyToken,deleteComment)
posts.get('/comments/:post_id',getComments)
posts.patch('/likeDislike',verifyToken,likeDislikePost)
export default posts 