// var amount = Number(prompt("Enter shopping amount:"));

// var discount;

// if (amount >= 10000) {
//     discount = amount * 20 / 100;
// }
// else if (amount >= 5000) {
//     discount = amount * 10 / 100;
// }
// else {
//     discount = 0;
// }

// var finalAmount = amount - discount;

// document.write("Original Amount: Rs. " + amount + "<br>");
// document.write("Discount: Rs. " + discount + "<br>");
// document.write("Final Amount: Rs. " + finalAmount);

// Q2


// var units = Number(prompt("Enter electricity units:"));

// var bill;

// if (units <= 100) {
//     bill = units * 10;
// }
// else if (units <= 200) {
//     bill = (100 * 10) + ((units - 100) * 15);
// }
// else {
//     bill = (100 * 10) + (100 * 15) + ((units - 200) * 20);
// }


// document.write("Electricity Units: " + units + "<br>");
// document.write("Total Electricity Bill: Rs. " + bill);


// Q3

// var english = Number(prompt("Enter English marks:"));
// var math = Number(prompt("Enter Mathematics marks:"));
// var computer = Number(prompt("Enter Computer Science marks:"));


// var total = english + math + computer;
// var percentage = (total / 300) * 100;

// var grade;

// if (english < 40 || math < 40 || computer < 40) {
//     grade = "Fail";
// }
// else if (percentage >= 90) {
//     grade = "A+";
// }
// else if (percentage >= 80) {
//     grade = "A";
// }
// else if (percentage >= 70) {
//     grade = "B";
// }
// else if (percentage >= 60) {
//     grade = "C";
// }
// else if (percentage >= 50) {
//     grade = "D";
// }
// else {
//     grade = "Fail";
// }

// document.write("English Marks: " + english + "<br>");
// document.write("Mathematics Marks: " + math + "<br>");
// document.write("Computer Science Marks: " + computer + "<br><br>");

// document.write("Total Marks: " + total + "/300<br>");
// document.write("Percentage: " + percentage + "%<br>");
// document.write("Final Grade: " + grade);

// Q4


// var balance = 50000;


// var amount = Number(prompt("Enter withdrawal amount:"));


// if (amount <= 0) {
//     document.write("Invalid Amount");
// }
// else {
//     if (amount > balance) {
//         document.write("Insufficient Balance");
//     }
//     else {
//         if (amount % 500 == 0) {
//             balance = balance - amount;

//             document.write("Transaction Successful!<br>");
//             document.write("Withdrawn Amount: Rs. " + amount + "<br>");
//             document.write("Remaining Balance: Rs. " + balance);
//         }
//         else {
//             document.write("Please enter an amount in multiples of 500");
//         }
//     }
// }

// Q5


// var bill = Number(prompt("Enter your bill amount:"));

// var membership = prompt("Do you have a membership card? (yes/no)");

// var discount = 0;


// if (bill < 2000) {
//     discount = 0;
// }
// else {
//     if (bill > 5000) {
//         discount = bill * 15 / 100;
//     }

//     if (membership == "yes") {
//         discount = discount + (bill * 5 / 100);
//     }
// }


// var finalAmount = bill - discount;

// document.write("Original Bill: Rs. " + bill + "<br>");
// document.write("Discount: Rs. " + discount + "<br>");
// document.write("Final Payable Amount: Rs. " + finalAmount);

// Q6


// var age = Number(prompt("Enter your age:"));


// var day = prompt("Enter day of the week:");


// var price;

// if (age < 5) {
//     price = 0;
// }
// else if (age < 12) {
//     price = 300;
// }
// else if (age < 60) {
//     price = 600;
// }
// else {
//     price = 400;
// }


// var discount = 0;

// if (day.toLowerCase() == "wednesday") {
//     discount = price * 20 / 100;
// }


// var finalPrice = price - discount;


// document.write("Age: " + age + "<br>");
// document.write("Day: " + day + "<br>");
// document.write("Original Ticket Price: Rs. " + price + "<br>");
// document.write("Discount: Rs. " + discount + "<br>");
// document.write("Final Ticket Price: Rs. " + finalPrice);

// Q7

// var data = Number(prompt("How much data do you need (GB)?"));

// var packageName;
// var price;
// var packageData;

// if (data <= 5) {
//     packageName = "Basic";
//     packageData = "5 GB";
//     price = 300;
// }
// else if (data <= 15) {
//     packageName = "Standard";
//     packageData = "15 GB";
//     price = 600;
// }
// else if (data <= 30) {
//     packageName = "Premium";
//     packageData = "30 GB";
//     price = 1000;
// }
// else {
//     packageName = "No Available Package";
// }

