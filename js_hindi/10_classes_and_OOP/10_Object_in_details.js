// CONCEPT: Every property in JavaScript has a hidden "settings panel" called a Property Descriptor.
// We can read this descriptor using Object.getOwnPropertyDescriptor().
// Let's inspect the built-in Math.PI property.
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// The output shows the "settings" for Math.PI:
// {
//   value: 3.141592653589793,  // The actual value of the property.
//   writable: false,           // 'false' means it's read-only. You cannot change it.
//   enumerable: false,         // 'false' means it won't show up in loops (like for...in).
//   configurable: false        // 'false' means you cannot delete it or change this descriptor.
// }


// Because 'writable' is false, the following line will fail silently.
// The value of Math.PI will NOT change.
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); // Still logs 3.141592653589793


// CONCEPT: When you create an object like this, its properties get default descriptor settings:
// writable: true, enumerable: true, configurable: true.
const chai = {
    name: 'ginger chai',
    price: '250',
    isAvailable: true,

    orderChai: function () {
        console.log('chai nhi bni ');

    }
}

// Let's verify the default settings for the 'name' property.
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));


// CONCEPT: We can change a property's hidden settings using Object.defineProperty().
// Here, we are modifying the descriptor for the 'name' property on the 'chai' object.
Object.defineProperty(chai, 'name', {
    writable: false,      // We are making the 'name' property read-only.
    enumerable: false,    // We are hiding the 'name' property from loops.
    // 'configurable' is not set, so it remains true by default in this modification.
})

// Let's check the descriptor again to confirm our changes.
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));


// CONCEPT: The 'enumerable: false' setting now affects how we can iterate over the object.
// Object.entries() only collects properties that are enumerable.
for (let [key, value] of Object.entries(chai)) {
    // This 'if' condition is just to filter out the function from the output.
    if (typeof value !== 'function') {
        // Because 'name' was set to enumerable: false, it is SKIPPED by this loop.
        // That's why 'name: ginger chai' will not be in the output.
        console.log(`${key} : ${value}`);
    }
}