//Suggesiton box
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
  
  