let Add_Project = document.querySelector(".Add_Project");
let container_Project_all = document.querySelector(".container_Project_all");


function setupProjectEvents(project) {  // الاظهار والاخفاء للمشروع الكبير
    let big_Project = project.querySelector(".big_Project");
    let min_project_Data = project.querySelector(".min_project_Data");
    let min_projects = project.querySelectorAll(".min_project");
    let right_icon = big_Project.querySelector(".fa-caret-right");
    let down_icon = big_Project.querySelector(".fa-caret-down");

    big_Project.onclick = function () {
        if (getComputedStyle(down_icon).display === "none") {
            right_icon.style.display = "none";
            down_icon.style.display = "block";
        } else {
            down_icon.style.display = "none";
            right_icon.style.display = "block";
        }

        if (min_project_Data.style.display === "none" || min_project_Data.style.display === "") {
            min_project_Data.style.display = "flex";
        } else {
            min_project_Data.style.display = "none";
        }

        min_projects.forEach(min_project => {
            if (min_project.style.display === "none" || min_project.style.display === "") {
                min_project.style.display = "flex";
            } else {
                min_project.style.display = "none";
            }
        });
    };
}

document.querySelectorAll(".project").forEach(setupProjectEvents);

let counterClassBig = 1;
let counter_big = 1;

let counterClassmin = 1;
let counter_min = 1;

let add_minCounter = 1;

Add_Project.onclick = function () { // اضافة مشروع كبير
    let new_project = document.createElement("div");
    new_project.className = "project";
    new_project.innerHTML = `
    <div class="big_Project big_Project${counterClassBig++}">
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
    </div>
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
        <div class=" min_project min_project${counterClassmin++}">
            <div>${counter_min}.</div>
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
        </div>
    `;

    container_Project_all.appendChild(new_project);
    setupProjectEvents(new_project);


    //: من هون شغل GPT لتحت:
    //:واغلبه تخبيص واشياء من فاهمها 


    let add_min_button = new_project.querySelector(`.add_min${add_minCounter - 1}`);  // التأكد من العنصر الأخير
    if (add_min_button) {
        add_min_button.addEventListener("click", function() {

            // إنشاء مشروع صغير جديد داخل نفس المشروع الكبير
            let new_min_project = document.createElement("div");
            new_min_project.className = `min_project min_project${counterClassmin++}`;
            new_min_project.innerHTML = `
                <div>2.</div>
                <div class="customer_name">Novo company</div>
                <div>
                    <img src="/Image/2.Dashboard/Work Team/Omar.jpg" alt="">
                </div>
                <div>%50</div>
                <div>Active</div>
                <div>1/1/2025</div>
                <div><Details></Details></div>
            `;
            
            // إضافة المشروع الصغير داخل المشروع الكبير
            let min_project_data = new_project.querySelector(".min_project_Data");
            if (min_project_data) {
                min_project_data.insertAdjacentElement("beforebegin", new_min_project);  // إضافة العنصر قبل min_project_Data
                console.log("تم إضافة المشروع الصغير بنجاح", new_min_project);  // طباعة للكونسول
            } else {
                console.log("لم يتم العثور على min_project_Data");
            }
        });
    }
};
