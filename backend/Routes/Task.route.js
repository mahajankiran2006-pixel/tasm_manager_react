import express from "express"
import { AddTask, DeleteAllTasks, DeleteTask, GetAllTasks, GetOneTask, updateTask } from "../Controller/Task.controller.js"
const router = express.Router()

router.get("/task", GetAllTasks)
router.get("/task/:id", GetOneTask)
router.post("/task", AddTask)
router.delete("/task", DeleteAllTasks)
router.delete("/task/:id", DeleteTask)
router.put("/task/:id", updateTask)


export default router