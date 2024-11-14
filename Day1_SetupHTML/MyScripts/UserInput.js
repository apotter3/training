let email;
let fname;
let other;

document.getElementById('signUpbtn').onclick = function(){
    email = document.getElementById("email").value;
    fname = document.getElementById("fname").value;
    other = document.getElementById('Other').value;
    document.getElementById('myH1').innerHTML = 'Hello ' + fname;
} 

function ValidateEmail(email){
    const emailPattern = /^[a-zA-Z0-9._%+-]$/; //Defines a regex pattern which should be used to validate email addresses
    return emailPattern.test(email); //The function uses the “test” method of the regex object to check the submitted email address against the pattern
}

document.getElementById('SignUpForm').addEventListener('submit', function(event) {

    event.eventDefault(); // Prevent the form from submitting
    
    const emailInput = document.getElementById('email');
    
    const errorMessage = document.getElementById('error-message');
    
    if (ValidateEmail(emailInput.value)) {
    
        errorMessage.textContent = ''; // Clear any previous error message
        
        alert('Email is valid! Form submitted.');
    }

    else {

        errorMessage.textContent = 'Please enter a valid email address.';
        
    }
        
    });



//In some cases, you might want to use a more complex regex pattern to more closely
// comply with the RFC 5322 standard. Here’s an example of a more complex regex pattern you could use:
//   /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;