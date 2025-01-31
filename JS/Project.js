let Add_Project = document.querySelector(".Add_Project");
let container_Project_all = document.querySelector(".container_Project_all")
let counterClassBig = 1;
let counter_big = 1;
let counterClassmin = 1;
let counter_min = 1;
let add_minCounter = 1;



Add_Project.onclick = function () { // اضافة مشروع كبير
    
    let form = document.createElement("form");
    form.className = "project_form";
    let form_Project_name = document.createElement("input");
    form_Project_name.className = "form_Project_name";
    form_Project_name.setAttribute("type" , "text");
    form_Project_name.setAttribute("placeholder" , "Project name");
    
    let form_Customer_name = document.createElement("input");
    form_Customer_name.className = "form_Customer_name";
    form_Customer_name.setAttribute("type" , "text");
    form_Customer_name.setAttribute("placeholder" , "Customer name");
    
    
    let form_Assigned_name = document.createElement("div");
    form_Assigned_name.className = "form_Assigned_name";
    
    // حبذا هون يا عمر لو تعمل لوب على كل صور الموظفين بقاعدة البيانات
    for (let i = 0; i < 4; i++) {
        let container = document.createElement("label");
        let Team_input = document.createElement("input");
        Team_input.setAttribute("type" , "radio");
        Team_input.setAttribute("name" , "teamMember");
        Team_input.style.display = "none"; // إخفاء الـ input
        
        let Team_img = document.createElement("img");
        Team_img.setAttribute("src" , "Image/2.Dashboard/Work Team/Profile img.png");
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
    form_Due_Date.setAttribute("type" , "date");
    
    
    let form_Net_Profit = document.createElement("input");
    form_Net_Profit.className = "form_Net_Profit";
    form_Net_Profit.setAttribute("type" , "number");
    form_Net_Profit.setAttribute("placeholder" , "Project Net Profit : 0.00$");
    
    
    let form_submit = document.createElement("input");
    form_submit.className = "form_submit";
    form_submit.setAttribute("type" , "submit");
    
    
    form.appendChild(form_Project_name)
    form.appendChild(form_Customer_name)
    form.appendChild(form_Assigned_name)
    form.appendChild(form_Due_Date)
    form.appendChild(form_Net_Profit)
    form.appendChild(form_submit)
    
    document.body.appendChild(form);


    form.onsubmit = function (e) {
        e.preventDefault() // مهم جدا جدا جدا : اذا بدك الفورم يبعث يا عمر امسح هذا السطر انا حاطه مشان ما تحدث الصفحة

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
            <div class="customer_name">${form_Project_name.value}
                <small>${form_Customer_name.value}</small>
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
            <div>${form_Due_Date.value}</div>
            <div>${form_Net_Profit.value}$</div>
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
        form.remove();
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
                <img src="Image/2.Dashboard/Work Team/Omar.jpg" alt="">
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
}