'use strict';

// min/max hourly customers, and the average cookies per customer
// Use a method of that object to generate a random number of customers per hour.
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
// Store the results for each location in a separate array… perhaps as a property of the object representing that location.
// Display the values of each array as unordered lists in the browser.
// Calculating the sum of these hourly totals; your output for each location should look like this:




function render(location) {

  let salesSelector = document.getElementById('sales');

  console.dir('sales', salesSelector);

  let articleElem = document.createElement('article');
  salesSelector.appendChild(articleElem);

  let h2Elem = document.createElement('h2');
  h2Elem.textContent = location.name;
  articleElem.appendChild(h2Elem);

  let ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);

  for (let i = 0; i < hours.length; i++) {
    let liElem = document.createElement('li');
    liElem.textContent = `${hours[i]} ${location.cookiesBought[i]} cookies.`;

    ulElem.appendChild(liElem);

  }
  let liElem = document.createElement('li');
  liElem.textContent = `Total: ${location.total} cookies sold`;
  ulElem.appendChild(liElem);
}









let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let Seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avSale: 6.3,
  cookiesBought: [0],
  total: 0,
};
let Tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avSale: 1.2,
  cookiesBought: [0],
  total: 0,
};
let Dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avSale: 3.7,
  cookiesBought: [0],
  total: 0,
};
let Paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avSale: 2.3,
  cookiesBought: [0],
  total: 0,
};
let Lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avSale: 4.6,
  cookiesBought: [0],
  total: 0,
};


// Found off of developer.mozilla.org
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function cookieSales(hour, location) {
  for (let i = 0; i < hour.length; i++) {
    location.cookiesBought[i] = getRandomInt(location.minCust, location.maxCust) * location.avSale;
    location.total = location.total + location.cookiesBought[i];
  }
}

cookieSales(hours, Seattle);
console.log(Seattle);
cookieSales(hours, Tokyo);
console.log(Tokyo);
cookieSales(hours, Dubai);
console.log(Dubai);
cookieSales(hours, Paris);
console.log(Paris);
cookieSales(hours, Lima);
console.log(Lima);

render(Seattle);
render(Tokyo);
render(Dubai);
render(Paris);
render(Lima);
