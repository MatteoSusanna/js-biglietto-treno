const numeroKm = parseInt(prompt('Inserisci il numero di chilometri da fare'));
const eta = parseInt(prompt('Inserisci la tua età'));

const tot = numeroKm * 0.21;

let totminori = parseInt();



if (eta < 18){
    alert((totminori.toFixed(2)) = 'il prezzo sarà di ' + (tot - (tot * 20 / 100)) + ' € (sconto 20%)');

} else if (eta > 65) {
    alert ('il prezzo sarà di ' + (tot - (tot * 40 / 100)) + ' € (sconto 40%)');

} else{
    alert ('il prezzo sarà di ' + (tot.toFixed(2)) + ' €');
}