/* Start Hedaer */

const headerimg = document.querySelector(".Profile_img");
const img_setting = document.querySelector(".img_setting");

// img_setting show on click
headerimg.onclick = function (event) {
  notification_box.style.display = 'none';  
  if (img_setting.style.display === 'none') {
    img_setting.style.display = 'flex';
    event.stopPropagation();
  }
};
const notification = document.querySelector(".notification");
const notification_box = document.querySelector(".notification_box");

// notification show on click
notification.onclick = function (event) {
  img_setting.style.display = 'none';    
  if (notification_box.style.display === 'none') {
      notification_box.style.display = 'flex';
      event.stopPropagation();
    }
  };
const audio = document.getElementById('hiddenAudio');
// close notification & img_setting.
document.onclick = function() {
    notification_box.style.display = 'none';  
    img_setting.style.display = 'none';  
    audio.pause();
}

/* End Hedaer */


/* Start Sidebar */
const sidebarbtn = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");
const menuItems = document.querySelectorAll('.menu-item');
const SBsettings = document.querySelectorAll(".SBsettings");
const Settings_Page = document.querySelector("#Settings_Box");

sidebarbtn.onclick = function (event) {
  if (sidebar.style.display === 'none') {
    sidebar.style.display = 'block';
    event.stopPropagation();
  } else {
    sidebar.style.display = 'none';
  }
};

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});

SBsettings.forEach(setting => {
  setting.addEventListener('click', () => {
    Settings_Page.style.display = 'block';

    // Optionally, hide the sidebar when opening the settings page
    sidebar.style.display = 'none';
  });
});
/* End Sidebar */



/* Start Timer*/
document.addEventListener("DOMContentLoaded", () => {
const btn_stop_start = document.querySelector(".stop_start");
const btn_stop_start_icon = document.querySelector(".stop_start i");
const ptimer = document.querySelector("#Ptimer");
const rotate_left = document.querySelector(".fa-rotate-left");
const rotate_right = document.querySelector(".fa-rotate-right");

let intervalId = null; // للتحكم في التايمر
let isRunning = false; // لمعرفة حالة التايمر (يعمل أو متوقف)

function updateTimerDisplay(minutes, seconds) {
    const min = String(minutes).padStart(2, "0");
    const sec = String(seconds).padStart(2, "0");
    ptimer.innerHTML = `<span contenteditable="true">${min}</span>:<span contenteditable="true" class="s">${sec}</span>`;
}

function getTime() {
    const [minutes, seconds] = ptimer.textContent.split(":").map(Number);
    return { minutes, seconds };
}

function setTime(minutes, seconds) {
    updateTimerDisplay(minutes, seconds);
}

function startTimer() {
intervalId = setInterval(() => {
let { minutes, seconds } = getTime();

if (seconds === 0) {
  if (minutes === 0) {
      clearInterval(intervalId);
      isRunning = false;
      btn_stop_start_icon.classList.remove("fa-pause");
      btn_stop_start_icon.classList.add("fa-play");
      audio.play();  // لتشغيل الصوت
      return;
  }
  minutes--;
  seconds = 59;
} else {
    seconds--;
}
  setTime(minutes, seconds);
}, 1000);
}


btn_stop_start.onclick = function () {
if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
    btn_stop_start_icon.classList.remove("fa-pause");
    btn_stop_start_icon.classList.add("fa-play");
} else {
    isRunning = true;
    btn_stop_start_icon.classList.remove("fa-play");
    btn_stop_start_icon.classList.add("fa-pause");
    startTimer();
}
};

rotate_left.onclick = function () {
  let { minutes, seconds } = getTime();
  seconds += 10;
  if (seconds >= 60) {
      minutes += Math.floor(seconds / 60);
      seconds = seconds % 60;
  }
  setTime(minutes, seconds);
};

rotate_right.onclick = function () {
  let { minutes, seconds } = getTime();
  if (seconds < 10 && minutes > 0) {
      minutes--;
      seconds += 50;
  } else if (seconds >= 10) {
      seconds -= 10;
  } else {
      minutes = 0;
      seconds = 0;
  }
  setTime(minutes, seconds);
};

let { minutes, seconds } = getTime();
updateTimerDisplay(minutes || 0, seconds || 0);
});

/* End Timer*/


