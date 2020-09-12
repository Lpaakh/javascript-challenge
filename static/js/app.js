// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Populate table with desired data
function populateTable() {
    tableData.forEach((UFOSighting) => {
        var row = tbody.append("tr");
        Object.entries(UFOSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
}
  // Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element for datetime and get the raw HTML node
    var datetimeFilter = d3.select("#datetime");

    // Get the value property of the datetime input element
    var datetimeFilterValue = datetimeFilter.property("value");
    
    // Check for existence of datetime filter
    if(datetimeFilterValue)
    {

        // If so, clear the table and insert data for the input datetime filter
        tbody.html("");
        tableData = data.filter(UFOSighting => UFOSighting.datetime === datetimeFilterValue); 
    }
    // If there isn't a datetime filter input, the table populates the non-filtered version
    else{
        tbody.html("");
        tableData = data;
    }
    populateTable();
}

// Populate the table on page load
populateTable();
