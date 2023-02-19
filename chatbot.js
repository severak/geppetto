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

function solveMathematicalQuestion(inputText) {
const pattern = /(\d+)\s*([-+*/])\s*(\d+)/;
const matches = inputText.match(pattern);

if (matches && matches.length === 4) {
  const firstNumber = parseInt(matches[1], 10);
  const operator = matches[2];
  const secondNumber = parseInt(matches[3], 10);

  let result;
  switch (operator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    case '/':
      result = firstNumber / secondNumber;
      break;
    default:
      throw new Error(`Invalid operator ${operator}.`);
  }

  return `The result is ${result}.`;
}

throw new Error('Invalid mathematical question.');
}

function answerAIClichéQuestions(inputText) {
    const question = inputText.toLowerCase();
  
    if (question.includes('what is ai') || question.includes('what is artificial intelligence')) {
      return 'Artificial intelligence, or AI, refers to the development of computer systems that can perform tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and language translation.';
    }
  
    if (question.includes('why is ai important')) {
      return 'AI is important because it has the potential to transform many industries, including healthcare, finance, transportation, and more. With AI, we can analyze and process large amounts of data more quickly and accurately, automate repetitive tasks, and develop new products and services that can improve our lives.';
    }
  
    if (question.includes('what are the types of ai')) {
      return 'There are three main types of AI: (1) Narrow or weak AI, which is designed to perform a specific task, (2) General or strong AI, which can perform any intellectual task that a human can, and (3) Artificial superintelligence, which is hypothetical and refers to an AI that surpasses human intelligence in every possible way.';
    }
  
    return null;
  }

function generateResponse(inputText) {
    const lowerCaseInput = inputText.toLowerCase();
    let responseText = '';
  
    // Simple pattern matching to generate responses
    if (lowerCaseInput.includes('hello') || lowerCaseInput.includes('hi') || lowerCaseInput.includes('hey')) {
      responseText = 'Hello there! How can I assist you today?';
    } else if (lowerCaseInput.includes('how are you')) {
      responseText = 'I am just a computer program, so I do not have feelings like humans do.';
    } else if (lowerCaseInput.includes('what') && lowerCaseInput.includes('name')) {
      responseText = "My name is Chatbot. What's yours?";
    } else if (lowerCaseInput.includes('how') && lowerCaseInput.includes('you') && lowerCaseInput.includes('doing')) {
      responseText = "I'm doing well, thank you for asking!";
    } else if (lowerCaseInput.includes('what') && lowerCaseInput.includes('time')) {
      const date = new Date();
      responseText = `The current time is ${date.toLocaleTimeString()}.`;
    } else if (lowerCaseInput.includes('what') && lowerCaseInput.includes('date')) {
      const date = new Date();
      responseText = `Today's date is ${date.toLocaleDateString()}.`;
    } else if (lowerCaseInput.includes('good') && lowerCaseInput.includes('job')) {
      responseText = 'Thank you, I try my best!';
    } else if (lowerCaseInput.includes('thank') || lowerCaseInput.includes('thanks')) {
      responseText = 'You are welcome!';
    } else if (lowerCaseInput.includes('bye') || lowerCaseInput.includes('goodbye')) {
      responseText = 'Goodbye!';
    } else if (lowerCaseInput.includes('+') || lowerCaseInput.includes('-') || lowerCaseInput.includes('*') || lowerCaseInput.includes('/')) {
        try {
          responseText = solveMathematicalQuestion(lowerCaseInput);
        } catch (error) {
          responseText = 'Sorry, I am not able to solve that mathematical question.';
        }
    } else {
        const clicheResponse = answerAIClichéQuestions(inputText);
        if (clicheResponse) {
            return clicheResponse;
        }



      // If no pattern is matched, generate a generic response
      const genericResponses = [
        "I'm sorry, I don't understand.",
        'Can you please rephrase that?',
        'I am not sure what you are trying to say.',
        'Please tell me more.',
        'That is interesting. Please go on.',
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