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
    const respone = await fetch("http://localhost:3232/api/projects/get")
    const data = await respone.json()
    
    return data
}