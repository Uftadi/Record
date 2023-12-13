import { RecordModel } from "../models/Records.js";


const getAllData = async (req, res) => {

    try {
        const allData = await RecordModel.find()
        res.status(200).send(allData)
        
    } catch (error) {
        res.status(400).send(error)
    }
}

const addNewRecord = async (req, res) => {
    const newRecord = req.body
    const addNew = new RecordModel(newRecord)

    try {
        await addNew.save()
        res.send('New Record is added' + addNew)
    } catch (error) {
        res.send(error)
    }
}

const updateRecord = async (req, res) => {
    try {
        const ownId = req.params.id
    const updatedData = await RecordModel.findByIdAndUpdate(ownId, req.body, {new:true})
        res.status(201).send('update was successful' + updatedData)
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteRecord = async (req, res) => {
    try {
        const ownId = req.params.id
        const deletedRecord = await RecordModel.findByIdAndDelete(ownId)
        res.status(200).send("delete was successful" + deletedRecord)
        
    } catch (error) {
        res.status(500).send(error)
    }
}

export {getAllData, updateRecord, deleteRecord, addNewRecord}