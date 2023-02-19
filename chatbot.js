const chatlog = document.getElementById('chatlog');
const userInput = document.getElementById('userinput');

function handleUserInput(event) {
  if (event.key === 'Enter') {
    const inputText = userInput.value;
    const responseText = generateResponse(inputText);
    displayMessage('user', inputText);
    displayMessage('bot', responseText);
    userInput.value = '';
  }
}

function generateResponse(inputText) {
    let responseText;
    switch (inputText.toLowerCase()) {
      case 'hello':
        responseText = 'Hello there!';
        break;
      case 'how are you?':
        responseText = 'I am doing well, thank you!';
        break;
      case 'what is your name?':
        responseText = "My name is Chatbot. What's yours?";
        break;
      default:
        responseText = "I'm sorry, I don't understand.";
    }
    return responseText;
  }

function displayMessage(sender, message) {
  const div = document.createElement('div');
  div.classList.add(sender);
  div.innerText = message;
  chatlog.appendChild(div);
}