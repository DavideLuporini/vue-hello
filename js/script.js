console.log("Vue Ok", Vue);

/* Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
 */


console.log('Vue ok', Vue);

const root = new Vue({
    el: '#root',
    data: {
        message: 'Image generator',
        subtitle: 'search your prefer images',
        img: '',
    }
})