/* Start Projects Box*/
const projects = [
  
  { name: ':مشروع الاول', progress: 30, dailyProgress: 5, dailyTarget: 10 , deadliine: `${10} يوم` },
  { name: ':المشروع الثاني', progress: 60, dailyProgress: 3, dailyTarget: 8 , deadliine: `${20} يوم`},
  { name: ':المشروع الثالث', progress: 90, dailyProgress: 7, dailyTarget: 7 , deadliine: `${5} يوم` }
];
const projectContainer = document.getElementById('projects');
projects.forEach(project => {
  const projectElement = document.createElement('div');
  projectElement.className = 'project';
  
  const projectName = document.createElement('h4');
  projectName.textContent = project.name;
projectElement.appendChild(projectName);

const projectdeadliine = document.createElement('div');
projectdeadliine.className = "projectdeadliine";
projectdeadliine.textContent = `موعد التسليم: ${project.deadliine}`;
projectElement.appendChild(projectdeadliine);

const progressBarContainer = document.createElement('div');
progressBarContainer.className = 'progress-bar-container';
const progressBar = document.createElement('div');
progressBar.className = 'progress-bar';
progressBar.style.width = `${project.progress}%`;

// تغيير اللون بناءً على نسبة الإنجاز
if (project.progress < 31) {
  progressBar.style.backgroundColor = 'red'; // أحمر
} else if (project.progress < 61) {
  progressBar.style.backgroundColor = 'green'; // أصفر
} else {
  progressBar.style.backgroundColor = 'rgb(10, 218, 10)'; // أخضر
}

progressBarContainer.appendChild(progressBar);
projectElement.appendChild(progressBarContainer);

const dailyProgress = document.createElement('div');
dailyProgress.className = 'daily-progress';
dailyProgress.innerHTML = `
  <span>تم ﺇنجاز: %${project.progress} </span>
  <span>ﺇنجازك اليوم: ${project.dailyProgress} ساعة</span>
  `;
  projectElement.appendChild(dailyProgress);
  
projectContainer.appendChild(projectElement);
});

/* End Projects Box*/

/* Start Task Box*/
document.addEventListener('DOMContentLoaded', () => {
  const taskContainer = document.getElementById('taskContainer');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const initialTaskCount = taskContainer.querySelectorAll('.task').length;

  // Function to add a new task
  const addTask = () => {
      const newTask = document.createElement('div');
      newTask.className = 'task';
      newTask.setAttribute('draggable', 'true');
      newTask.setAttribute('data-id', Date.now());

      newTask.innerHTML = `
          <div class="checkbox-wrapper-59">
              <label class="switch">
                  <input type="checkbox">
                  <span class="slider"></span>
              </label>
          </div>
          <span contenteditable="true">New Task</span>
          <i class="fas fa-trash-alt delete-task"></i>
      `;

      taskContainer.appendChild(newTask);
      attachTaskEvents(newTask);
      updateScrollBehavior();
  };

  // Function to handle task deletion
  const deleteTask = (task) => {
      taskContainer.removeChild(task);
      updateScrollBehavior();
  };

  // Function to attach events to a task
  const attachTaskEvents = (task) => {
      const deleteIcon = task.querySelector('.delete-task');
      deleteIcon.addEventListener('click', () => deleteTask(task));

      task.addEventListener('dragstart', (e) => {
          e.dataTransfer.setData('text/plain', task.dataset.id);
          task.classList.add('dragging');
      });

      task.addEventListener('dragend', () => {
          task.classList.remove('dragging');
      });
  };

  // Update scroll behavior
  const updateScrollBehavior = () => {
      const taskCount = taskContainer.querySelectorAll('.task').length;

      if (taskCount > initialTaskCount) {
          taskContainer.style.overflowY = 'hidden';
          taskContainer.style.maxHeight = '400px';
      } else {
          taskContainer.style.overflowY = 'hidden';
          taskContainer.style.maxHeight = '';
      }
  };

  // Show scrollbar on hover
  taskContainer.addEventListener('mouseenter', () => {
      if (taskContainer.scrollHeight > taskContainer.clientHeight) {
          taskContainer.style.overflowY = 'auto';
      }
  });

  taskContainer.addEventListener('mouseleave', () => {
      taskContainer.style.overflowY = 'hidden';
  });

  // Drag-and-drop functionality remains unchanged
  taskContainer.addEventListener('dragover', (e) => {
      e.preventDefault();
      const draggingTask = document.querySelector('.dragging');
      const afterElement = getDragAfterElement(taskContainer, e.clientY);
      if (afterElement == null) {
          taskContainer.appendChild(draggingTask);
      } else {
          taskContainer.insertBefore(draggingTask, afterElement);
      }
  });

  // Helper function to find the position to insert dragged element
  const getDragAfterElement = (container, y) => {
      const draggableElements = [...container.querySelectorAll('.task:not(.dragging)')];

      return draggableElements.reduce((closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = y - box.top - box.height / 2;
          if (offset < 0 && offset > closest.offset) {
              return { offset: offset, element: child };
          } else {
              return closest;
          }
      }, { offset: Number.NEGATIVE_INFINITY }).element;
  };

  // Add click event to "Add Task" button
  addTaskBtn.addEventListener('click', addTask);

  // Attach events to existing tasks
  document.querySelectorAll('.task').forEach((task) => attachTaskEvents(task));
});

/* End Task Box*/

/* Start Settings Page */
const Settings_close = document.querySelector("#Settings_Box .fa-x")
const Settings_btn = document.querySelector(".Settings_btn");

Settings_btn.onclick = function () {
    img_setting.style.display = 'none';  
    Settings_Page.style.display = 'block';
};
Settings_close.onclick = function () {
    Settings_Page.style.display = 'none';  ;
};

/* End Settings Page */
