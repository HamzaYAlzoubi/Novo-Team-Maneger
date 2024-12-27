/* Start Hedaer */
let headerimg = document.querySelector(".Profile_img");
let img_setting = document.querySelector(".img_setting");

// img_setting show on click
headerimg.onclick = function (event) {
    notification_box.style.display = 'none';  
    if (img_setting.style.display === 'none') {
        img_setting.style.display = 'flex';
        event.stopPropagation();
    }
};
let = notification = document.querySelector(".notification");
let = notification_box = document.querySelector(".notification_box");

// notification show on click
notification.onclick = function (event) {
    img_setting.style.display = 'none';    
    if (notification_box.style.display === 'none') {
        notification_box.style.display = 'flex';
        event.stopPropagation();
    }
};
// close notification & img_setting.
document.onclick = function() {
    notification_box.style.display = 'none';  
    img_setting.style.display = 'none';  
}
// Logout
let Logout = document.querySelector(".Logout");

Logout.onclick = function () {
    location.href = "http://127.0.0.1:5500/login.html"
}
/* End Hedaer */

/* Start Dashboard Page */

/* Start Timer*/
let btn_stop_start = document.querySelector(".stop_start");
let btn_stop_start_icon = document.querySelector(".stop_start i");

btn_stop_start.onclick = function () {
    if (btn_stop_start_icon.classList.contains("fa-pause")) {
        btn_stop_start_icon.classList.remove("fa-pause");
        btn_stop_start_icon.classList.add("fa-play");
    }else {
        btn_stop_start_icon.classList.remove("fa-play");
        btn_stop_start_icon.classList.add("fa-pause");
    }
}
/* End Timer*/

/* Start Projects*/
        // بيانات المشاريع
    const projects = [
      { name: ':مشروع الاول', progress: 75, dailyProgress: 5, dailyTarget: 10 },
      { name: ':المشروع الثاني', progress: 40, dailyProgress: 3, dailyTarget: 8 },
      { name: ':المشروع الثالث', progress: 90, dailyProgress: 7, dailyTarget: 7 }
    ];

    const projectContainer = document.getElementById('projects');
    projects.forEach(project => {
  const projectElement = document.createElement('div');
  projectElement.className = 'project';

  const projectName = document.createElement('h4');
  projectName.textContent = project.name;
  projectElement.appendChild(projectName);

  const progressBarContainer = document.createElement('div');
  progressBarContainer.className = 'progress-bar-container';
  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';
  progressBar.style.width = `${project.progress}%`;

  // تغيير اللون بناءً على نسبة الإنجاز
  if (project.progress < 50) {
    progressBar.style.backgroundColor = '#ff4d4d'; // أحمر
  } else if (project.progress < 80) {
    progressBar.style.backgroundColor = '#ffc107'; // أصفر
  } else {
    progressBar.style.backgroundColor = '#4caf50'; // أخضر
  }

  progressBarContainer.appendChild(progressBar);
  projectElement.appendChild(progressBarContainer);

  const dailyProgress = document.createElement('div');
  dailyProgress.className = 'daily-progress';
  dailyProgress.innerHTML = `
    <span>الهدف اليومي: ${project.dailyTarget} ساعة</span>
    <span>ﺇنجازك اليوم: ${project.dailyProgress} ساعة</span>
  `;
  projectElement.appendChild(dailyProgress);

  projectContainer.appendChild(projectElement);
});
/* End Projects*/

/* End Dashboard Page */

/* Start Settings Page */
let Settings_close = document.querySelector("#Settings_Box .fa-x")
let Settings_btn = document.querySelector(".Settings_btn");
let Settings_Page = document.querySelector("#Settings_Box");

Settings_btn.onclick = function () {
    img_setting.style.display = 'none';  
    console.log(Settings_Page);
    Settings_Page.style.display = 'block';
};
Settings_close.onclick = function () {
    Settings_Page.style.display = 'none';  ;
};

/* End Settings Page */


