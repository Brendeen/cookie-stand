'use strict';

// min/max hourly customers, and the average cookies per customer
// Use a method of that object to generate a random number of customers per hour.
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
// Store the results for each location in a separate array… perhaps as a property of the object representing that location.
// Display the values of each array as unordered lists in the browser.
// Calculating the sum of these hourly totals



let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let tableSelector = document.getElementById('stores');

// *********************** Rendering ***************************
function header(){

  let trElem = document.createElement('tr');
  tableSelector.appendChild(trElem);

  let thElem = document.createElement('th');
  thElem.textContent = 'Stores';
  trElem.appendChild(thElem);

  for (let j = 0; j < hours.length; j++) {
    thElem = document.createElement('th');
    thElem.textContent = hours[j];
    trElem.appendChild(thElem);
  }
  thElem = document.createElement('th');
  thElem.textContent = 'total';
  trElem.appendChild(thElem);
}
header();
ShopOne.prototype.render = function() {

  console.dir('stores', tableSelector);
  let trElem = document.createElement('tr');
  tableSelector.appendChild(trElem);

  let tdElem = document.createElement('td');
  tdElem.textContent = this.name;
  trElem.appendChild(tdElem);

  for (let i = 0; i < hours.length; i++) {
    let tableData = document.createElement('td');
    tableData.textContent = this.cookiesBought[i];
    console.log(this.cookiesBought[i]);

    trElem.appendChild(tableData);

  }
  let totalTableData = document.createElement('td');
  totalTableData.textContent = this.total;
  trElem.appendChild(totalTableData);
};

let grandTotals = document.createElement('tr');
tableSelector.appendChild(grandTotals);

// grandTotals = document.createElement('th');
// for(let o = 0; 0 < storesArr; o++){
//   grandTotals.textContent = this.storesArr;
//   tableSelector.appendChild(grandTotals);
// }


// for(let u = 0; u < location.length; u++)



//   let salesSelector = document.getElementById('sales');

//   console.dir('sales', salesSelector);

//   let articleElem = document.createElement('article');
//   salesSelector.appendChild(articleElem);

//   let h2Elem = document.createElement('h2');
//   h2Elem.textContent = location.name;
//   articleElem.appendChild(h2Elem);

//   let ulElem = document.createElement('ul');
//   articleElem.appendChild(ulElem);

//   for (let i = 0; i < hours.length; i++) {
//     let liElem = document.createElement('li');
//     liElem.textContent = `${hours[i]} ${location.cookiesBought[i]} cookies.`;
//     console.log(location.cookiesBought);

//     ulElem.appendChild(liElem);

//   }
//   let liElem = document.createElement('li');
//   liElem.textContent = `Total: ${location.total} cookies sold.`;
//   ulElem.appendChild(liElem);



// let Seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avSale: 6.3,
//   cookiesBought: [0],
//   total: 0,
// };

// let Tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avSale: 1.2,
//   cookiesBought: [0],
//   total: 0,
// };
// let Dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avSale: 3.7,
//   cookiesBought: [0],
//   total: 0,
// };
// let Paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avSale: 2.3,
//   cookiesBought: [0],
//   total: 0,
// };
// let Lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avSale: 4.6,
//   cookiesBought: [0],
//   total: 0,
// };


// ***************** Constructor ************************
function ShopOne(name, minCust, maxCust, avSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avSales = avSale;
  this.cookiesBought = [];
  this.total = 0;
}

let Seattle = new ShopOne('Seattle', 23, 65, 6.3, [], 0);
let Tokyo = new ShopOne('Tokyo', 3, 24, 1.2, [], 0);
let Dubai = new ShopOne('Dubai', 11, 38, 3.7, [], 0);
let Paris = new ShopOne('Paris', 20, 38, 2.3, [], 0);
let Lima = new ShopOne('Lima', 2, 16, 4.6, [], 0);

let storesArr = [Seattle, Tokyo, Dubai, Paris, Lima];


// **************** Methods ****************************

// Found off of developer.mozilla.org

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

ShopOne.prototype.getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// function cookieSales(hour, location) {
//   for (let i = 0; i < hour.length; i++) {
//     location.cookiesBought[i] = getRandomInt(location.minCust, location.maxCust) * location.avSale;
//     location.total = location.total + location.cookiesBought[i];
//   }
// }

ShopOne.prototype.cookieSales = function () {
  for (let i = 0; i < hours.length; i++) {
    let avCookie = Math.floor(this.getRandomInt(this.minCust, this.maxCust) * this.avSales);
    this.cookiesBought.push(avCookie);
    this.total = this.total + this.cookiesBought[i];
  }
};


// **************** Object Calling*******************

// cookieSales(hours, shopOne);
// console.log(shopOne);
// cookieSales(hours, shopTwo);
// console.log(shopTwo);
// cookieSales(hours, shopThree);
// console.log(shopThree);
// cookieSales(hours, shopFour);
// console.log(shopFour);
// cookieSales(hours, shopFive);
// console.log(shopFive);




Seattle.cookieSales();
Tokyo.cookieSales();
Dubai.cookieSales();
Paris.cookieSales();
Lima.cookieSales();

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();


console.log(Seattle);
console.log(Tokyo);
console.log(Dubai);
console.log(Paris);
console.log(Lima);
