import { JSONFilePreset } from "lowdb/node";

// In the future you could add Joi for schema validation

const defaultData = { projects: []}
const db = await JSONFilePreset('./database/data.json', defaultData)


export async function insertProject(projectData) {
    db.data.projects.push(projectData)
    await db.write()
    return projectData
}

export async function getProjects(filter) {
    const projects = JSON.parse(JSON.stringify(db.data.projects))
    return filter ? projects.filter(filter) : projects
}

export async function getProject(projectID) {
    const project = db.data.projects.filter(project => project.id === projectID)
    if (project.length <= 0) throw new Error(`project doesn't exist`)
    else return project[0]
}

export async function updateProject(id, newInfo) {
    const project = await getProject(id)
    // doing this to make a new copy of the project to avoid subtle bugs
    // that rely on mutation.
    const newProjectWithUpdates = Object.assign({}, project, newInfo)
    
    db.data.projects[db.data.projects.indexOf(project)] = newProjectWithUpdates
    await db.write()
    return newProjectWithUpdates
}

export async function deleteProject(projectID) {
    const project = await getProject(projectID)
    db.data.projects = db.data.projects.filter(project => project.id !== projectID)
    await db.write()
    return project.id
}

