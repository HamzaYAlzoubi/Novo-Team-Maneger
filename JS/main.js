/* Start Hedaer */
const headerimg = document.querySelector(".Profile_img");
const img_setting = document.querySelector(".img_setting");

const notification = document.querySelector(".notification");
const notification_box = document.querySelector(".notification_box");

const Settings_close = document.querySelector(".Settings_Box .fa-x")
const Settings_btn = document.querySelector(".Settings_btn");
const Settings_Page = document.querySelector(".Settings_Box");

// img_setting show on click
headerimg.onclick = function (event) {
  notification_box.style.display = 'none';  
  if (img_setting.style.display === 'none') {
    img_setting.style.display = 'flex';
    event.stopPropagation();
  }
};

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
// on & off gettings page.
Settings_btn.onclick = function () {
  Settings_Page.style.display = 'block';
  if (sidebar.style.display === 'block') {
    sidebar.style.display = 'none';
  }
};
Settings_close.onclick = function () {
  Settings_Page.style.display = 'none';
  sidebar.style.display = 'block';
};
/* End Hedaer */

/* Start Sidebar */
const sidebarbtn = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");
const menuItems = document.querySelectorAll('.menu-item');
const SBsettings = document.querySelectorAll(".SBsettings");

// window.onscroll = function () {
//   sidebar.style.display = 'none';
// }
sidebarbtn.onclick = function (event) {
  if (sidebar.style.display === 'none') {
    sidebar.style.display = 'block';
    event.stopPropagation();
  } else {
    sidebar.style.display = 'none';
  }
};
SBsettings.forEach(setting => {
  setting.addEventListener('click', () => {
    Settings_Page.style.display = 'block';
    sidebar.style.display = 'none';
  });
});

const Dashboard_page = document.querySelector(".Dashboard_page");
const Projects_page = document.querySelector(".Projects_page");
const Tasks_Page = document.querySelector(".Tasks_Page");
const Repoets_page = document.querySelector(".Repoets_page");
const Messages_page = document.querySelector(".Messages_page");
const Suggestions_page = document.querySelector(".Suggestions_page");

Dashboard_page.onclick = function () {
  window.location.href = "Dashboard.html"
}
Projects_page.onclick = function () {
  window.location.href = "Project.html"
}
Tasks_Page.onclick = function () {
  window.location.href = "Tasks.html"
}
Repoets_page.onclick = function () {
  window.location.href = "Repoets.html"
}
Messages_page.onclick = function () {
  window.location.href = "Messages.html"
}
Suggestions_page.onclick = function () {
  window.location.href = "Suggestions.html"
}
/* End Sidebar */