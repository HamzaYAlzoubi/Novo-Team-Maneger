import * as db from "./db.js";
import { v4 as uuid } from "uuid"

// upon quick research I found that ids shouldn't usually be connect in the front and 
// backend. But for our case it makes it a little easier and is good enough.
let Add_Project = document.querySelector(".Add_Project");
let container_Project_all = document.querySelector(".container_Project_all")
let counterClassBig = 1;
let counter_big = 1;
let counterClassmin = 1;
let counter_min = 1;
let add_minCounter = 1;


// Intial load
addEventListener("DOMContentLoaded", async () => { // fetches all projects once the dom loads
    // Loading time is bad but the problem seems to the site it self not the projects because they load immedatily
    // after eachother but the DOM takes time to be loaded. Further investigation is needed...
    try {
        const projects = await db.getProjects()

        projects.forEach(project => {
            const newProject = createProject(project.title, project.customer_name, project.date_due, project.profit)
            container_Project_all.appendChild(newProject)
        })
    } catch (error) {
        console.error(error)
        // alert(error)
    }
})


// Add Projects Button
Add_Project.onclick = async function () { // اضافة مشروع كبير

    // Create Submition Form
    let form = document.createElement("form");
    form.className = "project_form";

    let X = document.createElement("i");
    X.classList.add("fa-solid");
    X.classList.add("fa-x");
    X.classList.add("X");


    let form_Project_name = document.createElement("input");
    form_Project_name.className = "form_Project_name";
    form_Project_name.setAttribute("type", "text");
    form_Project_name.setAttribute("placeholder", "Project name");

    let form_Customer_name = document.createElement("input");
    form_Customer_name.className = "form_Customer_name";
    form_Customer_name.setAttribute("type", "text");
    form_Customer_name.setAttribute("placeholder", "Customer name");


    let form_Assigned_name = document.createElement("div");
    form_Assigned_name.className = "form_Assigned_name";

    // حبذا هون يا عمر لو تعمل لوب على كل صور الموظفين بقاعدة البيانات

    // هتأخذ وقت، لو هتكلموا على نفس قاعدة البيانات ممكن أعملها، لو هتبدلوا بعدين ما ليها داعي حاليا
    for (let i = 0; i < 4; i++) {
        let container = document.createElement("label");
        let Team_input = document.createElement("input");
        Team_input.setAttribute("type", "radio");
        Team_input.setAttribute("name", "teamMember");
        Team_input.style.display = "none"; // إخفاء الـ input

        let Team_img = document.createElement("img");
        Team_img.setAttribute("src", "Image/2.Dashboard/Work Team/Profile img.png");
        Team_img.style.cursor = "pointer";
        Team_img.style.border = "2px solid transparent";


        Team_img.addEventListener('click', () => {
            Team_input.checked = true;
            document.querySelectorAll('.form_Assigned_name img').forEach(img => {
                img.style.border = "2px solid transparent";
            });
            Team_img.style.border = "2px solid #4CAF50";
        });

        container.appendChild(Team_input);
        container.appendChild(Team_img);
        form_Assigned_name.appendChild(container);
    }

    let form_Due_Date = document.createElement("input");
    form_Due_Date.className = "form_Due_Date";
    form_Due_Date.setAttribute("type", "date");


    let form_Net_Profit = document.createElement("input");
    form_Net_Profit.className = "form_Net_Profit";
    form_Net_Profit.setAttribute("type", "number");
    form_Net_Profit.setAttribute("placeholder", "Project Net Profit : 0.00$");


    let form_submit = document.createElement("input");
    form_submit.className = "form_submit";
    form_submit.setAttribute("type", "submit");


    form.appendChild(X)
    form.appendChild(form_Project_name)
    form.appendChild(form_Customer_name)
    form.appendChild(form_Assigned_name)
    form.appendChild(form_Due_Date)
    form.appendChild(form_Net_Profit)
    form.appendChild(form_submit)

    document.body.appendChild(form);

    // Close Form Button
    form.addEventListener("click", function (e) {
        if (e.target.classList.contains("X")) {
            e.target.parentElement.remove();
        }
    });

    // Inseart into DB
    form.onsubmit = async function (e) {
        e.preventDefault()

        try {
            const new_project = createProject(form_Project_name.value, form_Customer_name.value, form_Due_Date.value, form_Net_Profit.value)

            await db.insertProject({
                id: new_project.id,
                title: form_Project_name.value,
                customer_name: form_Customer_name.value,
                date_due: form_Due_Date.value,
                profit: form_Net_Profit.value,
                sub_projects: []
            })

            container_Project_all.appendChild(new_project)

            form.remove();
        } catch (error) {
            console.error(error)
            // alert(error)
        }
    }

}

