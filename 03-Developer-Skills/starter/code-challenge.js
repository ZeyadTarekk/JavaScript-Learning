"use strict";

//17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ...
function printForecast(arr) {
  for (let i = 0; i < arr.length; i++)
    console.log(`${arr[i]}ºC in ${i + 1} days`);
}

printForecast([12, 5, -5, 0, 4]);
