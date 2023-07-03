import express from 'express'
import { followersList, followingList, getUser, getUserFeed, searchUser } from '../controllers/users'
import { followUnfollow } from '../controllers/users'
import { removefollower } from '../controllers/users'
import { verifyToken } from '../middleware/authorisation'
const users=express.Router()

users.get("/id/:id",verifyToken,getUser)
users.get("/search/:searchString",searchUser)
users.get("/userFeed/:feed_id",verifyToken,getUserFeed)
users.patch("/:user_id/followUnfollow/:destination_id",verifyToken,followUnfollow)
users.patch("/:user_id/removeFollower/:destination_id",verifyToken,removefollower)
users.get("/getmyfollowers",verifyToken,followersList)
users.get("/getmyfollowing",verifyToken,followingList)
export default users

