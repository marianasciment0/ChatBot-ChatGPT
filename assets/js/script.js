

const apiKey = "CHAVE-API"

function sendMessage() {
    var message = document.getElementById('message-input');

    // Limpa a formatação do campo de mensagem
    message.style.border = 'none';

    var status = document.getElementById('status');
    var btnSubmit = document.getElementById('btn-submit');

    status.style.display = 'block';
    status.innerHTML = 'Loading...';
    btnSubmit.disabled = true;
    btnSubmit.style.cursor = 'not-allowed';
    message.disabled = true;

    fetch("https://api.openai.com/v1/completions", {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: message.value,
            max_tokens: 2048,
            temperature: 0.5
        })
    })
    .then((response) => response.json())
    .then((response) => {
        let r = response.choices[0]['text'];
        status.style.display = 'none';
        
        //Restrição das frases
        if (checkProgrammingKeywords(message.value)) {
            showHistoric(message.value, r);
        } else {
            showHistoric(message.value, "Infelizmente não sei conversar sobre isso. Mas eu posso te ajudar com assuntos relacionados a programação");
        }
    })
    .catch((e) => {
        console.log('Error ->', e);
    })
    .finally(() => {
        btnSubmit.disabled = false;
        btnSubmit.style.cursor = 'pointer';
        message.disabled = false;
    })
}

function showHistoric(message, response) {
    var historic = document.getElementById('historic');

    // My messages
    var boxMyMessage = document.createElement('div');
    boxMyMessage.className = 'box-my-message';

    var myMessage = document.createElement('p');
    myMessage.className = 'my-message';
    myMessage.innerHTML = message;

    boxMyMessage.appendChild(myMessage);
    historic.appendChild(boxMyMessage);

    // Response messages
    var boxResponseMessage = document.createElement('div');
    boxResponseMessage.className = 'box-response-message';

    var chatResponse = document.createElement('p');
    chatResponse.className = 'chat-message';
    chatResponse.innerHTML = response;

    boxResponseMessage.appendChild(chatResponse);
    historic.appendChild(boxResponseMessage);

    historic.scrollTop = historic.scrollHeight;
}

function checkProgrammingKeywords(message) {
    // Lista de palavras-chave relacionadas à programação.
    const programmingKeywords = ['programa', 'código', 'desenvolvimento', 'javascript', 'python', 'java', 'html', 'css', 'algoritmo', 'lógica'];

    // Verifica se a mensagem contém pelo menos uma palavra-chave de programação.
    return programmingKeywords.some(keyword => message.toLowerCase().includes(keyword.toLowerCase()));
}

