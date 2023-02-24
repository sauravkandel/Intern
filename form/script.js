console.log('Validation script loaded.');

const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null){
        window.alert('Name Required')
        nameTextBox.style.backgroundColor = "black";
        passwordTextBox.style.backgroundColor = "black";
    }
    
    if(password.value.length <= 6){
        window.alert('Password must be longer than 6 characters')
    }

    if(password.value.length >= 15){
        window.alert('Password must be less than 15 character')
    }

    if(password.value === 'password'){
        window.alert('Password Cannot be password')
    }

    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
});

