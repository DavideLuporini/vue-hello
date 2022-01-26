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

    },
    method: {
        defautImg() {
            if (!this.img)
                this.img = 'https://cdn.statically.io/img/www.sapevatelo.org/wp-content/uploads/2018/01/Sfondo-cell-hd.jpg';
        }
    },
})



defautImg = () => {
    if (!root.img) {
        root.img =
            "https://cdn.statically.io/img/www.sapevatelo.org/wp-content/uploads/2018/01/Sfondo-cell-hd.jpg";
        console.log("sium");
    }
};

setInterval(defautImg, 1000);


// ! AIUTOOOOOOO!!!!!!!!!!!!!!!!!!!