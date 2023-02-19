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
  // Add your chatbot logic here to generate a response based on the user's input
  return "I'm sorry, I don't understand.";
}

function displayMessage(sender, message) {
  const div = document.createElement('div');
  div.classList.add(sender);
  div.innerText = message;
  chatlog.appendChild(div);
}