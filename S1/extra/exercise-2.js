//Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas. 
//Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];

let count = 0;
foodSchedule.forEach(food => {
    if(food.isVegan==false){
        food.name=fruits[count];
        count++;
        food.isVegan=true;
    }
});

// let count = 0;
// for(let food of foodSchedule){
//     if(food.isVegan == false){
//         food.name=fruits[count];
//         count++;
//         food.isVegan=true;
//     }
// }

console.log(foodSchedule);
