// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(tableData);

tableData.forEach((UFOSighting) => {
    var row = tbody.append("tr");
    Object.entries(UFOSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  

  // Select the button
var button = d3.select("#filter-btn");


// Create event handlers 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

/////////////////////////////
  // use "this" function to grab all ids
//   var inputid = 

  d3.selectAll("input").on("click", function() {
    // you can select the element just like any other selection
    var listItem = d3.select(this);
    var inputid = listItem.id();
    console.log(inputid);
});


  // Select the input element and get the raw HTML node
  var inputElement = d3.select(inputid);

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(UFOSighting => UFOSighting.inputid === inputValue);

  ////////////////////////////

  console.log(filteredData);

  // clear previous table
  tbody.html("")
  
  filteredData.forEach((UFOSighting) => {
    var row = tbody.append("tr");
    Object.entries(UFOSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};