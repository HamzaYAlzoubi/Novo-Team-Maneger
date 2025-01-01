const addProjectButton = document.querySelector(".add_project");
let projectCounter = 1; // عداد المشاريع يبدأ من 1

const firstProject = document.querySelector("table thead.project");
firstProject.innerHTML= `            <thead class="project">
            <tr>
                <th>1</th>
                <th><i class="fa-solid fa-angle-right"></i><span contenteditable="true"> المشروع الاول</span></th>
                <th>
                    <img src="Image/2.Dashboard/Work Team/Mohamed S.jpg" alt="">
                    <img src="Image/2.Dashboard/Work Team/Amjad.jpg" alt="">
                    <img src="Image/2.Dashboard/Work Team/Omar.jpg" alt="">
                    <img src="Image/2.Dashboard/Work Team/Profile img.png" alt="">
                </th>
                <th><span class="status on-hold">قيد العمل</span></th>
                <th>
                    <div class="progress">
                        <div class="progress-bar"><span style="width: 60%;"></span></div>
                        60%
                    </div>
                </th>
                <th>1/1/2025</th>
                <th>400$</th>
                <th>
                    <button>تفاصيل</button>
                    <button>+add</button> <!-- تم إضافة الزر هنا -->
                </th>
            </tr>
        </thead>`;
const min_project = document.querySelector(".min_project");
min_project.innerHTML = `            <tbody class="min_project">
                <tr>
                    <td>1</td>
                    <td>بناء موقع للشركة<br><small>حمزة الزعبي</small></td>
                    <div>
                        <td>
                            <img src="Image/2.Dashboard/Work Team/Mohamed S.jpg" alt="">
                            <img src="Image/2.Dashboard/Work Team/Omar.jpg" alt="">
                        </td>
                    </div>
                    <td><span class="status active">مكتمل</span></td>
                    <td>
                        <div class="progress">
                            <div class="progress-bar"><span style="width: 60%;"></span></div>
                            60%
                        </div>
                    </td>
                    <td>16/08/23</td>
                    <td>100$</td>
                    <td><button>تفاصيل</button></td>
                </tr>
            </tbody>`;

    const project = document.querySelector("table .project");
    const iconP = document.querySelector("th i");
    project.onclick = function () {
        iconP.classList.toggle("fa-angle-down");
        if (min_project.style.display === "none") {
            min_project.style.display = "contents";
        }else{
            min_project.style.display = "none";
        }
    }
            

addProjectButton.onclick = function () {
    projectCounter++; // زيادة العداد لكل مشروع جديد

    // جلب المشروع الأول كنموذج
    if (!firstProject) return; // التحقق من وجود المشروع الأول

    // نسخ محتوى المشروع الأول
    const newProject = firstProject.cloneNode(true);

    // تحديث البيانات في المشروع الجديد
    newProject.querySelector("th:first-child").textContent = projectCounter; // تحديث الرقم
    newProject.querySelector("span[contenteditable]").textContent = "مشروع جديد"; // اسم المشروع
    newProject.querySelector(".progress-bar span").style.width = "0%"; // نسبة الإكمال
    newProject.querySelector(".progress").lastChild.nodeValue = " 0%"; // تحديث النص الخاص بالنسبة
    newProject.querySelector(".status").textContent = "قيد العمل"; // الحالة
    newProject.querySelector(".status").className = "status on-hold"; // تطبيق الكلاس للحالة
    newProject.querySelector("th:nth-child(6)").textContent = new Date().toLocaleDateString("ar-EG"); // التاريخ
    newProject.querySelector("th:nth-child(7)").textContent = "0$"; // صافي الربح

    // إضافة المشروع الجديد أسفل المشاريع الموجودة
    const projectTable = firstProject.parentElement;
    projectTable.appendChild(newProject);
    
    const iconnewProject = newProject.children[0].children[1].children[0]
    
    const min_project = document.querySelector(".min_project");
    newProject.onclick = function () {
        iconnewProject.classList.toggle("fa-angle-down");
        if (min_project.style.display === "none") {
            min_project.style.display = "contents";
        }else{
            min_project.style.display = "none";
        }
    }
};
