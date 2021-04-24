/*Il computer deve generare 16 numeri casuali tra 1 e 100.
    I numeri non possono essere duplicati.*/

    var minNo = 6;
    var maxNo = 10;
    var maxLength = maxNo - minNo;
    var gameOver = false

    var computerList = [];
    while(computerList.length < minNo) {
        var generatedNo = Math.floor(Math.random() * maxNo) + 1;
            if(computerList.indexOf(generatedNo) === -1){
                computerList.push(generatedNo)
            }
    }
    console.log(computerList)

/*In seguito deve chiedere all’utente (100 - 16) volte di inserire
un numero alla volta, sempre compreso tra 1 e 100.    
L’utente non può inserire più volte lo stesso numero.*/

    var userList = [];
    while(gameOver === false) {
        var inputNo = parseInt(prompt("Inserisci numeri da " + minNo + " a " + maxNo + ". (" + userList.length + ")"))

            if(inputNo > maxNo) {
            alert("Il limite è " + maxNo);

            } else if ( isNaN(inputNo)) {
                alert("Ehi!Non è un numero");

            } else if (userList.indexOf(inputNo) !== -1) {
                alert("Hai già inserito questo numero");     

                 /*Se il numero è presente nella lista dei numeri generati, la partita termina, 
                altrimenti si continua chiedendo all’utente un altro numero.*/  

            } else if (computerList.indexOf(inputNo) !== -1){
                var gameOver = true
                alert("Hai perso!");          

            } else {userList.push(inputNo)};

               /*La partita termina quando il giocatore inserisce un numero “vietato” 
              o raggiunge il numero massimo possibile di numeri consentiti.*/

        if(userList.length === maxLength){
            var gameOver = true;
            alert("Hai vinto!")
        };
    }

               
/*Al termine della partita il software deve comunicare il punteggio, 
cioè il numero di volte che l’utente ha inserito un numero consentito.*/
    console.log(userList)
    console.log("L'utente ha inserito (" + userList.length + ") numeri consentiti")

   
    
   
    
    








