// We want to see some non-trivial Javascript code
// At a minimum, you should demonstrate a few simple uses of event-driven JavaScript for DOM manipulation
// You should use ES6 syntax throughout: e.g. don't use "var", use the modern tools (template literals, arrow functions).
// There should be no JavaScript errors in the browser console

// For more marks, we like to see a bit more complex use of JavaScript, perhaps some looping and/or more complex DOM manipulation.
// Accessing APIs is a great option if it fits with your project, or you can work with your own, local data.
// Your code should be DRY, if you have repeated code, consider refactoring as a function with arguments for example.
// We like to see what you can do. Be creative.


//all the code for index page
if (window.location.pathname === '/index.html') {

//the image takes the user to about page when clicked
const profileImg = document.querySelector('.profile');

profileImg.addEventListener('click', () => {
    window.location.href = 'about.html';
});


//allows the button to access specific pages
const viewCVButton = document.querySelector('.btns button:first-of-type');
const contactMeButton = document.querySelector('.btns button:last-of-type');

viewCVButton.addEventListener('click', () => {
  window.location.href = 'about.html';
});

contactMeButton.addEventListener('click', () => {
  window.location.href = 'contactus.html';
});
}

//all code for contact page
if (window.location.pathname === '/contactus.html') {
//i have added validate again just to make sure that the fileds are filled with accurate details.
const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const firstName = form.elements["firstname"].value;
  const lastName = form.elements["lastname"].value;
  const emailAddress = form.elements["emailaddress"].value;
  const message = form.elements["message"].value;
  
  if (firstName && lastName && emailAddress && message) {
    // All fields are filled in, display pop-up message
    alert("Thank you for your message! We will get back to you as soon as possible.");
    
    // Reset the form
    form.reset();
  } else {
    // One or more fields are not filled in, display error message
    alert("Please fill in all fields before submitting the form.");
  }
});
}

