const numeroKm = parseInt(prompt('Inserisci il numero di chilometri da fare'));
const eta = parseInt(prompt('Inserisci la tua età'));

const tot = numeroKm * 0.21;


if (eta < 18){
    alert ('il prezzo sarà di ' + (tot) - (numeroKm * 20 / 100) + ' €');

} else if (eta > 65) {
    alert ('il prezzo sarà di ' + (tot) - (numeroKm * 40 / 100) + ' €');

} else
    alert ('il prezzo sarà di ' + (tot) + ' €');