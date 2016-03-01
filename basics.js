window.onerror = function(e){
    alert(e);
}

var createPack = function(){

    var cards = "A 2 3 4 5 6 7 8 9 10 J Q K";
    var suites = ["♣", "♠", "♦", "♥"];

    var packOfCards = [];
    var cardNumbers = cards.split(" ");

    for (var i = 0; i < cardNumbers.length; i++) {
        var card = cardNumbers[i];
        for (var j = 0; j < suites.length; j++) {
            var suite = suites[j];
            packOfCards.push({
                number : card,
                suite : suite
            });
        }
    }
    return packOfCards;
};

var dealCards = function(cards){

    var players = {
        "player 1" : [],
        "player 2" : [],
        "player 3" : []
    }
    var cardCount = 0;
    var packetSize = 5;
    var allCardCount = 0;
    for(var cardCount = 0; cardCount < packetSize; cardCount++){
        for (var playerKey in players) {
            if (players.hasOwnProperty(playerKey)) {
                var playerCards = players[playerKey];
                playerCards.push(cards[allCardCount]);
                //cardCount++;
                allCardCount++;
            }
        }
    };

    return {
        players : players,
        pack : cards.splice(allCardCount)
    }

}

//

var displayCards = function(pack, targetId){
    var packElem = document.querySelector(targetId);
    packElem.innerHTML = "";
    for(var i=0;i<pack.length;i++){
        //console.log(pack[i]);
        var card = pack[i];
        var div = document.createElement("div");
        div.classList.add("card");
        if (card.suite === "♦" || card.suite === "♥"){
            div.classList.add("red_card");
        }
        div.innerHTML = card.number + " " + card.suite;
        packElem.appendChild(div);

    }
}

document.addEventListener("DOMContentLoaded", function(event) {

    var pack = createPack();

    pack = _.shuffle(pack);

    displayCards(pack, '.pack');

    var results = dealCards(pack);
    displayCards(results.pack, '.pack');
    displayCards(results.players["player 1"], '.one');
    displayCards(results.players["player 2"], '.two');
    displayCards(results.players["player 3"], '.three');

    //console.log("DOM fully loaded and parsed");
    //pack.appendChild()

});

var checkForPackage = function(cards){
    var matches = {};

    for(var i = 0; i< cards.length;i++){
        var card = cards[i];
        if (!matches[card.number]){
            matches[card.number] = 1;
        }
        else{
            matches[card.number]++;
        }
    }

    var matchedResults = {};
    for(var match in matches){
        if (matches[match] > 1){
            matchedResults[match] = matches[match];
        }
    }

    return matchedResults;
}


/*
var assert = chai.assert;

describe("Cards", function(){

    it("should find a package for 7", function(){

        var cards = [{
            number : 7,
            suite : "hearts"
        },
        {
            number : 7,
            suite : "spades"
        },
        {
            number : 3
        },
        {
            number : 7
        },
        {
            number : "A"
        }
        ];

        var result = checkForPackage(cards);

        assert.deepEqual(result, {7 : 3});

        //assert.equal(1,2);
    });

    it("should find a package for 3 and 7", function(){

        var cards = [{
            number : 7,
            suite : "hearts"
        },
        {
            number : 3,
            suite : "spades"
        },
        {
            number : 3
        },
        {
            number : 7
        },
        {
            number : "A"
        }
        ];

        var result = checkForPackage(cards);

        assert.deepEqual(result, {3 : 2, 7 : 2, });

        //assert.equal(1,2);
    });
});
*/
