import express from 'express'
import * as projects from './persistence/projectsPersistence.js'
import { v4 as uuidv4 } from 'uuid'
import cors from "cors"

const app = express()
const port = 3232
app.use(express.json())
app.use(cors())

app.post('/api/projects/insert', async (req, res) => {
    try {
        const item = { // This is so bad, but also good enough
            ...req.body
        }

        await projects.insertProject(item)
        res.status(200).send(item)
    } catch (error) {
        console.log(error)
        res.status(500).send("Something went wrong...")
    }
})

app.get('/api/projects/get', async (req, res) => {
    try {
        // const id = req.params.id
        // const result = id ? await projects.getProjects(id) : await projects.getProjects()
        const result = await projects.getProjects()
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.status(500).send("Something went wrong...")
    }
})

app.put('/api/projects/update', async (req, res) => {
    try {
        const userInput = {
            "title": req.body.title,
            "devs": req.body.devs
        }

        const result = await projects.updateProject(req.body.id, userInput)
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.status(500).send("Something went wrong...")
    }
})

app.delete('/api/projects/delete', async (req, res) => {
    try {
        const id = req.body.id
        const result = await projects.deleteProject(id)
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.status(500).send("Something went wrong...")
    }
})

app.listen(port, () => {
    console.log(`Database API is running on port ${port}`)
})

