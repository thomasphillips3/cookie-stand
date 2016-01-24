// Thomas Phillips
// CodeFellows - Code 201 Evening
// Week 4, Class 7
// The Homie Pat's Salmon Cookie Stand

var PikePlace = function() {
  // Customers per hour
  this.minPerHour = 17;
  this.maxPerHour = 88;

  // Cookies per customer
  this.avgPerCust = 5.2;
  this.sales = this.dailySales();
  this.sum = this.dailySales();
}

PikePlace.prototype.trafficGenerator = function (min, max){
   return Math.floor(Math.random()*(max-(min+1))) + min;
}

PikePlace.prototype.dailySales = function (){
  var sum = 0;
  var hours = new Array(8);

  for (i=0; i<hours.length; i++) {
    hours[i] = this.trafficGenerator(this.minPerHour, this.maxPerHour);
    sum += hours[i];
  }
  hours[hours.length] = sum;
  return hours;
}

var pike = new PikePlace();

function showPike() {
  var openHours = ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm"];
  for (i=0; i<openHours.length; i++) {
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
}

SeaTac.prototype.trafficGenerator = function (min, max){
   return Math.floor(Math.random()*(max-(min+1))) + min;
}

SeaTac.prototype.dailySales = function (){
  var sum = 0;
  var hours = new Array(8);

  for (i=0; i<hours.length; i++) {
    hours[i] = this.trafficGenerator(this.minPerHour, this.maxPerHour);
    sum += hours[i];
  }
  hours[hours.length] = sum;
  return hours;
}

var seatac = new SeaTac();

function showSeatac() {
  var openHours = ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm"];
  for (i=0; i<openHours.length; i++) {
    var listEl = document.createElement("li");
    listEl.innerHTML = openHours[i] + ": " + seatac.sales[i] + " cookies";
    document.getElementById("seatacForm").appendChild(listEl);
  }
  write("seatacSum", "Total: " + seatac.sales[i] + " cookies");
  show("seatacSum");
  hide("seatacButton");
}

var Southcenter = function() {
  // Customers per hour
  this.minPerHour = 11;
  this.maxPerHour = 38;

  // Cookies per customer
  this.avgPerCust = 1.9;
  this.sales = this.dailySales();
  this.sum = this.dailySales();
}

Southcenter.prototype.trafficGenerator = function (min, max){
   return Math.floor(Math.random()*(max-(min+1))) + min;
}

Southcenter.prototype.dailySales = function (){
  var sum = 0;
  var hours = new Array(8);

  for (i=0; i<hours.length; i++) {
    hours[i] = this.trafficGenerator(this.minPerHour, this.maxPerHour);
    sum += hours[i];
  }
  hours[hours.length] = sum;
  return hours;
}

var southcenter = new Southcenter();

function showSouthcenter() {
  var openHours = ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm"];
  for (i=0; i<openHours.length; i++) {
    var listEl = document.createElement("li");
    listEl.innerHTML = openHours[i] + ": " + southcenter.sales[i] + " cookies";
    document.getElementById("southcenterForm").appendChild(listEl);
  }
  write("southcenterSum", "Total: " + southcenter.sales[i] + " cookies");
  show("southcenterSum");
  hide("southcenterButton");
}


function write(id, msg){
  document.getElementById(id).innerHTML = msg;
}

function hide(id){
  document.getElementById(id).style.display = "none";
}
function show(id){
  document.getElementById(id).style.display = "block";
}
