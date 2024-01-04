// Function to handle form submission and display modal
function handleSubmit(form, scriptURL, modalID) {
    const modal = document.getElementById(modalID);
    const closeBtn = modal.querySelector('.close');
  
    form.addEventListener('submit', e => {
      e.preventDefault();
  
      const btnSubmit = form.querySelector('.btn-submit');
      btnSubmit.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...';
      btnSubmit.disabled = true;
  
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          if (response.ok) {
            modal.style.display = 'block';
            setTimeout(() => {
              modal.style.display = 'none';
              window.location.reload();
            }, 2000);
          } else {
            throw new Error('Network response was not ok.');
          }
        })
        .catch(error => {
          console.error('Error!', error.message);
          btnSubmit.innerHTML = 'Join Waitlist <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512", fill="currentColor"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>';
          btnSubmit.disabled = false;
        });
    });
  
    // Close the modal when clicking on the close button
    closeBtn.onclick = function () {
      modal.style.display = 'none';
    };
  
    // Close the modal when clicking outside the modal content
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };
  }
  
  // Usage for the waitlist form
  const waitlistForm = document.forms['waitlistform'];
  const waitlistScriptURL = 'https://script.google.com/macros/s/AKfycbzyuQOn1cv-qOiRjqH8xNN22G9CU5JP8zCVbykBPCmwx7P_TpLt1tG0IvqcV7VGQfc/exec';
  handleSubmit(waitlistForm, waitlistScriptURL, 'waitlistModal');
  
  // Usage for the contact form
  const contactForm = document.forms['contactform'];
  const contactScriptURL = 'https://script.google.com/macros/s/AKfycbykmXjU3AzpyB3AxR6AZf6qaWYVAaHOPaA98IVWA0mIwxFIz3rE9tJxOyxAnp4jDdewZg/exec';
  handleSubmit(contactForm, contactScriptURL, 'contactModal');
  