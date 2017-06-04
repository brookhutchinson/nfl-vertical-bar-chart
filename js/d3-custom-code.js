// data
var data;


// get data from json
// convert data from json file into javascript object named "data"
d3.json("data/nfl.json", function(error, data) {
  // _______________________________________________________________________
  // handle error
  if (error) {
    // display error message
    d3.select("#error-message")
      // text
      .text("Attention: Problem loading data.")
      // background color
      .attr("class", "bg-danger")
      // font color
      .style("color", "#fff");

    // display error message in console
    return console.log(error);
  }


  // _______________________________________________________________________
  // success: retrieved data

  // create chart
  createChart(data);
});


function createChart(data) {
  // svg dimensions
  var svgHeight = "300";
  var svgWidth = "600";


  // make selection of svg container
  var svgContainer = d3.select("#svg-container");


  // create <svg> element inside svg container
  var svg = svgContainer.append("svg");


  // set <svg> element height and width dimensions
  svg.attr("height", svgHeight)
     .attr("width", svgWidth);
}