// Shopping List Manager
// 1. Use an array to store items.
// 2. Add new items, remove items, and show the list.
// 3. Use a loop to go through all items.
// 4. Use conditionals to check if an item already exists.

// for 1, i am going to create an array of strings
// for 2, i will be creating a function to help show the list while i loop through it so i dont have to 

let items = ["bread", "sardine", "tissues", "butter", "chocolates"]
 
// before adding or removing from the list, i want to show the list first using function

function showList(){
    console.log("the shopping list")
    // lets loop through the list we want to show
    for (i = 0; i < items.length; i++) { //the length is an array method that gets the list of all my items without me having to manually count my item
        console.log((i + 1) + ". " + items[i]) //the i +1 is like saying 0+1 for numbering my items list
    }
}
showList();

// adding to the list
// let newItem = ["coconut", "sugar", "milk"]
function addList(newItem){
items[items.length] = newItem; // i can either add to my list this way or i can also .push it
// items.push(newItem);
console.log("just added" + " " + newItem)
}
addList("coconut")
addList("sugar")
addList("milk")


// removing from the list

function removeItem(){
let removed = items.pop() 
console.log(removed + " " + "just got removed")
}

removeItem()
removeItem()