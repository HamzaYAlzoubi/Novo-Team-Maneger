let Add_Project = document.querySelector(".Add_Project");
let container_Project_all = document.querySelector(".container_Project_all")
let counterClassBig = 1;
let counter_big = 1;
let counterClassmin = 1;
let counter_min = 1;
let add_minCounter = 1;

Add_Project.onclick = function () { // اضافة مشروع كبير
    const new_project_id = counterClassBig++
    const new_project = document.createElement("div")
    new_project.id = `big_Project${new_project_id}`
    new_project.className = "project";

    const projectData = document.createElement("div")
    projectData.className = `big_Project big_Project${new_project_id}`
    projectData.innerHTML = `
        <i class="fa-solid fa-caret-right"></i>
        <i class="fa-solid fa-caret-down"></i>
        <div>${counter_big++}.</div>
        <div class="customer_name">Novo company
            <small>hamza Y alzoubi</small>
        </div>
        <div>
            <img src="/Image/2.Dashboard/Work Team/Mohamed S.jpg" alt="">
            <img src="/Image/2.Dashboard/Work Team/Amjad.jpg" alt="">
            <img src="/Image/2.Dashboard/Work Team/Omar.jpg" alt="">
            <img src="Image/2.Dashboard/Work Team/Profile img.png" alt="">
        </div>
        <div>
            <div class="progress-ring" style="--percentage: 10;"></div>
            <span class="snpah">%10</span>
        </div>
        <div class="Active_Status"><span>Active</span></div>
        <div>25h 35m</div>
        <div>1/1/2025</div>
        <div>4000$</div>
    `
    new_project.appendChild(projectData)

    const minProjectsContainer = document.createElement("div")
    minProjectsContainer.className = "min-projects-container"
    minProjectsContainer.innerHTML = `
        <div class="min_project_Data">
            <div>Num.</div>
            <div>Section</div>
            <div>Assigned to</div>
            <div>% Complete	</div>
            <div>Status</div>
            <div>Hours</div>
            <div>Due Date</div>
            <div><button class="add_min add_min${add_minCounter++}">+ Add </button></div>
        </div>
        <div class="min-projects"></div>
    `
    new_project.appendChild(minProjectsContainer)

    projectData.addEventListener("click", () => showHideMinProjects(new_project_id))

    const add_min_button = new_project.querySelector(`.add_min`)
    add_min_button.addEventListener("click", () => addMinProject(new_project_id))

    container_Project_all.appendChild(new_project)
}

const showHideMinProjects = (projectId) => {
    const project = document.querySelector(`#big_Project${projectId}`)
    const rIcon = project.querySelector(".fa-caret-right")
    const dIcon = project.querySelector(".fa-caret-down")
    const minProjectsContainer = project.querySelector(`#big_Project${projectId} .min-projects-container`)
    if (project.classList.contains("hidden")) {
        minProjectsContainer.style.display = "block"
        dIcon.style.display = "block"
        rIcon.style.display = "none"
    } else {
        minProjectsContainer.style.display = "none"
        dIcon.style.display = "none"
        rIcon.style.display = "block"
    }
    project.classList.toggle("hidden")
}

const addMinProject = (projectId) => {
    const projectMinProjectContainer = document.querySelector(`#big_Project${projectId} .min-projects`)
    const minProjectId = projectMinProjectContainer.children.length + 1
    const minProject = document.createElement("div")
    minProject.classList.add("min_project")
    minProject.innerHTML = `
        <div>${minProjectId}.</div>
        <div class="customer_name">Settings Page</div>
        <div>
            <img src="/Image/2.Dashboard/Work Team/Omar.jpg" alt="">
        </div>
        <div>
            <div class="progress-ringg" style="--percentage: 10;"></div>
            <span class="snpah">%10</span>
        </div>                    <div class="Active_Status"><span>Active</span></div>
        <div>2h 35m</div>
        <div>1/1/2025</div>
        <div>200$</div>
    `
    projectMinProjectContainer.appendChild(minProject)
}