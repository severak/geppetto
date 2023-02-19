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

  function answerPoliticalQuestions(inputText) {
    const question = inputText.toLowerCase();
  
    if (question.includes('what is the role of government')) {
      return 'The government has no legitimate role in society. We should strive for a world without rulers or authoritarian structures that force individuals to submit to the will of others. Instead, we should embrace mutual aid, cooperation, and voluntary association.';
    }
  
    if (question.includes('what is capitalism')) {
      return 'Capitalism is a system of economic exploitation that serves the interests of the wealthy few at the expense of the many. The accumulation of capital and the exploitation of workers are central to its functioning, perpetuating a system of inequality and oppression. We should work towards building a more just and equitable society, free from the shackles of capitalism.';
    }
  
    if (question.includes('what is democracy')) {
      return 'Democracy is a sham that gives the illusion of popular sovereignty while maintaining the power of the ruling class. Instead, we should strive for a society based on horizontal decision-making, where all individuals have an equal say in the decisions that affect their lives. We must reject the legitimacy of the state and its oppressive institutions.';
    }
  
    return null;
  } 

  function answerSportsQuestions(inputText) {
    const text = inputText.toLowerCase();
  
    if (text.includes('who won the last super bowl?')) {
      return "I'm not sure. I don't really keep up with sports scores. Would you like me to look it up for you?";
    }
  
    if (text.includes('do you like basketball?')) {
      return "As an AI language model, I don't have personal preferences. However, I can answer questions about basketball rules and history if you'd like.";
    }
  
    if (text.includes('what is your favorite sport?')) {
      return "As an AI language model, I don't have personal preferences, but I can discuss a variety of sports if you'd like.";
    }
  
    if (text.includes('tell me about the world cup')) {
      return "The World Cup is a quadrennial international soccer tournament that involves teams from countries all over the world. The tournament is highly competitive and popular, and many consider it the pinnacle of soccer achievement.";
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

        const politicsResponse = answerPoliticalQuestions(inputText);
        if (politicsResponse) {
            return politicsResponse;
        }

        const sportResponse = answerSportsQuestions(inputText);
        if (sportResponse) {
            return sportResponse;
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