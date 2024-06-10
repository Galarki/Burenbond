import {getMessages, getMessage, postMessage, deleteMessage} from "./scripts/messageService.js";
import {FormValidator} from "./scripts/formValidator.js";
import {addMessageBox} from "./scripts/messageView.js";


// Hamburger menu
const container = document.querySelector('#messages');
const menu = document.querySelector('#menu');
const nav = document.querySelector('header nav')
const icon = document.querySelector('.icon');


menu.addEventListener('click', () => {
    menu.attributes['aria-expanded'].value = menu.attributes['aria-expanded'].value === 'true' ? 'false' : 'true';
    icon.attributes['aria-hidden'].value = icon.attributes['aria-hidden'].value !== 'true' ? 'true' : 'false.';
    nav.classList.toggle('show');
    nav.classList.toggle('nav-bar');

});





getMessages()
    .then(messages => messages.forEach(message => addMessageBox(message, container)))
    .catch(error => console.error(error));



//  Formvalidation
const form = document.querySelector('#myForm')
if (form) {
    const formValidator = new FormValidator(form);

    formValidator.addValidator({
        // name verwijst naar het name attribute op het formulierveld
        name: 'firstname', // method ontvangt het inputveld als argument en returnt true of false
        method: (field) => field.value.trim().length > 0,
        message: 'Voornaam is een verplicht veld en werd niet ingevuld'
    })
    formValidator.addValidator({
        name: 'name',
        method: (field) => field.value.trim().length > 0,
        message: 'Naam is een verplicht veld en werd niet ingevuld'
    })
    formValidator.addValidator({
        name: 'email',
        method: field => field.value.trim().match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
        message: 'Email moet volgens volgend voorbeeld: user@email.com'
    })
    formValidator.addValidator({
        name: 'message',
        method: (field) => field.value.trim().length > 0,
        message: 'Bericht is een verplicht veld en werd niet ingevuld'
    })
    formValidator.addValidator({
        name: 'privacy',
        method: (field) => field.value.trim().length > 0,
        message: 'Privacy is een verplicht veld en werd niet aangeduid'
    })

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (formValidator.validate()) {
            const message = {
                firstname: form.elements.firstname.value,
                name: form.elements.name.value,
                email: form.elements.email.value,
                message: form.elements.message.value,
                privacy: form.elements.privacy.checked
            }

            const data = await postMessage(message);
            console.log(data)
        }
    });
}


const btn = document.querySelector('#deleteMessage');

btn.addEventListener('click', async () => {
    console.log('deleted');
    console.log(data)

});