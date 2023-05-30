/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let number1 = 28;
let number2 = 20;
if (number1 > number2) {
  console.log(number1, "è maggiore di ", number2);
} else if (number2 > number1) {
  console.log(number2, "è maggiore di ", number1);
} else {
  console.log("sono uguali");
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let number = 6;
if (number !== 5) {
  console.log("not equal");
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
number = 15;
if (number % 5 === 0) {
  console.log("è divisibile per 5");
} else {
  console.log("non è divisibile");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
number1 = 17;
number2 = 9;
if (
  number1 === 8 ||
  number2 === 8 ||
  number1 + number2 === 8 ||
  number1 - number2 === 8 ||
  number2 - number1 === 8
) {
  console.log("l'algoritmo è verificato");
} else {
  console.log("errore l'agoritmo non è vericato");
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 54;
if (totalShoppingCart > 50) {
  console.log(
    "il costo totale è",
    totalShoppingCart,
    " la spedizione è gratis"
  );
} else {
  console.log(
    "il costo totale è ",
    totalShoppingCart + 10,
    " incuso costi di spedizione"
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
totalShoppingCart -= totalShoppingCart / 20;
if (totalShoppingCart > 50) {
  console.log("il costo è", totalShoppingCart, "la spedizione è gratis");
} else {
  console.log(
    "il costo totale è ",
    totalShoppingCart + 10,
    " incuso costi di spedizione"
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  // Alla fine mostra il risultato in console.  
*/
number1 = 6;
number2 = 5;
let number3 = 7;
if (number1 < number2 && number2 < number3) {
  console.log("l'ordine decresente è ", number3, number2, number1);
} else if (number2 < number1 && number1 < number3) {
  console.log("l'ordine decresente è ", number3, number1, number2);
} else if (number3 < number2 && number2 < number1) {
  console.log("l'ordine decresente è ", number1, number2, number3);
} else if (number1 < number2 && number2 < number3) {
  console.log("l'ordine decresente è ", number3, number2, number1);
} else if (number3 < number1 && number1 < number2) {
  console.log("l'ordine decresente è ", number2, number1, number3);
} else if (number1 < number3 && number3 < number2) {
  console.log("l'ordine decresente è ", number2, number3, number1);
}
/*

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let valore = 5;
if (typeof valore === "number") {
  console.log("si");
} else {
  console.log("no");
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

if (number1 % 2 === 0) {
  console.log(number1, "è pari");
} else {
  console.log(number1, "è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  */
let val = 3;
if (val < 10 && val > 5) {
  console.log("Meno di 10 maggiore di 5");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
  city: [],
};
me.city.push("toronto");
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop();

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
let numeri = [];
let numero;
for (var i = 0; i < 1; i++) {
  numeri.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
}
console.log(numeri);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
numeri.splice(9, 1, 100);
