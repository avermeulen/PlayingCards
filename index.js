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

var dealCards = function(pack, user1Cards, user2Cards, user3Cards){

    for(var i=0;i<5;i++){
        for(var j=0;j<3;j++){
            //get card from the pack
            var card = pack.shift();
            if(j === 0){
                user1Cards.push(card)
            }
            else if (j === 1){
                user2Cards.push(card)
            }
            else if (j === 2){
                user3Cards.push(card);
            }
        }
    }
};

var user1 = [];
var user2 = [];
var user3 = [];

var packOfCards = createPackOfCards();

packOfCards = _.shuffle(packOfCards);

dealCards(packOfCards, user1, user2, user3);



showPack(packOfCards, ".pack")

showPack(user1, ".user1Pack");
showPack(user2, ".user2Pack");
showPack(user3, ".user3Pack");

/*
var a = getAces(packOfCards)
console.log(a);
//showPack(, ".pack2");
showPack(getAces(packOfCards), ".pack3")
*/


//


/*

*/


// which variable contains all the cards???
