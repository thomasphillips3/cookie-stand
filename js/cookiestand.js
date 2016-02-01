// Thomas Phillips
// CodeFellows - Code 201 Evening
// Week 4, Class 9
// Refactor code to remove object literals, in favor of a single constructor function
// The Homie Pat's Salmon Cookie Stand
var NINE_AM = 0;
var TEN_AM = 1;
var ELEVEN_AM = 2;
var NOON = 3;
var ONE_PM = 4;
var TWO_PM = 5;
var THREE_PM = 6;
var FOUR_PM = 7;
var DAILY_TOTAL = 8;

function Store(name, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.storeHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm"];
}

var addStore = function(){
  this.name = document.getElementById("name").value;
  this.minCustPerHour = parseFloat(document.getElementById("minCustPerHour").value);
  this.maxCustPerHour = parseFloat(document.getElementById("maxCustPerHour").value);
  this.avgCookiesPerCust = parseFloat(document.getElementById("avgCookiesPerCust").value);
  inputs = [name, minCustPerHour, maxCustPerHour, avgCookiesPerCust];

  var elMinText = document.getElementById("minCustPerHour");
  var elMaxText = document.getElementById("maxCustPerHour");
  var elAvgText = document.getElementById("avgCookiesPerCust");

  var stores = [];

  try {
    validateInputs(inputs);
    if(minCustPerHour > maxCustPerHour) {
      alert("Max must be greater than min");
      elMinText.value = maxCustPerHour;
      minCustPerHour = maxCustPerHour;
    } else if ((minCustPerHour < 0) || (maxCustPerHour < 0) || (avgCookiesPerCust < 0)) {
      alert("Enter non-negative values");
      elMinText.value = 0.0;
      elMaxText.value = 0.0;
      elAvgText.value = 0.0;
    }

    var store = new Store(name, minCustPerHour, maxCustPerHour, avgCookiesPerCust);
    var sales = store.dailySales();
    console.log(store);
    stores.push(store);

    var elTableRow = document.createElement("tr");
    var elTableData = document.createElement("td");
    var elStoreData = document.getElementById("store-data");

    // TODO: Get a loop to do this
    elStoreData.appendChild(elTableRow);
    elTableRow.appendChild(elTableData).innerHTML = store.name;
    var elTableData = document.createElement("td");
    elTableRow.appendChild(elTableData).innerHTML = store.minCustPerHour + " customers";
    var elTableData = document.createElement("td");
    elTableRow.appendChild(elTableData).innerHTML = store.maxCustPerHour + " customers";
    var elTableData = document.createElement("td");
    elTableRow.appendChild(elTableData).innerHTML = store.avgCookiesPerCust + " cookies";
    var elTableData = document.createElement("td");
    elTableRow.appendChild(elTableData).innerHTML = sales[DAILY_TOTAL] + " cookies";
  } catch(e) {
    // alert("Invalid input");
    throw(e);
  }
};

function validateInputs(inputs){
  for (var i=1; i<inputs.length; i++){
    if (isNaN(inputs[i])){
      // throw (e);
      console.log("Value at index " + i + " is NaN");
    }
  }
}

Store.prototype.trafficGenerator = function (min, max){
   return Math.floor(Math.random()*(max+1-(min))) + min;
};

Store.prototype.dailySales = function (){
  var sum = 0;
  var hours = new Array(8);

  for (var i=0; i<hours.length; i++) {
    hours[i] = this.trafficGenerator(this.minCustPerHour, this.maxCustPerHour);
    sum += hours[i];
  }
  hours[hours.length] = sum;
  return hours;
};
