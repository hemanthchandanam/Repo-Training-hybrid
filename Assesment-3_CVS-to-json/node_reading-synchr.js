var fs = require('fs');
var z;
var dataArray = new Array();
var dataValue = 0;
var headerOnly = true;
var columnArray;
var newRow = new Array();


// read the CSV file 
var data = fs.readFileSync('./files/datafile.csv', 'utf8')
z = data.split(",");
var dataLength = z.length;

for (var i = 0; i < 21; i++) {
  dataArray[i] = newRow;
  columnArray = new Array();
  
  if (dataArray[i].length != 0) {
    columnArray = dataArray[i];
  }
  for (var j = 0; j < 26; j++) {
    j = columnArray.length;
    var value = z[dataValue];
    if (z[dataValue] != null) {

      var datc = value.split("\n");
      if ((datc.length) == 2) {
        var fisrt = datc[0].toString();
        var sec = datc[1].toString();
        
        columnArray.push(fisrt);
        var indexRow = i;
        newRow = new Array();
        newRow.push(sec);
        dataArray[++indexRow] = newRow;
        
      } else {
        columnArray.push(value);
      }
      dataValue++;
    }
    }
  
  dataArray[i] = columnArray;
}

// -------------------------country papulation json object formation ------------------------------------------------");

function CP(country, population) {
  this.Country = country;
  this.Population = population;
}

var jsonCountryPapulation = function (dataArray) {
  var datSetArray = [];
  for (var c = 1; c < dataArray.length - 1; c++) {
    var row = dataArray[c];
    datSetArray.push(new CP(row[0], row[5]));
  }
  return datSetArray;
}

var jsonCP = JSON.stringify(jsonCountryPapulation(dataArray));

console.log("::: json Country and papulation ::: \n" + jsonCP);

// --------------------------country GDP------------------------------------------------");

function CGDP(country, gdp) {
  this.Country = country;
  this.GDP = gdp;
}

var jsonCountryGDP = function (dataArray) {
  var datSetArray = [];
  for (var c = 1; c < dataArray.length - 1; c++) {
    var row = dataArray[c];
    datSetArray.push(new CP(row[0], row[13]));
  }
  return datSetArray;
}

var jsonCGDP = JSON.stringify(jsonCountryGDP(dataArray));

console.log("::: json GDP  ::: \n" + jsonCGDP);


// -------------------------Country and Purchase-----------------------------------------------");

function CPurchase(country, purchase) {
  this.Country = country;
  this.Purchase = purchase;
}

var jsonCountryPurchase = function (dataArray) {
  var datSetArray = [];
  for (var c = 1; c < dataArray.length - 1; c++) {
    var row = dataArray[c];
    datSetArray.push(new CPurchase(row[0], row[23]));
  }
  return datSetArray;
}

var jsonCPurchase = JSON.stringify(jsonCountryPurchase(dataArray));

console.log("  ::: jsonCGDP  ::: " + jsonCPurchase);

// --------------------------------------------------------------

var Africa = ["Africa"];
var Anatarctica = ["Anatarctica"];
var Asia = ["Japan", "China", "Japan", "India", "Indonesia", "Russia", "Saudi Arabia", "Republic of Korea"];
var Europe = ["Germany", "France", "Italy", "United Kingdom", "Turkey", "European Union"];
var North_America = ["Canada", "USA", "Mexico"];
var South_America = ["Brazil", "Argentina","South Africa"];
var Australia = ["Australia"];



function continentalObj(cont, papulation, gdp) {
  this.Continental = cont;
  this.Papulation = papulation;
  this.GDP = gdp;
}



var continent_Asia = [],
  continent_Anatarctica = [],
  continent_Africa = [],
  continent_Europe = [], continent_North_America = [], continent_South_America = [], continent_Australia = [];


function aggrigateTheValues(array, cont, papulation, gdp) {
  if (array.length == 0) {
    array[0] = new continentalObj(cont, papulation, gdp);
  } else {
    array[0].Papulation = parseFloat(array[0].Papulation) +parseFloat( papulation);
    array[0].GDP = parseFloat(array[0].GDP)+ parseFloat(gdp);
  }
}



var generateContinentalWiseAggrigate = function (dataArray) {

  for (var i = 1; i < dataArray.length - 1; i++) {
    var row = dataArray[i];

    var country = row[0].replace(/"/g,"");
    var p = row[5].replace(/"/g,"");
    var gdp = row[11].replace(/"/g,"");

  
    if (Africa.indexOf(country) != -1) {
      aggrigateTheValues(continent_Africa, "Africa",parseFloat(p), parseFloat(gdp));

    } else if (Anatarctica.indexOf(country) != -1) {

      aggrigateTheValues(continent_Anatarctica, "Anatarctica",parseFloat(p), parseFloat(gdp));

    } else if (Europe.indexOf(country)!= -1) {
      aggrigateTheValues(continent_Europe, "Europe",parseFloat(p), parseFloat(gdp));

    } else if (North_America.indexOf(country) != -1) {
      aggrigateTheValues(continent_North_America, "NorthAmerica", parseFloat(p), parseFloat(gdp));

    } else if (South_America.indexOf(country) != -1) {
      aggrigateTheValues(continent_South_America, "SouthAmerica",parseFloat(p), parseFloat(gdp));

    } else if (Australia.indexOf(country) != -1) {
      aggrigateTheValues(continent_Australia, "Australia", parseFloat(p), parseFloat(gdp));
    } else if (Asia.indexOf(country) != -1) {
      aggrigateTheValues(continent_Asia, "Asia", parseFloat(p), parseFloat(gdp));

    } else 
      console.log("this country got missed  ::: ", row);
    
  }
}

var CG={};

generateContinentalWiseAggrigate(dataArray);
//CG["Africa"]=continent_Africa;
//CG["Anatarctica"]=continent_Anatarctica;
CG["Europe"]=continent_Europe;
CG["North America"]=continent_North_America;
CG["South America"]=continent_South_America;
CG["Australia"]=continent_Australia;
CG["Asia"]=continent_Asia;

console.log("-------------------------Country  Pu aggrigate purchase--and GDP---------------------------------------------");

var stringJson= JSON.stringify(CG);

console.log(stringJson);











