.# AmbientWeather-TrueSight

Integration between Ambient Weather's API for a WS-2902 station and TrueSight Intelligence

Can be used for other Ambient Weather stations/systems but could require modifying the console.log output of the array as well as the array.

Establishes a connection to Ambient Weather and subscribes.  
When data is received, it is output to the console as well as POSTed to BMC's TrueSight Intelligence

Requires:

Node (at least that's how I did it, modified in Atom);

Ambient Weather's API wrapper (https://github.com/owise1/ambient-weather-api);

Ambient Weather API and Application Key (current information to obtain is available from https://www.ambientweather.com/api.html);

TrueSight Intelligence User Login;

TrueSight Intelligence API Token (available from TrueSight Intelligence/Account/Product Security)
  
Its very possible that some other libraries were hit other than those listed (i'm not a programmer).
Would love someone to test this and let me know if more is required;

Place PWS2TSIFeed.js in any/a folder immediately under "node_modules" after installing the wrapper
  
You may modify the metrics collected as described in the comments of the JS file.

usage:
node PWS2TSIFEED

be gentle, i'm not programmer!!!
