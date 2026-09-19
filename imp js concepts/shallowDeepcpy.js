
// Shallow vs Deep Copy ⭐

// This becomes very important when working with objects and arrays.

// Shallow Copy

// A shallow copy creates a new outer object, but nested objects are still shared.
// A shallow copy copies only the first level.
const user1 = {
  name: "Rahul",
  address: {
    city: "Pune"
  }
};

const user2 = { ...user1 };

user2.name = "Amit";
user2.address.city = "Mumbai";

console.log(user1.name); // Rahul
console.log(user1.address.city); // Mumbai

// Because both objects were pointing to the same nested object.

// Shallow copy = copy the first level, share nested objects.


// Deep Copy

// A deep copy copies everything, including nested objects.

const user3 = structuredClone(user)
// user                 user2
//   |                    |
//   ↓                    ↓
// {                    {
//  name: Rahul          name: Rahul
//  address              address
//    ↓                    ↓
//  { city: Ahmedabad }  { city: Ahmedabad }

// The nested objects are also separate: