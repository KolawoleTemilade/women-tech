let inventory = [
    { id: 1, name: "Laptop", price: 1200, quantity: 50 },
    { id: 2, name: "Mouse", price: 25, quantity: 200 },
    { id: 3, name: "Keyboard", price: 75, quantity: 150 },
    { id: 4, name: "Monitor", price: 300, quantity: 80 },
    { id: 5, name: "Webcam", price: 50, quantity: 120 },
    { id: 6, name: "Headphones", price: 100, quantity: 90 },
    { id: 7, name: "Microphone", price: 85, quantity: 60 },
    { id: 8, name: "External Hard Drive", price: 95, quantity: 70 },
    { id: 9, name: "USB Hub", price: 20, quantity: 250 },
    { id: 10, name: "Laptop Stand", price: 35, quantity: 110 },
    { id: 11, name: "Gaming Chair", price: 250, quantity: 30 },
    { id: 12, name: "Printer", price: 150, quantity: 45 },
    { id: 13, name: "Router", price: 60, quantity: 100 },
    { id: 14, name: "Graphics Card", price: 500, quantity: 25 },
    { id: 15, name: "CPU", price: 400, quantity: 40 }
]

  //Update stock by product id
  const updateStock = (id, changeInQuantity) => {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id === id) {
            // prevent negative stock
            if (inventory[i].quantity + changeInQuantity < 0) {
                console.log("Error: Not enough stock to remove that amount.");
                return null; // null = update failed
            }
            // update quantity
            inventory[i].quantity += changeInQuantity;
            console.log(
                `Stock updated: ${inventory[i].name} now has ${inventory[i].quantity} units.`
            )
            return inventory[i]; // return the updated product object
        }
    }
    console.log("Error: Product not found.");
    return null; // null = product not found
};

let updated = updateStock(1, -10);
console.log(updated);
// { id: 1, name: "Laptop", price: 1200, quantity: 40 }

let updated2 = updateStock(2, 50);
console.log(updated2);
// { id: 2, name: "Mouse", price: 25, quantity: 250 }

let failCase = updateStock(14, -30);
// Logs error + returns null

