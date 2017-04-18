var s1 = 0;
var s2 = 0;
var index = 0;
var out = 0;
var loopcount = 0;

while (index <= 12) {
  if (index % 2 == 0) {
    s1 = s1 + index;
    console.log(s1);
    out = s1;
  } else {
    s2 = s2 + index;
    console.log(s2);
    out = s2;
  }

  index = index + 1;

  loopcount++;

  // show variable state at end of loop
  console.log("LoopCount: %s, Index: %s   s1: %s   s2: %s    out: %s", loopcount, index, s1, s2, out);


  // WRITE OUTPUT TO DOCUMENT
    // Find a <table> element with id="myTable":
  var table = document.getElementById("myTable");

  // Create an empty <tr> element and add it to the 1st position of the table:
  var row = table.insertRow(index-1);

  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);

  // Add some text to the new cells:
  cell1.innerHTML = "LoopCount: " + loopcount;
  cell2.innerHTML = "Index: " + index;
  cell3.innerHTML = "s1: " + s1;
  cell4.innerHTML = "s2: " + s2;
  cell5.innerHTML = "output: " + out;
}
