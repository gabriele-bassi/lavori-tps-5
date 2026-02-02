// custom-repl.js
const repl = require('repl');

// Crea il REPL
const myRepl = repl.start({
  prompt: '🚀 > ',
  ignoreUndefined: true,
  useColors: true
});

// Aggiungi comandi personalizzati al contesto
myRepl.context.sayHello = function(name) {
  return `Ciao ${name}!`;
};

myRepl.context.version = process.version;

// Aggiungi un comando personalizzato
myRepl.defineCommand('saluta', {
  help: 'Saluta qualcuno',
  action(name) {
    console.log(`Ciao, ${name}!`);
    this.displayPrompt();
  }
});

// Event listener
myRepl.on('exit', () => {
  console.log('Arrivederci!');
  process.exit();
});
