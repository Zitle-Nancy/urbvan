const routesList = {
  "errors": [],
  "body": {
    "links": {
      "next": null,
      "previous": null
    },
    "count": 1,
    "results": [{
      "key": "title",
      "value": "Santa Fe"
    }],
    "routes": [
      {
        "origin": "Juanacatlan",
        "destination": "Office Depot",
        "schedule":{
          "am":[{
            "departure_time": "14:30:00",
            "arrival_time": "15:30:00",
            "timezone": "America/Mexico_City",
            "availability": [1,2,3,4,5],
            "stations":[{
              "name": "Juanacatlan",
              "departure_time": "14:30:00 - 05:00",
              "arrival_time": "15:30:00 - 05:00",
              "address": "Frente al Office Depot sobre Av Patriotismo",
              "description": "",
              "latitude": "19.3990994",
              "longitude": "-99.2138232",
              "order": 1
            },{
              "name": "Samara Shops",
              "departure_time": "14:30:00 - 05:00",
              "arrival_time": "15:30:00 - 05:00",
              "address": "En la bahía vehicular de la plaza",
              "description": "",
              "latitude": "19.3673996",
              "longitude": "-99.261613",
              "order": 2
            }],
            "pm":[],
          }]
        },
      },
      {
        "origin": "El Plaza Condesa",
        "destination": "Samara Shops",
      },
      {
        "origin": "Forum Buenavista",
        "destination": "Edificio Telefónica",
      },
      {
        "origin": "Plaza Coacalco",
        "destination": "Office Depot SF",
      },
      {
        "origin": "Iztapalapa",
        "destination": "Samara Shops",
      }
    ]
  }
}

export default routesList;
