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
  return sum;
}

var pike = new PikePlace();
console.log(pike.minPerHour);
console.log(pike.maxPerHour);
console.log(pike.avgPerCust);
console.log(pike.sales);

function write(id, msg){
  document.getElementById(id).innerHTML = msg;
}

function showPike() {
  var openHours = ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm"];
  for (i=0; i<openHours.length; i++) {
    var listEl = document.createElement("li");
    listEl.innerHTML = openHours[i] + ": " + " cookies";
    document.getElementById("pikeForm").appendChild(listEl);
  }
  write("pikeSum", "Total: " + pike.sales)
  show("pikeSum");
  hide("pikeButton")
}

function hide(id){
  document.getElementById(id).style.display = "none";
}
function show(id){
  document.getElementById(id).style.display = "block";
}
