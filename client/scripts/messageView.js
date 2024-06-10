const createMessage = function(message) {
    const li = document.createElement('li');
    li.classList.add('message');
    li.id = `message-${message.ID}`
    li.innerHTML = `
    <h3>${message.titel} | ${message.ID}</h3>
        <p>${message.bericht}</p>
        <span>Gepost op ${message.datum} door ${message.voornaam} ${message.achternaam}</span>
    `;
    return li;

}
export const addMessageBox = (message, container) => container.appendChild(createMessage(message));