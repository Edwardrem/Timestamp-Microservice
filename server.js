// init project
var express = require('express');
var path = require('path');
var app = express();

//Use our public files
app.use(express.static('public'));

app.get("/", function(req, res){
  res.sendFile(__dirname + '/views/index.html');
});

//Returns true if the input is a number
var isNumeric = function(input) {
  return !isNaN(parseFloat(input)) && isFinite(input);
}

//Returns true if the given month is a month
var validMonth = function(month) {
  switch(month.toLower())
      {
    case "january":
      break;
    case "february":
      break;
    case "march":
      break;
    case "april":
      break;
    case "may":
      break;
    case "june":
      break;
    case "july":
      break;
    case "august":
      break;
    case "september":
      break;
    case "october":
      break;
    case "november":
      break;
    case "december":
      break;
  }
}

//Returns true if the format is unix, false if natural, and undefined if neither
var isUnixTimestamp = function(time)
{
  if(isNumeric(time))
  {
    return true;
  }
  //Check date?
  return false;
}

//Given a date or unix time, returns an object with both
var convertTime = function(time)
{
  var isUnix = isUnixTimestamp(time);
  if(isUnix === undefined)
    {
      return {unix: null, natural: null};
    }
  if(isUnix)
    {
      var date = new Date(parseInt(time));
      console.log(date);
      return {unix: time, natural: trimDate(date.toDateString())};
    }
  return  {unix: Date.parse(time), natural: time};
}

//Trims the day off the date. ex: Tuesday January 5, 1999 --> January 5, 1999
var trimDate = function(dateStr)
{
  var i = 0;
  while(i < dateStr.length && dateStr[i] !== " ")
    {
      i++;
    }
  i++;
  return dateStr.substring(i);
}

//Handle a specific request
app.get("/:data", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
  //valid url request?
  if(request.params && Object.keys(request.params).length > 0)
    {
      response.write(JSON.stringify(convertTime(request.params.data)));
    }
  response.end();
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
});
