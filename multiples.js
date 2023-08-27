var MAX_SIZE = 25;

var makeTable = function(base) {
  var table = document.createElement("table");
  table.id = "numTable";
  var tbody = document.createElement("tbody");

  var num = 1;
  for (var r=0; r < MAX_SIZE; r++) {

    var trow = document.createElement("tr");
    for (var c=0; c < MAX_SIZE; c++) {

      var tcel = document.createElement("td");

      //console.log(base);
      if (base != 0 && num % base == 0) {
        tcel.style.background = "pink";
        //console.log("multiple");
      }//set
      tcel.innerText = num;
      num++;

      trow.appendChild(tcel);
    }//cols

    tbody.appendChild(trow);
  }//rows

  table.appendChild(tbody);

  return table;
}; //makeTable

var newTable = function() {
  var t = document.getElementById("numTable");
  if (t) {
    t.remove();
  }//get rid of old table
  console.log("new table");
  var base = parseInt(document.getElementById("base").value);
  var table = makeTable(base);
  document.getElementById("tarea").appendChild(table);
};//newTable

var setup = function() {
  var button = document.getElementById("go");
  button.onclick = newTable;
  newTable();
};//setup
