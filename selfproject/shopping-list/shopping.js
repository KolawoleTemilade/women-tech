// Shopping List Manager
// 1. Use an array to store items.
// 2. Add new items, remove items, and show the list.
// 3. Use a loop to go through all items.
// 4. Use conditionals to check if an item already exists.


let items = ["bread", "sardine", "tissues", "butter", "chocolates"] //using an array to store an item
// let list = items 

function showList(){
    console.log("the shopping list")
      // lets loop through the list we want to show
      for (i = 0; i < items.length; i++) { 
        //   let list = items[i]
        console.log((i + 1) + ". " + items[i])     
    }
}
showList();
console.log("")

// adding to the list
function addList(newItem){
    if (items.includes(newItem)){ // this is a method to check if the item exist already
        console.log(newItem + " " + "is already on the list")
    } else{
items.push(newItem);  //if the item doesnt exist, do this.
console.log("just added" + " " + newItem)
}}
addList("milk")
addList("coconut")
addList("sugar")
addList("milk")
addList("car")
console.log("")

showList()
console.log("")


// removing from the list

function removeItem(){
let removed = items.pop() 
console.log(removed + " " + "just got removed")
}

removeItem()
console.log("")

showList()
console.log("")


