
# How do we represent a card?

var card = {
    suite : "hearts",
    number : "7",
    color : "red"
};

var Card = function(suite, number){
    this.suite = suite;
    this.number = number;

    this.color = function(){
        if (suite === "hearts" || suite === "diamonds"){
            return "red";
        }
        return "black";
    }
}

# How do we create a pack of cards?

* How many cards in a pack?
* What cards are in the pack?

# How to shuffle a pack of cards?

# How to deal 5 cards to 3 people?
    * How do I know the cards has been dealt?
    * Show all the cards that's been dealt...
    * show all the cards that is still in the pack
    * How many cards is available in the pack?
        * How will we test that it is correct?

# Handling packets

* Select a card from the pack and see it.
* See the card on top.

# Check for matches
    * Check all hands to see if they should pick up the visible card
    * Should a card be picked up?
    * Which card should be discarded?