// document.write("Package Name: " + packageName + "<br>");

// if (data <= 30) {
//     document.write("Data: " + packageData + "<br>");
//     document.write("Price: Rs. " + price);
// }


// Q8

// var salary = Number(prompt("Enter employee salary:"));


// var experience = Number(prompt("Enter years of experience:"));

// var bonus = 0;


// if (salary < 30000) {
//     bonus = 0;
// }
// else if (experience >= 5) {
//     bonus = salary * 20 / 100;
// }
// else if (experience >= 3) {
//     bonus = salary * 10 / 100;
// }
// else {
//     bonus = salary * 5 / 100;
// }


// var finalSalary = salary + bonus;

// document.write("Original Salary: Rs. " + salary + "<br>");
// document.write("Bonus Amount: Rs. " + bonus + "<br>");
// document.write("Final Salary: Rs. " + finalSalary);


// Q9


// var order = Number(prompt("Enter order amount:"));


// var city = prompt("Enter your city:");

// var delivery;


// if (order > 5000) {
//     delivery = 0;
// }
// else if (order >= 2000) {
//     delivery = 150;
// }
// else {
//     delivery = 250;
// }


// if (city.toLowerCase() == "karachi") {
//     delivery = delivery - 50;

//     if (delivery < 0) {
//         delivery = 0;
//     }
// }


// var finalAmount = order + delivery;

// document.write("Order Amount: Rs. " + order + "<br>");
// document.write("Delivery Charges: Rs. " + delivery + "<br>");
// document.write("Final Payable Amount: Rs. " + finalAmount);

// Q10


// var age = Number(prompt("Enter your age:"));
// var salary = Number(prompt("Enter monthly salary:"));
// var experience = Number(prompt("Enter job experience in years:"));

// var loanAmount;


// if (age < 21) {
//     document.write("Loan Rejected: Minimum age must be 21 years.");
// }
// else if (salary < 50000) {
//     document.write("Loan Rejected: Minimum salary must be Rs. 50,000.");
// }
// else if (experience < 2) {
//     document.write("Loan Rejected: Minimum job experience must be 2 years.");
// }
// else {
//     if (salary > 100000) {
//         loanAmount = 1000000;
//     }
//     else {
//         loanAmount = 500000;
//     }

//     document.write("Congratulations! You are eligible for a loan.<br>");
//     document.write("Eligible Loan Amount: Rs. " + loanAmount);
// }

// Q11


// var costPrice = 45000;
// var sellingPrice = 52000;

// var profit = sellingPrice - costPrice;


// var profitPercentage = (profit / costPrice) * 100;


// document.write("Cost Price: Rs. " + costPrice + "<br>");
// document.write("Selling Price: Rs. " + sellingPrice + "<br>");
// document.write("Total Profit: Rs. " + profit + "<br>");
// document.write("Profit Percentage: " + profitPercentage.toFixed(2) + "%");

// Q12


// var money = 5000;


// var food = money * 25 / 100;


// var transport = money * 15 / 100;


// var totalExpenses = food + transport;


// var remaining = money - totalExpenses;

// document.write("Total Money: Rs. " + money + "<br>");
// document.write("Food Expenses: Rs. " + food + "<br>");
// document.write("Transport Expenses: Rs. " + transport + "<br>");
// document.write("Total Expenses: Rs. " + totalExpenses + "<br>");
// document.write("Remaining Money: Rs. " + remaining);

// Q13


// var distance = 180;
// var time = 3;


// var speed = distance / time;


// document.write("Distance: " + distance + " km<br>");
// document.write("Time: " + time + " hours<br>");
// document.write("Average Speed: " + speed + " km/h");

// Q14

// var age = Number(prompt("Enter your current age:"));


// var futureAge = age + 15;


// document.write("Current Age: " + age + "<br>");
// document.write("Age After 15 Years: " + futureAge);

// Q15

// var stock = 100;


// var hours = 7;

// while (hours > 0) {
//     stock = stock - 5;
//     hours--;
// }

// document.write("Remaining Products: " + stock);

// Q16

// var num = Number(prompt("Enter a number:"));


// if (num > 0) {
//     document.write("The number is Positive");
// }
// else if (num < 0) {
//     document.write("The number is Negative");
// }
// else {
//     document.write("The number is Zero");
// }