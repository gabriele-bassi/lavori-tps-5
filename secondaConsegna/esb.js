const EventEmitter = require('events');

class SistemaAllarmi extends EventEmitter {
  constructor() {
    super();
    this.allarmi = [];
  }
  
  impostaAllarme(nome, secondi) {
    const allarme = {
      tipo: 'allarme',
      nome,
      secondi,
      timestamp: Date.now()
    };
    
    this.allarmi.push(allarme);


    this.emit('allarme-impostato', allarme);


    setTimeout(() => {
      this.emit('allarme-suonato', allarme);
    }, secondi * 1000);
  }
  
  impostaPromemoria(messaggio, secondi) {
    const promemoria = {
      tipo: 'promemoria',
      messaggio,
      secondi,
      timestamp: Date.now()
    };


    this.emit('promemoria-impostato', promemoria);


    setTimeout(() => {
      this.emit('promemoria', promemoria);
    }, secondi * 1000);
  }
  
  getAllarmiAttivi() {
    return this.allarmi.length;
  }
}



const sistema = new SistemaAllarmi();


sistema.on('allarme-suonato', (a) => {
  console.log(`🔔 ALLARME: "${a.nome}" è suonato dopo ${a.secondi} secondi!`);
});


sistema.on('allarme-impostato', (a) => {
  console.log(`⏱️ Allarme impostato: "${a.nome}" (suona in ${a.secondi}s)`);
});


sistema.once('allarme-suonato', (a) => {
  console.log(`⭐ Primo allarme della sessione: "${a.nome}"`);
});


sistema.on('promemoria', (p) => {
  console.log(`📝 PROMEMORIA: ${p.messaggio}`);
});

sistema.on('promemoria-impostato', (p) => {
  console.log(`⏱️ Promemoria impostato: "${p.messaggio}" (tra ${p.secondi}s)`);
});


 sistema.impostaAllarme('Sveglia', 3);
sistema.impostaAllarme('Riunione', 5);
 sistema.impostaPromemoria('Bere acqua', 2);
