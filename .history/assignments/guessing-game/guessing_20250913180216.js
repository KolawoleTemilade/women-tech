// we have a guessing game where i am to incoperate all i've learnt in it. which is right from *object *boolean, *function,the and & or operator, variables, loops,conditional statements,comparison  and sprinkle of array.

// Game: Fruit Catcher The player chooses a basket, and the game checks if the basket contains a fruit. Each basket is an object, and the game uses a function to check the basket. It uses an array to store baskets, and a boolean to track if the fruit was found.

const baskets = [ //this is an array of objects,storing each baskets objects
    { name: "Basket 1", hasFruit: false }, 
    { name: "Basket 2", hasFruit: true }, 
    { name: "Basket 3", hasFruit: false }
]; 
    let firstBasket = false;  // ths is a boolean here to check the basket with.
    function checkBasket(basketNumber) { //we have a function here so we can reuse this logic anytime.
            let basket = baskets[basketNumber -1]
            if (basket.hasFruit){
                console.log (basket.name + " " + "has fruits")
                firstBasket = true;
            } else {
                console.log(basket.name + " " + "is empty")
            }
// prompt("you have 3 choices : Basket 1 , Basket 2, or Basket 3. " + "choose one fruit basket");
    }
    checkBasket(1)
    checkBasket(2)
    checkBasket(3)
  
console.log("Fruit found status: " + firstBasket);