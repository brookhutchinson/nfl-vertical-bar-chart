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


  // _______________________________________________________________________
  // test: loop through each object in data, write to console
  data.forEach(function(d) {
    console.log(d.Team + ' ' + d.W);
  });
});