const form = document.querySelector('.form-container');
const submitButton = document.getElementById('get-in-touch-button');

function checkUpperCase(event) {
    const email = document.getElementById('email').value;
    const errorMesssageDiv = document.querySelector('.error-message-div')

    if (errorMesssageDiv.querySelector('p') !== null) {
        const paragraph = errorMesssageDiv.querySelector('p');
        errorMesssageDiv.removeChild(paragraph);
        errorMesssageDiv.style.display = 'none';
        submitButton.style.marginTop = '40px';
    }

    if (email.toLowerCase() !== email) {
        const errorMessage = 'Please make sure that your emails do not contain any upper case characters';
        errorMesssageDiv.appendChild(document.createElement('p')).innerHTML = errorMessage;
        errorMesssageDiv.style.display = 'flex';
        submitButton.style.marginTop = '70px';
        event.preventDefault()
    }
  return true;
}

form.addEventListener('submit', checkUpperCase);
