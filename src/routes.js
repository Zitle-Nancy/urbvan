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
            "stations":[
              {
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
        "schedule":{
          "am":[{
            "departure_time": "09:30:00",
            "arrival_time": "12:30:00",
            "timezone": "America/Mexico_City",
            "availability": [1,2,3,4,5],
            "stations":[
              {
              "name": "El Plaza Condesa",
              "departure_time": "14:30:00 - 05:00",
              "arrival_time": "15:30:00 - 05:00",
              "address": "Frente al Office Depot sobre Av Patriotismo",
              "description": "",
              "latitude": "19.4132082",
              "longitude": "-99.1741403",
              "order": 1
            },{
              "name": "Samara Shops",
              "departure_time": "14:30:00 - 05:00",
              "arrival_time": "15:30:00 - 05:00",
              "address": "En la bahía vehicular de la plaza",
              "description": "",
              "latitude": "19.4333112",
              "longitude": "-99.1385944",
              "order": 2
            }],
            "pm":[],
          }]
        }
      },
      {
        "origin": "Forum Buenavista",
        "destination": "Edificio Telefónica",
        "schedule":{
          "am":[{
            "departure_time": "08:30:00",
            "arrival_time": "10:30:00",
            "timezone": "America/Mexico_City",
            "availability": [1,2,3,4,5],
            "stations":[
              {
              "name": "Forum Buenavista",
              "departure_time": "08:30:00 - 05:00",
              "arrival_time": "08:00:00 - 05:00",
              "address": "Frente al metro Buenavista",
              "description": "",
              "latitude": "19.4495864",
              "longitude": "-99.1538777",
              "order": 1
            },{
              "name": "Edificio Telefónica",
              "departure_time": "10:30:00 - 05:00",
              "arrival_time": "11:00:00 - 05:00",
              "address": "En la entrada principal",
              "description": "",
              "latitude": "19.3586829",
              "longitude": "-99.2750108",
              "order": 2
            }],
            "pm":[],
          }]
        },
      },
      {
        "origin": "Plaza Coacalco",
        "destination": "Office Depot SF",
        "schedule":{
          "am":[{
            "departure_time": "07:30:00",
            "arrival_time": "09:30:00",
            "timezone": "America/Mexico_City",
            "availability": [1,2,3,4,5],
            "stations":[
              {
              "name": "Plaza Coacalco",
              "departure_time": "07:30:00 - 05:00",
              "arrival_time": "07:00:00 - 05:00",
              "address": "En el estacionamiento",
              "description": "",
              "latitude": "19.6266594",
              "longitude": "-99.0844761",
              "order": 1
            },{
              "name": "Office Depot SF",
              "departure_time": "09:30:00 - 05:00",
              "arrival_time": "10:00:00 - 05:00",
              "address": "En la entrada principal",
              "description": "",
              "latitude": "19.3772583",
              "longitude": "-99.256842",
              "order": 2
            }],
            "pm":[],
          }]
        },
      },
      {
        "origin": "Iztapalapa",
        "destination": "Samara Shops",
        "schedule":{
          "am":[{
            "departure_time": "06:30:00",
            "arrival_time": "07:50:00",
            "timezone": "America/Mexico_City",
            "availability": [1,2,3,4,5],
            "stations":[
              {
              "name": "Iztapalapa",
              "departure_time": "06:30:00 - 05:00",
              "arrival_time": "06:50:00 - 05:00",
              "address": "En la plaza principal",
              "description": "",
              "latitude": "19.3429234",
              "longitude": "-99.0851905",
              "order": 1
            },{
              "name": "Samara Shops",
              "departure_time": "07:50:00 - 05:00",
              "arrival_time": "08:00:00 - 05:00",
              "address": "En la bahía vehicular de la plaza",
              "description": "",
              "latitude": "19.3673996",
              "longitude": "-99.261613",
              "order": 2
            }],
            "pm":[],
          }]
        },
      }
    ]
  }
}

export default routesList;