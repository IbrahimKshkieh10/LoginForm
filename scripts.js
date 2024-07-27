document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const textInput = document.getElementById('textInput').value;
    const emailInput = document.getElementById('emailInput').value;
    const numberInput = document.getElementById('numberInput').value;
    const passwordInput = document.getElementById('passwordInput').value;

   // multi email validation , used RE here to match the email format precisely
    const emails = emailInput.split(',').map(email => email.trim());
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmails = emails.every(email => emailPattern.test(email));

    if (!validEmails) {
        alert('Please enter valid email addresses.');
        return;
    }
    // Storing the inputs in an object
    const formData = {
        text: textInput,
        emails: emails,
        number: numberInput,
        password: passwordInput
    };

    console.log(formData);

    // Disabling text and email inputs
    document.getElementById('textInput').disabled = true;
    document.getElementById('emailInput').disabled = true;
});

// Toggle password visibility
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('passwordInput');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
});
