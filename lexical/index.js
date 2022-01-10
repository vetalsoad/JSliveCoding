/* eslint-disable */

// LEX ENV
// {
//    'enviromentRecord': {
//      'message': 'Test'
//      'weight': 55,
//      'run': {
//        console log('RUN');
//      },
//      createMessenger:{...}
//      messanger:...
//      ....
//    },
//    'outherLexicalEnv': null
//
//    }


// createMessenger1 LEX ENV
// {
//    'enviromentRecord': {
//      'message': hello,
//      'sender': ...
//      'sendMessage': {
//    },
//    'outherLexicalEnv': global
//
//  }

// createMessenger2 LEX ENV
// {
//    'enviromentRecord': {
//      'message': 'Just learn it',
//      'sender': ...
//      'sendMessage': {
//    },
//    'outherLexicalEnv': global
//
//  }

// setMessage LEX ENV
// {
//    'enviromentRecord': {
//      'text': 'hello'
//     }
//    'outherLexicalEnv': createMessenger1
//
//  }
const message = "Test";
const weight = 55;

function run() {
  console.log("RUN");
}
// input: none
// output: obj
function createMessenger() {
  let message = "Just learn it";
  let sender = "Gromcode";

  // input: string
  // output: underfined
  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const messanger1 = createMessenger();
const messanger2 = createMessenger();
messanger1('hello');
run();