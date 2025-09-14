// we have a guessing game where i am to inculcate all ive learnt in it. which is right from *object *boolean, *function,the and & or operator, variables, loops, variable, conditional statements,comparison  and sprinkle of array.
// Game: Fruit Catcher The player chooses a basket, and the game checks if the basket contains a fruit. Each basket is an object, and the game uses a function to check the basket. It uses an array to store baskets, and a boolean to track if the fruit was found.

const baskets = [ //this is an array of objects,holding each baskets objects
    { name: "Basket 1", hasFruit: false }, 
    { name: "Basket 2", hasFruit: true }, 
    { name: "Basket 3", hasFruit: false }
]; 
    if firstBasket = false;  
    function checkBasket(basketNumber) {
            let basket = baskets[basketNumber -1]
            if (basket.hasFruit){
                console.log (basket.name + "has fruits")
            } else {
                console.log(basket)
            }
// prompt("you have 3 choices : Basket 1 , Basket 2, or Basket 3. " + "choose one fruit basket");
    }
    checkBasket();