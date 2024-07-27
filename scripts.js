document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const textInput = document.getElementById('textInput').value;
    const emailInput = document.getElementById('emailInput').value;
    const numberInput = document.getElementById('numberInput').value;
    const passwordInput = document.getElementById('passwordInput').value;

    const formData = {
        text: textInput,
        email: emailInput,
        number: numberInput,
        password: passwordInput
    };

    console.log(formData);
});
