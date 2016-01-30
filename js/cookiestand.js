// Thomas Phillips
// CodeFellows - Code 201 Evening
// Week 4, Class 10
// The Homie Pat's Salmon Cookie Stand

function Store(name, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  var dailySales = dailySales();
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
    // console.log(inputs);
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
    stores.push(store);

  } catch(e) {
    // alert("Invalid input");
    throw(e);
  }
};

function validateInputs(inputs){
  for (var i=1; i<inputs.length; i++){
    console.log(inputs[i]);
    if (isNaN(inputs[i])){
      // throw (e);
      console.log("Value at index " + i + " is NaN");
    }
  }
}

Store.prototype.trafficGenerator = function (min, max){
   return Math.floor(Math.random()*(max-(min+1))) + min;
};

Store.prototype.dailySales = function (){
  var sum = 0;
  var hours = new Array(8);

  for (var i=0; i<hours.length; i++) {
    hours[i] = this.trafficGenerator(this.minPerHour, this.maxPerHour);
    sum += hours[i];
  }
  hours[hours.length] = sum;
  return hours;
};


// function showPike() {
//   var openHours = ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm"];
//   for (var i=0; i<openHours.length; i++) {
//     var listEl = document.createElement("li");
//     listEl.innerHTML = openHours[i] + ": " + pike.sales[i] + " cookies";
//     document.getElementById("pikeForm").appendChild(listEl);
//   }
//   write("pikeSum", "Total: " + pike.sales[i] + " cookies");
//   show("pikeSum");
//   hide("pikeButton");
// }
