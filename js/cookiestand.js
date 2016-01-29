// Thomas Phillips
// CodeFellows - Code 201 Evening
// Week 4, Class 10
// The Homie Pat's Salmon Cookie Stand

(function() {
  // var Store = function(name, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  function Store(name, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
    this.name = name;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCookiesPerCust = avgCookiesPerCust;
    this.dailySales = dailySales();
    this.storeHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm"];
  };
  console.log("IIFE ran");
}());

var addStore = function(){
  this.name = document.getElementById("name").value;
  this.minCustPerHour = parseFloat(document.getElementById("minCustPerHour").value);
  this.maxCustPerHour = parseFloat(document.getElementById("maxCustPerHour").value);
  this.avgCookiesPerCust = parseFloat(document.getElementById("avgCookiesPerCust").value);
  inputs = [name, minCustPerHour, maxCustPerHour, avgCookiesPerCust];

  var elMinText = document.getElementById("minCustPerHour");

  // console.log(inputs);
  try {
    validateInputs(inputs);
    console.log(inputs);
    if(minCustPerHour > maxCustPerHour) {
      alert("Max must be greater than min");
      elMinText.value = maxCustPerHour;
      minCustPerHour = maxCustPerHour;
    } else if ((minCustPerHour < 0) || (maxCustPerHour < 0) || (avgCookiesPerCust < 0)) {
      alert("Enter non-negative values");
    }
    // var pike = new Store(name, minCustPerHour, maxCustPerHour, avgCookiesPerCust);

  } catch(e) {
    // alert("Invalid input");
    throw(e);
  }
};

function validateInputs(inputs){
  // console.log(inputs);
  for (var i=1; i<inputs.length; i++){
    console.log(inputs[i]);
    if (isNaN(inputs[i])){
      // throw (e);
      console.log("Value at index " + i + " is NaN");
    }
  }
}
var PikePlace = function() {
  // Customers per hour
  this.minPerHour = 17;
  this.maxPerHour = 88;

  // Cookies per customer
  this.avgPerCust = 5.2;
  this.sales = this.dailySales();
  this.sum = this.dailySales();
};

PikePlace.prototype.trafficGenerator = function (min, max){
   return Math.floor(Math.random()*(max-(min+1))) + min;
};

PikePlace.prototype.dailySales = function (){
  var sum = 0;
  var hours = new Array(8);

  for (var i=0; i<hours.length; i++) {
    hours[i] = this.trafficGenerator(this.minPerHour, this.maxPerHour);
    sum += hours[i];
  }
  hours[hours.length] = sum;
  return hours;
};

var pike = new PikePlace();

function showPike() {
  var openHours = ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm"];
  for (var i=0; i<openHours.length; i++) {
    var listEl = document.createElement("li");
    listEl.innerHTML = openHours[i] + ": " + pike.sales[i] + " cookies";
    document.getElementById("pikeForm").appendChild(listEl);
  }
  write("pikeSum", "Total: " + pike.sales[i] + " cookies");
  show("pikeSum");
  hide("pikeButton");
}

var SeaTac = function() {
  // Customers per hour
  this.minPerHour = 6;
  this.maxPerHour = 24;

  // Cookies per customer
  this.avgPerCust = 1.2;
  this.sales = this.dailySales();
  this.sum = this.dailySales();
};

SeaTac.prototype.trafficGenerator = function (min, max){
   return Math.floor(Math.random()*(max-(min+1))) + min;
};

SeaTac.prototype.dailySales = function (){
  var sum = 0;
  var hours = new Array(8);

  for (var i=0; i<hours.length; i++) {
    hours[i] = this.trafficGenerator(this.minPerHour, this.maxPerHour);
    sum += hours[i];
  }
  hours[hours.length] = sum;
  return hours;
};

var seatac = new SeaTac();

function showSeatac() {
  var openHours = ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm"];
  for (var i=0; i<openHours.length; i++) {
    var listEl = document.createElement("li");
    listEl.innerHTML = openHours[i] + ": " + seatac.sales[i] + " cookies";
    document.getElementById("seatacForm").appendChild(listEl);
  }
  write("seatacSum", "Total: " + seatac.sales[i] + " cookies");
  show("seatacSum");
  hide("seatacButton");
};

