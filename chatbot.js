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
    const lowerCaseInput = inputText.toLowerCase();
    let responseText = '';
  
    // Simple pattern matching to generate responses
    if (lowerCaseInput.includes('hello') || lowerCaseInput.includes('hi')) {
      responseText = 'Hello there! How can I assist you today?';
    } else if (lowerCaseInput.includes('how are you')) {
      responseText = 'I am just a computer program, so I do not have feelings like humans do.';
    } else if (lowerCaseInput.includes('what') && lowerCaseInput.includes('name')) {
      responseText = "My name is Chatbot. What's yours?";
    } else if (lowerCaseInput.includes('bye')) {
      responseText = 'Goodbye!';
    } else {
      // If no pattern is matched, generate a generic response
      const genericResponses = [
        "I'm sorry, I don't understand.",
        'Can you please rephrase that?',
        'I am not sure what you are trying to say.',
      ];
      const randomIndex = Math.floor(Math.random() * genericResponses.length);
      responseText = genericResponses[randomIndex];
    }
  
    return responseText;
  }

function displayMessage(sender, message) {
  const div = document.createElement('div');
  div.classList.add(sender);
  div.innerText = message;
  chatlog.appendChild(div);
}