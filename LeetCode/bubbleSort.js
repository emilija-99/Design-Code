const array = [1, 2, 4, 5];
const elementToAdd = 3;
const indexToAdd = 2;

// Shift elements to make space for the new element
for (let i = array.length - 1; i >= indexToAdd; i--) {
    array[i + 1] = array[i];
}

// Insert the new element at the specified index
array[indexToAdd] = elementToAdd;

console.log("Array after adding element:", array); // Output: [1, 2, 3, 4, 5]
arr[arr.length] = 19;
console.log(arr);