var Southcenter = function() {
  // Customers per hour
  this.minPerHour = 11;
  this.maxPerHour = 38;

  // Cookies per customer
  this.avgPerCust = 1.9;
  this.sales = this.dailySales();
  this.sum = this.dailySales();
};

Southcenter.prototype.trafficGenerator = function (min, max){
   return Math.floor(Math.random()*(max-(min+1))) + min;
};

Southcenter.prototype.dailySales = function (){
  var sum = 0;
  var hours = new Array(8);

  for (var i=0; i<hours.length; i++) {
    hours[i] = this.trafficGenerator(this.minPerHour, this.maxPerHour);
    sum += hours[i];
  }
  hours[hours.length] = sum;
  return hours;
};

var southcenter = new Southcenter();

function showSouthcenter() {
  var openHours = ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm"];
  for (var i=0; i<openHours.length; i++) {
    var listEl = document.createElement("li");
    listEl.innerHTML = openHours[i] + ": " + southcenter.sales[i] + " cookies";
    document.getElementById("southcenterForm").appendChild(listEl);
  }
  write("southcenterSum", "Total: " + southcenter.sales[i] + " cookies");
  show("southcenterSum");
  hide("southcenterButton");
};

var Bellevue = function() {
  // Customers per hour
  this.minPerHour = 20;
  this.maxPerHour = 48;

  // Cookies per customer
  this.avgPerCust = 3.3;
  this.sales = this.dailySales();
  this.sum = this.dailySales();
};

Bellevue.prototype.trafficGenerator = function (min, max){
   return Math.floor(Math.random()*(max-(min+1))) + min;
};

Bellevue.prototype.dailySales = function (){
  var sum = 0;
  var hours = new Array(8);

  for (var i=0; i<hours.length; i++) {
    hours[i] = this.trafficGenerator(this.minPerHour, this.maxPerHour);
    sum += hours[i];
  }
  hours[hours.length] = sum;
  return hours;
};

var bellevue = new Bellevue();

function showBellevue() {
  var openHours = ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm"];
  for (var i=0; i<openHours.length; i++) {
    var listEl = document.createElement("li");
    listEl.innerHTML = openHours[i] + ": " + bellevue.sales[i] + " cookies";
    document.getElementById("bellevueForm").appendChild(listEl);
  }
  write("bellevueSum", "Total: " + bellevue.sales[i] + " cookies");
  show("bellevueSum");
  hide("bellevueButton");
};

var Alki = function() {
  // Customers per hour
  this.minPerHour = 3;
  this.maxPerHour = 24;

  // Cookies per customer
  this.avgPerCust = 2.6;
  this.sales = this.dailySales();
  this.sum = this.dailySales();
};

Alki.prototype.trafficGenerator = function (min, max){
   return Math.floor(Math.random()*(max-(min+1))) + min;
};

Alki.prototype.dailySales = function (){
  var sum = 0;
  var hours = new Array(8);

  for (var i=0; i<hours.length; i++) {
    hours[i] = this.trafficGenerator(this.minPerHour, this.maxPerHour);
    sum += hours[i];
  }
  hours[hours.length] = sum;
  return hours;
};

var alki = new Alki();

function showAlki() {
  var openHours = ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm"];
  for (var i=0; i<openHours.length; i++) {
    var listEl = document.createElement("li");
    listEl.innerHTML = openHours[i] + ": " + alki.sales[i] + " cookies";
    document.getElementById("alkiForm").appendChild(listEl);
  }
  write("alkiSum", "Total: " + alki.sales[i] + " cookies");
  show("alkiSum");
  hide("alkiButton");
};

function write(id, msg){
  document.getElementById(id).innerHTML = msg;
};

function hide(id){
  document.getElementById(id).style.display = "none";
}
function show(id){
  document.getElementById(id).style.display = "block";
}
