// Add your JavaScript to this file
document.addEventListener('DOMContentLoaded', () => {
    
    // Select the form, input, and message div
    // FIX: Using the class of the parent section and the 'form' tag to select the form.
    const form = document.querySelector('.newsletter form'); 
    
    // This selector is correct because the input field has id="email"
    const emailInput = document.querySelector('#email'); 
    
    // This selector is correct because the message div has class="message"
    const messageDiv = document.querySelector('.message'); 

    // Add submit event listener
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from reloading the page

        const email = emailInput.value.trim(); // Get input value

        if (email === '') {
            // Requirement: If no email is entered
            messageDiv.textContent = "Please enter a valid email address";
            // Optional: Setting color to make the error visible against a green background
            messageDiv.style.color = 'yellow'; 
        } else {
            // Requirement: If a valid email is entered
            messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
            // Optional: Resetting color and clearing the field
            messageDiv.style.color = 'white';
            emailInput.value = '';
        }
    });
});