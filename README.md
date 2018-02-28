.# AmbientWeather-TrueSight
Establishes a connection to Ambient Weather and subscribes.  
When data is received, it is output to the console as well as POSTed to BMC's TrueSight Intelligence

Requires:
  Node (at least that's how I did it, modified in Atom)
  Ambient Weather's API wrapper
  Ambient Weather API and Application Key
  TrueSight Intelligence User Login
  TrueSight Intelligence API Token
  
Place PWS2TSIFeed.js in folder under "node_modules" after installing the wrapper
  
You may modify the metrics collected as described in the comments.

usage:
node PWS2TSIFEED

be gentle, i'm not programmer!!!
