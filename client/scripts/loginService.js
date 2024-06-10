import {FormValidator} from "./formValidator.js";


const loginForm = document.querySelector('#loginForm');

const formValidator = new FormValidator(loginForm);

formValidator.addValidator({
    // name verwijst naar het name attribute op het formulierveld
    name: 'username', // method ontvangt het inputveld als argument en returnt true of false
    method: (field) => field.value.trim().length > 0,
    message: 'Gebruikersnaam is een verplicht veld en werd niet ingevuld'
})
formValidator.addValidator({
    name: 'password',
    method: (field) => field.value.trim().length > 0,
    message: 'Wachtwoord is een verplicht veld en werd niet ingevuld'
})


loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    if (formValidator.validate()) {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/users?username=${username}&password=${password}`);

            if (response.ok) {
                window.location.href = '../beheersmodule/';
            } else {
                console.error('Failed to login: ', response.status);
            }
        } catch (error) {
            console.error('Failed to login: ', error);
        }
    }

    // try {
    //     const response = await fetch(`http://localhost:3000/api/v1/users?username=${username}&password=${password}`);
    //
    //     if (response.ok) {
    //         window.location.href = '../beheersmodule/';
    //     } else {
    //         console.error('Failed to login: ', response.status);
    //     }
    // } catch (error) {
    //     console.error('Failed to login: ', error);
    // }
})
;