 .# AmbientWeather-TrueSight
Establishes a connection to Ambient Weather and subscribes.  
When data is received, it is output to the console as well as POSTed to BMC's TrueSight Intelligence

Requires:

Node (at least that's how I did it, modified in Atom);

Ambient Weather's API wrapper (https://github.com/owise1/ambient-weather-api);

Ambient Weather API and Application Key (available from https://www.ambientweather.com/api.html);

TrueSight Intelligence User Login;

TrueSight Intelligence API Token (available from TrueSight Intelligence/Account/Product Security)
  
Place PWS2TSIFeed.js in any/a folder under "node_modules" after installing the wrapper
  
You may modify the metrics collected as described in the comments of the JS file.

usage:
node PWS2TSIFEED

be gentle, i'm not programmer!!!
