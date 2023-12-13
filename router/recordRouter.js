import express from 'express'

import { addNewRecord, deleteRecord, getAllData, updateRecord } from '../controller/recordControllers.js'

const router = express.Router()

router.get("/", getAllData)

router.post("/", addNewRecord)

router.patch("/:id", updateRecord)

router.delete("/:id", deleteRecord)

export default router