function createProject(title, customer, date, profit) {
    // Main Project
    const new_project_id = uuid()
    const new_project = document.createElement("div")
    new_project.id = `big_Project_${new_project_id}`
    new_project.className = "project";

    let X = document.createElement("i");
    X.classList.add("fa-solid");
    X.classList.add("fa-x");
    X.classList.add("X");

    const projectData = document.createElement("div")
    projectData.className = `big_Project big_Project_${new_project_id}`
    projectData.innerHTML = `
        <i class="fa-solid fa-caret-right"></i>
        <i class="fa-solid fa-caret-down"></i>
        <div>${counter_big++}.</div>
        <div class="customer_name">${title}
            <small>${customer}</small>
        </div>
        <div>
            <img src="Image/2.Dashboard/Work Team/Mohamed S.jpg" alt="">
            <img src="Image/2.Dashboard/Work Team/Amjad.jpg" alt="">
            <img src="Image/2.Dashboard/Work Team/Omar.jpg" alt="">
            <img src="Image/2.Dashboard/Work Team/Profile img.png" alt="">
        </div>
        <div>
            <div class="progress-ring" style="--percentage: 00;"></div>
            <span class="snpah">%0</span>
        </div>
        <div class="Active_Status"><span>Active</span></div>
        <div>0h 0m</div>
        <div>${date}</div>
        <div>${profit}$</div>
        <i class="fa-solid fa-x X"></i>
    `
    new_project.appendChild(projectData)

    // Sub Project
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

    // show/hide subproject button
    projectData.addEventListener("click", () => showHideMinProjects(new_project_id))
    // TODO: خلي الحالة الإفتراضية أنه يكون مخفي

    // Add Subproject Button
    const add_min_button = new_project.querySelector(`.add_min`)
    add_min_button.addEventListener("click", () => addMinProject(new_project_id))

    // Remove Project Button
    projectData.addEventListener("click", async function (e) {
        if (e.target.classList.contains("X")) {
            const targetProject = e.target.parentElement.parentElement
            try {
                const itemID = await db.removeProject(targetProject.id)
                if (itemID) document.getElementById(itemID).remove()
            } catch (error) {
                console.error(error)
            }
        }
    });

    return new_project
}


const showHideMinProjects = (projectId) => {


    const project = document.querySelector(`#big_Project_${projectId}`)
    const rIcon = project.querySelector(".fa-caret-right")
    const dIcon = project.querySelector(".fa-caret-down")
    const minProjectsContainer = project.querySelector(`#big_Project_${projectId} .min-projects-container`)
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
    const projectMinProjectContainer = document.querySelector(`#big_Project_${projectId} .min-projects`)
    const minProjectId = uuid()
    const minProjectNum = projectMinProjectContainer.children.length + 1
    const minProject = document.createElement("div")
    minProject.id = minProjectId
    minProject.classList.add("min_project");

    let form = document.createElement("form");
    form.className = "project_form";

    let X = document.createElement("i");
    X.classList.add("fa-solid");
    X.classList.add("fa-x");
    X.classList.add("X");


    let Section = document.createElement("input");
    Section.className = "form_Project_name";
    Section.setAttribute("type", "text");
    Section.setAttribute("placeholder", "Section");

    let form_Assigned_name = document.createElement("div");
    form_Assigned_name.className = "form_Assigned_name";

    // حبذا هون يا عمر لو تعمل لوب على كل صور الموظفين بقاعدة البيانات

    // هتأخذ وقت، لو هتكلموا على نفس قاعدة البيانات ممكن أعملها، لو هتبدلوا بعدين ما ليها داعي حاليا
    for (let i = 0; i < 4; i++) {
        let container = document.createElement("label");
        let Team_input = document.createElement("input");
        Team_input.setAttribute("type", "radio");
        Team_input.setAttribute("name", "teamMember");
        Team_input.style.display = "none";

        let Team_img = document.createElement("img");
        Team_img.setAttribute("src", "Image/2.Dashboard/Work Team/Profile img.png");
        Team_img.style.cursor = "pointer";
        Team_img.style.border = "2px solid transparent";


        Team_img.addEventListener('click', () => {
            Team_input.checked = true;
            document.querySelectorAll('.form_Assigned_name img').forEach(img => {
                img.style.border = "2px solid transparent";
            });
            Team_img.style.border = "2px solid #4CAF50";
        });

        container.appendChild(Team_input);
        container.appendChild(Team_img);
        form_Assigned_name.appendChild(container);
    }

    let form_Due_Date = document.createElement("input");
    form_Due_Date.className = "form_Due_Date";
    form_Due_Date.setAttribute("type", "date");


    let form_Net_Profit = document.createElement("input");
    form_Net_Profit.className = "form_Net_Profit";
    form_Net_Profit.setAttribute("type", "number");
    form_Net_Profit.setAttribute("placeholder", "Project Net Profit : 0.00$");


    let form_submit = document.createElement("input");
    form_submit.className = "form_submit";
    form_submit.setAttribute("type", "submit");


    form.appendChild(X)
    form.appendChild(Section)
    form.appendChild(form_Assigned_name)
    form.appendChild(form_Due_Date)
    form.appendChild(form_Net_Profit)
    form.appendChild(form_submit)

    document.body.appendChild(form);


    form.onsubmit = async function (e) {
        e.preventDefault()

        try {
            const currMainProject = await db.getProject(`big_Project_${projectId}`)
            console.log(projectId);
                
        
            const current_sub_projects = currMainProject.sub_projects

            current_sub_projects.push({
                id: minProjectId,
                customer_name: Section.value,
                date: form_Due_Date.value,
                profit: form_Net_Profit.value
            })

            console.log(current_sub_projects)
            // const newProject = await db.updateProject(`big_Project_${projectId}`, { sub_projects: current_sub_projects })
            // console.log(newProject)
        } catch (error) {
            console.log(error)
        }


        minProject.innerHTML = `
        <div>${minProjectNum}.</div>
        <div class="customer_name">${Section.value}</div>
        <div>
            <img src="Image/2.Dashboard/Work Team/Omar.jpg" alt="">
        </div>
        <div>
            <div class="progress-ringg" style="--percentage: 0;"></div>
            <span class="snpah">%0</span>
        </div>                    <div class="Active_Status"><span>Active</span></div>
        <div>0h 0m</div>
        <div>${form_Due_Date.value}</div>
        <div>${form_Net_Profit.value}$</div>
        <i class="fa-solid fa-x X"></i>
    `
        projectMinProjectContainer.appendChild(minProject)
        form.remove();
    }

}
