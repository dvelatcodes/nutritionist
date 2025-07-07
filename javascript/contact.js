let form = document.querySelector('form');
let firstName = document.querySelector('.name');
let email = document.querySelector('.email');
let phone = document.querySelector('.phone');
let message = document.querySelector('.message');
let btn = document.querySelector('.btn');
let nameMessage = document.querySelector('.nameMessage');
let emailMessage = document.querySelector('.emailMessage');
let phoneMessage = document.querySelector('.phoneMessage');
let bigMessage = document.querySelector('.bigMessage');


// firstName validation
firstName.addEventListener('keyup', () => {
    if (firstName.value.match(/[!-@]|[\[-`]|[{-~}]|\s/) || firstName.value.length < 3 || firstName.value.length > 35) {
        nameMessage.style.color = 'red';
        nameMessage.style.display = 'block';
        nameMessage.innerHTML = 'wrong format';
    }
    else if (firstName.value.match(/[a-zA-Z]/) && firstName.value.match(/\S/)) {
        nameMessage.style.color = 'rgb(116, 255, 47)';
        nameMessage.style.display = 'block';
        nameMessage.innerHTML = 'valid format';
    }
})



// message validation
message.addEventListener('keyup', () => {
    if (message.value.match(/[!-@]|[\[-`]|[{-~}]|\s/) || message.value.length < 3 || message.value.length > 250) {
        bigMessage.style.color = 'red';
        bigMessage.style.display = 'block';
        bigMessage.innerHTML = 'wrong format';
    }
    else if (message.value.match(/[a-zA-Z]/) && message.value.match(/\S/)) {
        bigMessage.style.color = 'rgb(116, 255, 47)';
        bigMessage.style.display = 'block';
        bigMessage.innerHTML = 'valid format';
    }
})



// email validation
email.addEventListener('keyup', () => {
    if (email.value.match(/[!-\-]|[:-?]|[\[-`]|[{-~}]|\s|\//) || !email.value.match(/[a-zA-Z][0-9]*@gmail.com/)) {
        emailMessage.style.color = 'red';
        emailMessage.style.display = 'block';
        emailMessage.innerHTML = 'wrong format';
    }
    else if (email.value.match(/[a-zA-Z]+[0-9]*@gmail.com/) && email.value.match(/\S/)) {
        emailMessage.style.color = 'rgb(116, 255, 47)';
        emailMessage.style.display = 'block';
        emailMessage.innerHTML = 'valid format';
    }
})



// phone number validation
phone.addEventListener('keyup', () => {
    if (phone.value.match(/[!-\/]|[:-}]|\s/) || phone.value.length < 11 || phone.value.length > 12) {
        phoneMessage.style.color = 'red';
        phoneMessage.style.display = 'block';
        phoneMessage.innerHTML = 'wrong format';
    }
    else if (phone.value.match(/[0-9]/) && phone.value.match(/\S/)) {
        phoneMessage.style.color = 'rgb(116, 255, 47)';
        phoneMessage.style.display = 'block';
        phoneMessage.innerHTML = 'valid format';
    }
})



btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (emailMessage.innerHTML === 'valid format' && nameMessage.innerHTML === 'valid format' && bigMessage.innerHTML === 'valid format' && phoneMessage.innerHTML === 'valid format') {
        alert('message submitted successfully');
        email.value = '';
        emailMessage.style.color = 'black';
        emailMessage.style.display = 'none';
        emailMessage.innerHTML = '';

        firstName.value = '';
        nameMessage.style.color = 'black';
        nameMessage.style.display = 'none';
        nameMessage.innerHTML = '';

        message.value = '';
        bigMessage.style.color = 'black';
        bigMessage.style.display = 'none';
        bigMessage.innerHTML = '';

        phone.value = '';
        phoneMessage.style.color = 'black';
        phoneMessage.style.display = 'none';
        phoneMessage.innerHTML = '';

    }
    else {
        alert('please enter valid characters');
    }
})



