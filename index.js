// https://stackoverflow.com/questions/2753732/how-to-access-svg-elements-with-javascript

const map_element = document.getElementById("map");
//the line above does the same thing as: const map_element = $("#map")

// It's important to add an load event listener to the object,
// as it will load the svg doc asynchronously
map_element.addEventListener("load", function() {

  // get the inner DOM of Canada_location_map.svg
  let svgDoc = map_element.contentDocument;

  // get the Ontario element by id
  let ontario = svgDoc.getElementById("Ontario");
  // add behaviour to the ontario element
  ontario.addEventListener("mousedown", function() {
    // console.log('hello from Ontario!');
    window.location.href = "Ontario-Map/"; // Redirects to the Ontario-Map page
  }, false);

  // get the Manitoba element by id
  let manitoba = svgDoc.getElementById("Manitoba");
  // add behaviour to the manitoba element
  manitoba.addEventListener("mousedown", function() {
    // console.log('hello from Manitoba!')
    window.location.href = "Manitoba-Map/"; // Redirects to the Manitoba-Map page
  }, false);

}, false);
