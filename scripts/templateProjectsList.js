/* get json */
fetch("../assets/json/projectList.json")
  .then(response => response.json())
  .then(json => console.log(json));


/* get template */
var templateObject = document.getElementById("podTemplate");

/* define clone */
var clone = templateObject.content.cloneNode(true);


/* appened template to body */
document.getElementById("main").appendChild(clone);