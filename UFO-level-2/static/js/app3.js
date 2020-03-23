// from data.js
var tableData = data;
var tbody = d3.select('tbody');

console.log(tableData);

// create function to build table
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

// build table with original dataset
buildTable(tableData);

// create variable for button id
var button = d3.select("#filter-btn");

button.on("click", () => {
    // get value of input in form
    var inputDate = d3.select("#datetime").property("value");
    var inputCity = d3.select("#city").property("value");
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape = d3.select("#shape").property("value");

    // filter dataset by input from above
    var filteredDate = tableData.filter(data => data.datetime === inputDate);
    var filteredCity = tableData.filter(data => data.city === inputCity);
    var filteredState = tableData.filter(data => data.state === inputState);
    var filteredCountry = tableData.filter(data => data.country === inputCountry);
    var filteredShape = tableData.filter(data => data.shape === inputShape);

    // combine filters into one larger array of objects
    combinedArray = [...filteredDate,...filteredCity,...filteredState,...filteredCountry,...filteredShape];
    console.log(combinedArray);

    // clear table
    tbody.html("");

    // check if combinedArray is empty and if so return original tableData data
    // if not empty fill table with filtered results
    if (!Array.isArray(combinedArray) || !combinedArray.length) 
        buildTable(tableData); 
        else 
            buildTable(combinedArray); 

})