// Assignment Questions:
// 1 Question 1: Create an object 'student' with name, age, city. Display name using dot notation
// and city using bracket notation.

// let student = {
//     name: "Ali",
//     age: 20,
//     city: "Karachi"
// };
// console.log(student.name); // Display name using dot notation
// console.log(student["city"]); // Display city using bracket notation

// 2 Question 2: Create an array 'employees' containing three employee objects (name,
// department, salary). Display second employee name and third employee salary.
// let employees = [
//     { name: "John", department: "HR", salary: 50000 },
//     { name: "Jane", department: "IT", salary: 60000 },
//     { name: "Doe", department: "Finance", salary: 55000 }
// ];
// console.log(employees[1].name);
// console.log(employees[2].salary); 

// 3 Question 3: Create an object 'product' (title, price, category). Use for-in loop to display all keys
// and values.
// let product = {
//     title: "Laptop",
//     price: 1000,
//     category: "Electronics"
// };
// for (let key in product) {
//     console.log(key + ": " + product[key]);
// }

// 4 Question 4: Create an object 'user' with name, email and skills array (minimum four skills).
// Display first and last skill dynamically.
// let user  = {
//     name: "Hussain",
//     email: "hussain@example.com",
//     skills: ["JavaScript", "HTML", "CSS", "React"]
// };
// console.log("First skill:", user.skills[0]);
// console.log("Last skill:", user.skills[3]);

// 5 Question 5: Create an object 'car' (brand, model, year, color). Use Object.keys() to display all
// keys and count total properties.
// let car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2020,
//     color: "Red"
// };
// let count  = 0;
// for (let key in car) {
//     count++;
// }
// console.log(Object.keys(car)); 
// console.log("Total properties:", count);

// 6 Question 6: Create an object 'book' (title, author, price). Use Object.values() and display all
// values using for in  loop.

// let book  = {
//     title: "Urdu Book",
//     author: "Ahmed",
//     price: 250
// };
// let values = Object.values(book);
// for (let i = 0; i < values.length; i++) {
//     console.log(values[i]);
// }

// 7 Question 7: Create an object 'order' (orderId, customerName, totalAmount). Convert it into
// JSON string using JSON.stringify() and display the result.
// let order = {
//     orderId: 12345,
//     customerName: "Ali",
//     totalAmount: 500
// };
// let jsonString = JSON.stringify(order);
// console.log(jsonString);

// 8 Question 8: Create an array 'students' (name, marks). Display all students and filter those
// scoring above 80.
// let students = ["hussain", 85, "Ali", 75, "Ahmed", 90];
// let filter = students.filter(function(student) {
//     if(typeof student === "number" && student > 80) {
//         return true;
//     }
//     return false;
// }
// );
// console.log("Students scoring above 80:", filter);
// 9 Question 9: Create an object 'company' (companyName, location, employees array of objects).
// Display company name and all employee names.
// let company = {
//     companyName: "Tech Solutions",
//     location: "Karachi",
//     employees: [
//         { name: "John", department: "HR" },
//         { name: "Jane", department: "IT" },
//         { name: "Doe", department: "Finance" }
//     ]
// };
// console.log("Company Name:", company.companyName);
// console.log("Employee Names:" );
// company.employees.forEach(function(employee) {
//     console.log(employee.name);
// });
// 10 Question 10: Create an array 'products' (id, name, price, stock). Display product names, count
// total products, convert to JSON, and show out-of-stock products.
// let products = [
//     { id: 1, name: "Laptop", price: 1000, stock: 10 },
//     { id: 2, name: "Phone", price: 500, stock: 0 },
//     { id: 3, name: "Tablet", price: 300, stock: 5 }
// ];
// // Display product names
// console.log("Product Names:");
// products.forEach(function(product) {
//     console.log(product.name);
// });
// // Count total products
// console.log("Total Products:", products.length);
// // Convert to JSON
// let jsonProducts = JSON.stringify(products);    
// console.log("Products in JSON format:", jsonProducts);
// // Show out-of-stock products
// console.log("Out-of-stock Products:");
// products.forEach(function(product) {
//     if (product.stock === 0) {
//         console.log(product.name);
//     }
// });

