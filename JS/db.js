export async function insertProject(project) {
    const response = await fetch('http://localhost:3232/api/projects/insert', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(project)
    })

    const data = response.json()
    return data
}

export async function getProjects() {
    const response = await fetch("http://localhost:3232/api/projects/get")
    const data = await response.json()

    return data
}

export async function removeProject(id) {
    const response = await fetch(`http://localhost:3232/api/projects/delete/${id}`, { method: "DELETE" })
    const data = await response.json()

    return data
}

export async function updateProject(id, newInfo) {
    const respone = await fetch(`http://localhost:3232/api/projects/put/${id}`, {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newInfo)
    })

    const data = await respone.json()

    return data
}