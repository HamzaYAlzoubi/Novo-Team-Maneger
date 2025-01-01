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
document.addEventListener('DOMContentLoaded', function () {
  const profileImageInput = document.getElementById('profile-upload');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');
  const saveButton = document.querySelector('.buttons button:first-child');
  const cancelButton = document.querySelector('.buttons button:last-child');

  // Handle image upload
  profileImageInput.addEventListener('change', function (e) {
      const file = e.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onload = function () {
              const imageElement = document.querySelector('.profile-image img');
              imageElement.src = reader.result;
          };
          reader.readAsDataURL(file);
      }
  });

  // Validate form on save
  saveButton.addEventListener('click', function () {
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      const confirmPassword = confirmPasswordInput.value.trim();

      // Simple validation
      if (name === '') {
          alert('Please enter your name.');
          return;
      }

      if (email === '' || !validateEmail(email)) {
          alert('Please enter a valid email.');
          return;
      }

      if (password !== confirmPassword) {
          alert('Passwords do not match.');
          return;
      }

      if (password.length < 6) {
          alert('Password should be at least 6 characters.');
          return;
      }

      // If everything is valid, you can handle form submission
      // For now, just log the changes
      console.log('Profile updated with:', { name, email, password });
      alert('Changes saved successfully!');
  });

  // Cancel button (reset form)
  cancelButton.addEventListener('click', function () {
      // Reset form fields to initial values
      nameInput.value = 'Hamza';
      emailInput.value = 'janesemail@gmail.com';
      passwordInput.value = '********';
      confirmPasswordInput.value = '********';
  });

  // Helper function for email validation
  function validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(email);
  }
});
//
//
//
//
document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab-link');
  const contentSections = document.querySelectorAll('.content > div');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function (e) {
      e.preventDefault();
      
      // Hide all content sections
      contentSections.forEach(section => {
        section.style.display = 'none';
      });

      // Show the corresponding content section
      const targetId = this.getAttribute('href').substring(1); // Remove the '#' symbol
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.style.display = 'block';
      }
    });
  });


  
  // Optionally, show the first section by default when the page loads
  if (contentSections.length > 0) {
    contentSections[0].style.display = 'block';
  }
});
//suggesiton box
document.addEventListener('DOMContentLoaded', function () {
  const saveButton = document.getElementById('btn-save');
  const textArea = document.getElementById('text-area');
  const savedMessage = document.getElementById('msg-saved');

  // Check if there is saved text in localStorage when the page loads
  const savedText = localStorage.getItem('notes');
  if (savedText) {
    textArea.value = savedText;
  }

  saveButton.addEventListener('click', function () {
      const userText = textArea.value.trim();
      
      if (userText === '') {
          alert('Please enter some text.');
          return;
      }

      // Save the text to localStorage
      localStorage.setItem('notes', userText);

      console.log('Saved Text:', userText);

      savedMessage.style.display = 'block';

      setTimeout(() => {
          savedMessage.style.display = 'none';
      }, 3000);  // Message disappears after 3 seconds
  });
});


