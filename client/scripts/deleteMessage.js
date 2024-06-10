import {deleteMessage} from "./messageService.js";

const messageForm = document.querySelector('#deleteForm');

messageForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    await deleteMessage(messageForm.elements.deleteMessage.value);
    console.log('deleted');

});