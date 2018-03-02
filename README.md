# AmbientWeather-TrueSight Integration

Integration between Ambient Weather's API for a WS-2902 station and BMC's TrueSight Intelligence analytic tool.

Can be used for other Ambient Weather stations/systems but could require modifying the console.log output of the array as well as the POST of the array.

Establishes a connection to Ambient Weather and subscribes.<br/>
When data is received, it is output to the console as well as POSTed to BMC's TrueSight Intelligence

Fixed a problem where Ambient does some system maintenance every day and the system restarts/resets.  This app would loose connection but would always reconnect.  The issue is it wouldn't "resubscribe."  I moved the subscribe section up to be a part of the Connect section (which re-ran every time properly) and so far it seems to have worked.

Contents:

License.md - ok, whatever<br/>
PWS2TSIFeed.bat - batch to launch it the way I do from my laptop <br/>
PWS2TSIFeed.js - javascript integration app <br/>
README.md - this file

Requires:

Node (at least that's how I did it, modified in Atom)<br/>
Ambient Weather's API wrapper - https://github.com/owise1/ambient-weather-api<br/>
Ambient Weather API and Application Key - current information to obtain is available from:  https://www.ambientweather.com/api.html)<br/>
TrueSight Intelligence User Login<br/>
TrueSight Intelligence API Token - available from TrueSight Intelligence/Account/Product Security
  
Place PWS2TSIFeed.js in any/a folder immediately under "node_modules" after installing the wrapper
  
You may modify the metrics collected as described in the comments of the JS file.

usage:
node PWS2TSIFEED

be gentle, i'm not programmer!!!
Its very possible that some other libraries were hit other than those listed.  
Would love someone to test this and let me know if more is required;
