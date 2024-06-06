export const getMessages = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/messages`)
        const data = await response.json()
        console.log(data);

        return data.data;
    } catch (error) {
        console.error(`Failed to fetch messages: ${error}`)
    }
}

export const getMessage = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/api/v1/messages/${id}`)
        const data = await response.json()
        console.log(data);

        return data;
    } catch (error) {
        console.error(`Failed to fetch message: ${error}`)
    }

}

export const postMessage = async (message) => {
    try {
        const response = await fetch('http://localhost:3000/api/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        })
        const data = await response.json()
        console.log(data.data);

        return data.data;
    } catch (error) {
        console.error(`Failed to post message: ${error}`)
    }
};
export const deleteMessage = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/api/v1/messages/${id}`, {
            method: 'DELETE'
        })
        const data = await response.json()
        console.log(data);

        return data;
    } catch (error) {
        console.error(`Failed to delete message: ${error}`)
    }
};
