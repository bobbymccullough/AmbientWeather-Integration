//establish the Ambient Weather API Environment and ensures all needed libraries are available
require('dotenv').config()
const AmbientWeatherApi = require('../lib/index')

// helper function
function getName (device) {
  return device.info.name
}

//establishes the Ambient Weather API Key and Application Key
const apiKey = process.env.AMBIENT_WEATHER_API_KEY || '<AMBIENT WEATHER API KEY GOES HERE>'
const api1 = new AmbientWeatherApi({
  apiKey,
  applicationKey: process.env.AMBIENT_WEATHER_APPLICATION_KEY || '<AMBIENT WEATHER APPLICATION KEY GOES HERE>'
})

//establishes a connection to Ambient weather and reports back that its done so
api1.connect()
api1.on('connect', () => console.log('Connected to Ambient Weather Realtime API!'))

//shows how many devices are subscribed and their names
api1.on('subscribed', data => {
  console.log('Subscribed to ' + data.devices.length + ' device(s): ')
  console.log(data.devices.map(getName).join(', '))
})

//when data is received from the connection, it is output to the console...
//using the layout below.  The POST portion of the program is also called...
//whereby a connection to TrueSight is established so that the data array...
//can be posted.
api1.on('data', data => {
  console.log("UTC DateTime   :  " + data.dateutc)
  console.log("PWS            :  " + getName(data.device))
  console.log("Temperature    :  " + data.tempf)
  console.log("Feels Like     :  " + data.feelsLike)
  console.log("Humidity       :  " + data.humidity)
  console.log("Barometer      :  " + data.baromrelin)
  console.log("Hourly Rain    :  " + data.hourlyrainin)
  console.log("Daily Rain     :  " + data.dailyrainin)
  console.log("Weekly Rain    :  " + data.weeklyrainin)
  console.log("Monthly Rain   :  " + data.monthlyrainin)
  console.log("Wind Direction :  " + data.winddir)
  console.log("Wind Speed     :  " + data.windspeedmph)
  console.log("Wind Gust      :  " + data.windgustmph)
  console.log("Max Daily Gust :  " + data.maxdailygust)
  console.log("UV Index       :  " + data.uv)
  console.log("Solar Radiation:  " + data.solarradiation)
  //console.log(data.yearlyrainin) - not available
  //console.log(data.windgustdir) - not available

//This begins the "POST" portion of the program
  const request = require('request')

//Establishes the POST header
  const headers2 = {
      'Content-Type': 'application/json'
  }

//Establishes the data array that will be sent to TrueSight Intelligence...
//This section can be modified to include only those metrics you wish...
//This list was created for the Ambient Weather WS-2902 system, your system...
//may have other/different fields than those listed.  If you use a different system...
//it would require modifying the "console.log" section above displaying the information
  const vdataArray = [
       [
          "api.ambientweather.net",
          "tempf",
          data.tempf,
          data.dateutc,
          {"app_id":getName(data.device)}
       ],
       [
          "api.ambientweather.net",
          "feelsLike",
          data.feelsLike,
          data.dateutc,
          {"app_id":getName(data.device)}
       ],[
          "api.ambientweather.net",
          "humidity",
          data.humidity,
          data.dateutc,
          {"app_id":getName(data.device)}
       ],
       [
          "api.ambientweather.net",
          "baromrelin",
          data.baromrelin,
          data.dateutc,
          {"app_id":getName(data.device)}
       ],
       [
          "api.ambientweather.net",
          "hourlyrainin",
          data.hourlyrainin,
          data.dateutc,
          {"app_id":getName(data.device)}
       ],
       [
          "api.ambientweather.net",
          "dailyrainin",
          data.dailyrainin,
          data.dateutc,
          {"app_id":getName(data.device)}
       ],
       [
          "api.ambientweather.net",
          "weeklyrainin",
          data.weeklyrainin,
          data.dateutc,
          {"app_id":getName(data.device)}
       ],
       [
          "api.ambientweather.net",
          "monthlyrainin",
          data.monthlyrainin,
          data.dateutc,
          {"app_id":getName(data.device)}
       ],
       [
          "api.ambientweather.net",
          "winddir",
          data.winddir,
          data.dateutc,
          {"app_id":getName(data.device)}
       ],
       [
          "api.ambientweather.net",
          "windspeedmph",
          data.windspeedmph,
          data.dateutc,
          {"app_id":getName(data.device)}
       ],
       [
          "api.ambientweather.net",
          "windgustmph",
          data.windgustmph,
          data.dateutc,
          {"app_id":getName(data.device)}
       ],
       [
          "api.ambientweather.net",
          "maxdailygust",
          data.maxdailygust,
          data.dateutc,
          {"app_id":getName(data.device)}
       ],
       [
          "api.ambientweather.net",
          "uv",
          data.uv,
          data.dateutc,
          {"app_id":getName(data.device)}
       ],
       [
          "api.ambientweather.net",
          "solarradiation",
          data.solarradiation,
          data.dateutc,
          {"app_id":getName(data.device)}
       ]
    ]

//Establishes the parameters for the POST action
  var options = {
    url: 'https://api.truesight.bmc.com/v1/measurements',
    method: 'POST',
    headers: headers2,
    body: vdataArray,
    json: true,
    auth: {
      'user': '<TRUESIGHT INTELLIGENCE USER LOGIN GOES HERE>',
      'pass': '<TRUESIGHT INTELLIGENCE APP TOKEN GOES HERE>'
      }
  }

//Establishes the callback function and how an error is handled
function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
          console.log(body)
      }
  }

//POST primary action that adds a measurement(s) to TrueSight
request(options, callback)
});

//Establishes the Ambient Weather subscription
api1.subscribe(apiKey)
