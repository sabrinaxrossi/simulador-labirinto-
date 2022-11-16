const prompt = require('prompt-sync');
///replace replaceall = substituir por outra 

// var text = 'ola mundo';
// text = text.replace('l', '!');
// text = text.replaceAll('o','@')
// console.log(text)

/// exemplo = substituio a , por nada 
// var lista = ['1', 5, 'sabrina', 'eu']
// lista = lista.toString();
// lista = lista.replaceAll(',', '');
// console.log(lista);

///Split = tramsforma texto em item 
// var texto = 'Murilo;Sabrina;Aninha;Gustavo';
// texto = texto.split(';')
// console.log(texto[0]);

///para colocar cor nos textos !!
// var clc = require("cli-color");
// console.log(clc.red("Text in red"));

// ///atividade1
// var clc = require("cli-color");
// console.log(clc.magenta("sabrina"));
// ///atividade2
// var clc = require("cli-color");
// console.log(clc.yellow.bgYellow("julinha"));
// ///atividade3
// var clc = require("cli-color");
// console.log(clc.black.bgBlue("kelly"));
// ///atividade4
// var clc = require("cli-color");
// console.log(clc.italic("bibi"));
// ///atividade5
// var clc = require("cli-color");
// console.log(clc.red.bold("cadu"));
// ///atividade6
// var nome = ['bibi, cadu, kelly, julinha, naju'];
// nome.toString()
// console.log(clc.white.bgGreen(nome));
// ///atividade7
// var nomes  = ['cadu', 'julia', 'kelly', 'bibi', 'naju', 'anna']
// for (i of nomes) {
//   if (i[0] == 'l' || i[0] == 'a'){
//     console.log(clc.bgBlue(i))
//   }else{
//     console.log(clc.bgRed(i))
//   }
// }

 var labirinto = [
 [22, 22, 22, 22, 22, 33, 11, 22, 22, 22, 22, 22, 22, 11, 11, 22, 22, 22, 22, 22],
   [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
 [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
   [22, 11, 88, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22, 22, 11, 11, 11, 11, 88, 11, 22],
  [22, 88, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
   [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
   [22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 88, 11, 11, 11, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
   [22, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
 [22, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 88, 11, 22],
  [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
  [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22]
 ]
// 22 nao posso andar
// 11 posso andar
// 33 posição atual
// 88 posição dos produtos
var clc = require("cli-color");

function colorir(text) {
  if (text == 22) {
    return clc.bgMagenta('  ');
  } else if (text == 11) {
    return clc.bgBlack('  ');
  } else if (text == 88) {
    return clc.bgYellow('☀☀');
  } else {
    return clc.bgGreen('👸');
  }
}

function mostrarLabirinto(){
console.clear()
for (let linha of labirinto ) {
  var linhaFormatada = [];
  for (let item of linha ) {
    linhaFormatada.push(colorir(item))
  }
  console.log(linhaFormatada.toString().replaceAll(',', ''));
}
}
var x = 0;
var y = 5;
function desce() {
  if(labirinto[x +1][y] !== 22) {
    labirinto[x][y] = 11
    x = x + 1;
    labirinto[x][y] = 33
    contador++;
  }
}

function sobe() {
  if(labirinto[x - 1][y] !== 22 && (x - 1) >= 0) {
    labirinto[x][y] = 11
    x = x - 1;
    labirinto[x][y] = 33
    contador++;
  }
}

function esquerda() {
  if(labirinto[x][y - 1] !== 22) {
    labirinto[x][y] = 11
    y = y - 1;
    labirinto[x][y] = 33
    contador++;
  }
}

function direita() {
  if(labirinto[x][y + 1] !== 22) {
    labirinto[x][y] = 11
    y = y + 1;
    labirinto[x][y] = 33
    contador++;
  }
}
var contador = 0;
while(true) {
  mostrarLabirinto();
  console.log("contador de passos", contador);
  var escolha = prompt('wasd');
  if(escolha == 'w') {
    sobe();
  }else if(escolha == 'a') {
    esquerda();
  }else if(escolha == 's') {
    desce();
  }else if(escolha == 'd') {
    direita();
  
  }
}
