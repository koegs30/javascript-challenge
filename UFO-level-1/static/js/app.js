// from data.js
var tableData = data;
var tbody = d3.select('tbody')

tableData.forEach((ufoSighting) => {
    console.log(ufoSighting);
});

// create function to fill table with data
function buildTable(data) {
  tbody.html("");
  data.forEach((sighting) => {
      var row = tbody.append("tr");
      Object.entries(sighting).forEach(([key, value]) => {
    // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
      });
  });
};

// fill table with original data
buildTable(tableData);

// create variable for filter button
var button = d3.select("#filter-btn");

// set actions for button click
button.on("click", function() {
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Filter table for input
  var filteredSightings = tableData.filter(sighting => sighting.datetime === inputValue);
  
  // Clear table
  var tbody = d3.select("tbody");
  tbody.html("");

  // check if filteredSightings is empty and if so return original tableData data
  // if not empty fill table with filtered results
  if (!Array.isArray(filteredSightings) || !filteredSightings.length) 
        buildTable(tableData); 
        else 
            buildTable(filteredSightings); 
});