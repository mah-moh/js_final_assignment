const sendBtn = document.getElementById('send-btn');
const messageBody = document.getElementById('messages');
const input_field = document.getElementById('input-field');

sendBtn.addEventListener('click', () => {
    const inputValue = input_field.value;
    displayMessages(inputValue);
});

input_field.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        const inputValue = event.target.value;
        displayMessages(inputValue);
    }
});
  

function typeWriterEffect(messageElement, index, message) {
    if (index < message.length) {
      messageElement.textContent += message.charAt(index);
      index++;
      setTimeout(function () {
        typeWriterEffect(messageElement, index, message);
      }, 50);
    }
}

function getRandomMessage() {
    const messages = [
      "Please refrain from sending texts unless it involves pizza delivery!",
      "I'm on a texting diet. Please send chocolates instead",
      "Texting me? Don't expect a reply unless it's cat videos or memes",
      "Closed for spontaneous conversations. Only accepting memes.",
      "Enter at your own risk; giggles and memes may ensue!",
      "Nice to meet you!"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
}

function simulateTypingIndicator() {
    var typingMessage = document.createElement('p');
    typingMessage.textContent = "Borat is typing";
    typingMessage.classList.add('typing-indicator');
  
    messageBody.appendChild(typingMessage);

    
    var dots = 0;
    var intervalId = setInterval(function () {
        if (dots < 3) {
        typingMessage.textContent += '.';
        dots++;
        } else {
        typingMessage.textContent = "Borat is typing";
        dots = 0;
        }
    }, 500);
  
    setTimeout(function () {
        clearInterval(intervalId);
        messageBody.removeChild(typingMessage);
    }, 5000);
}

function sendRandomMessage() {
    const randomMessage = getRandomMessage();

    const randomMessageElement = document.createElement('div');
    randomMessageElement.classList.add('random-message');

    messageBody.appendChild(randomMessageElement);

    messageBody.insertBefore(randomMessageElement, messageBody.firstChild);

    setTimeout(function () {
        typeWriterEffect(randomMessageElement, 0, randomMessage);
    }, 100);
}
  


function displayMessages(inputValue) {

    if (inputValue.trim() !== '') {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = inputValue;

        messageBody.appendChild(messageElement);

        setTimeout(() => {
            messageElement.classList.add('show-message');
        }, 100);

        messageBody.insertBefore(messageElement, messageBody.firstChild);

        messageBody.appendChild(document.createElement('br'));


        document.getElementById('input-field').value = '';

        simulateTypingIndicator();

        setTimeout(() => {
            sendRandomMessage();
        }, 5000);
    }
}
