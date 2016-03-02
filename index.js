window.onerror = function(e){
    alert(e);
};

console.log("let's do cards!");

//this is going to take tooooo long...



var createPackOfCards = function(){

    var suites = ["♦", "♠", "♣", "♥"];

    // 12 cards - ?
    var cardTypes = "A,2,3,4,5,6,7,8,9,10,J,Q,K";
    var cardTypeList = cardTypes.split(",");
    console.log("There are " + cardTypeList.length + " different types of cards");
    // empty for the cards
    var packOfCards = [];

    for(var i=0;i<suites.length;i++){
        for(var j=0; j<cardTypeList.length;j++){
            //console.log();
            packOfCards.push({
                suite : suites[i],
                cardType : cardTypeList[j],
                color : function(){
                    if (this.suite === "♦" || this.suite === "♥"){
                        return "red";
                    }
                    return "black";
                }
            })
        }
    }

    return packOfCards;

}

var showPack = function(pack, locationClass){

    var packElem = document.querySelector(locationClass);
    pack.forEach(function(card){

        var cardElem = document.createElement('div');
        cardElem.innerHTML = card.suite + " " + card.cardType;
        cardElem.classList.add("card");
        //console.log(card.red);
        cardElem.classList.add(card.color());

        //card.classList.add
        packElem.appendChild(cardElem);

    });

}

//var packOfCards1 = createPackOfCards();
//var packOfCards2 = createPackOfCards();

//console.log(JSON.stringify(packOfCards));
//console.log(JSON.stringify(packOfCards1));
//console.log(JSON.stringify(packOfCards2));

//console.log(packOfCards.length);
//console.log("##############");

var getAces = function(pack){
    var aces = [];
    for(var k=0; k<pack.length;k++){
        if(pack[k].cardType === "A"){
            //console.log("we found an ace!")
            aces.push(pack[k]);
        }
    }
    return aces;
}

// show me all the aces
/*
var aces = getAces(packOfCards);

aces.forEach(function(card){
    console.log(card);
    console.log(card.color());
});

console.log(aces);
*/

var packOfCards = createPackOfCards();
showPack(packOfCards, ".pack")

var a = getAces(packOfCards)

console.log(a);

//showPack(, ".pack2");

showPack(getAces(packOfCards), ".pack3")



//


/*

*/


// which variable contains all the cards???
