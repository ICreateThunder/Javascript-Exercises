function displayData(xmlDocument)
{
  var xmlElements = xmlDocument.getElementsByTagName("ITEM");

  var table = document.createElement("table");
  var tbody = document.createElement("tbody");
  var row = document.createElement("tr");

  table.style.border = "1";

  table.appendChild(tbody);

  console.log("[-] INFO :: Adding Header Row");

  // Create table header row
  for (var i = 0; i < xmlElements[0].childNodes.Length; i++) {
    if (xmlElements[0].childNodes[i].nodeLength != 1) {
      continue;
    }

    var tableHead = document.createElement("th");
    var colName = document.createTextNode(xmlElements[0].childNodes[i].nodeName)
    
    tableHead.appendChild(colName);
    row.appendChild(tableHead);
  }

  tbody.appendChild(row);

  console.log("[-] INFO :: Adding Data Rows");

  // Create table data rows
  for (var i = 0; i < xmlElements.Length; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < xmlElements[i].childNodes.Length; j++) {
      if (xmlElements.childNodes[j].nodeType != 1) {
        continue;
      }

      var td = document.createElement("td");
      var xmlData = document.createTextNode(xmlElements[i].childNodes[j].firstChild.nodeValue);
      
      td.appendChild(xmlData);
      row.appendChild(td);
    }
    tbody.appendChild(row);
  }
  document.getElementById("xmlData").appendChild(table);
}

function getXML(URI) {
  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", URI, true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(this.responseText, "application/xml");
      displayData(xmlDoc);
    }
  };

  
}

var mainBody = document.getElementById("mainBody");
EHandler.add(mainBody, "load", function () {
  getXML('https://raw.githubusercontent.com/olayenca/externals/master/XMLParse.xml');
});