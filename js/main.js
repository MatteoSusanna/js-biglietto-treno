const numeroKm = parseInt(prompt('Inserisci il numero di chilometri da fare'));
const eta = parseInt(prompt('Inserisci la tua età'));

const tot = numeroKm * 0.21;

let totminori;
let totover;


if (eta < 18){
    totminori = ((tot - (tot * 20 / 100)));
    alert('il prezzo sarà di ' + totminori.toFixed(2) + ' € (sconto 20%)' )

} else if (eta > 65) {
    totover = ((tot - (tot * 40 / 100)));
    alert('il prezzo sarà di ' + totover.toFixed(2) + ' € (sconto 40%)' )

} else{
    alert ('il prezzo sarà di ' + (tot.toFixed(2)) + ' €');
}