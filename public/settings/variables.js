
export const URLbaseWirtrackAPI = "https://localhost:44385/api";
export const URLbaseOpenWeatherMapAPI = "https://api.openweathermap.org/data/2.5/weather?"


// manual local storage
export var allCities = [
    {
        "name": "Palermo",
        "id": 1,
        "lastModified": "2022-09-10T21:43:09.2049047",
        "isDeleted": false
    },
    {
        "name": "Belgrano",
        "id": 2,
        "lastModified": "2022-09-10T21:43:09.2049092",
        "isDeleted": false
    },
    {
        "name": "Balvanera",
        "id": 3,
        "lastModified": "2022-09-10T21:43:09.2049096",
        "isDeleted": false
    },
    {
        "name": "Retiro",
        "id": 4,
        "lastModified": "2022-09-10T21:43:09.2049099",
        "isDeleted": false
    },
    {
        "name": "Avellaneda",
        "id": 5,
        "lastModified": "2022-09-10T21:43:09.2049102",
        "isDeleted": false
    },
    {
        "name": "Quilmes",
        "id": 6,
        "lastModified": "2022-09-10T21:43:09.2049105",
        "isDeleted": false
    },
    {
        "name": "Berazategui",
        "id": 7,
        "lastModified": "2022-09-10T21:43:09.2049108",
        "isDeleted": false
    }
]

export var allTrips = [
    {
        "idFromCity": 1,
        "idToCity": 2,
        "idVehicle": 1,
        "dateTrip": "2022-09-13T10:00:00",
        "idStatus": 1,
        "id": 1,
        "lastModified": "2022-09-11T11:38:08.9879657",
        "isDeleted": false
    },
    {
        "idFromCity": 3,
        "idToCity": 2,
        "idVehicle": 2,
        "dateTrip": "2022-09-14T10:00:00",
        "idStatus": 1,
        "id": 2,
        "lastModified": "2022-09-11T11:38:08.987974",
        "isDeleted": false
    },
    {
        "idFromCity": 4,
        "idToCity": 2,
        "idVehicle": 2,
        "dateTrip": "2022-09-15T10:00:00",
        "idStatus": 1,
        "id": 3,
        "lastModified": "2022-09-11T11:38:08.9879744",
        "isDeleted": false
    },
    {
        "idFromCity": 1,
        "idToCity": 2,
        "idVehicle": 3,
        "dateTrip": "2022-09-16T10:00:00",
        "idStatus": 1,
        "id": 4,
        "lastModified": "2022-09-11T11:38:08.9879746",
        "isDeleted": false
    },
    {
        "idFromCity": 5,
        "idToCity": 4,
        "idVehicle": 3,
        "dateTrip": "2022-09-17T10:00:00",
        "idStatus": 1,
        "id": 5,
        "lastModified": "2022-09-11T11:38:08.9879749",
        "isDeleted": false
    },
    {
        "idFromCity": 1,
        "idToCity": 3,
        "idVehicle": 2,
        "dateTrip": "2022-09-18T10:00:00",
        "idStatus": 1,
        "id": 6,
        "lastModified": "2022-09-11T11:38:08.9879752",
        "isDeleted": false
    },
    {
        "idFromCity": 1,
        "idToCity": 2,
        "idVehicle": 1,
        "dateTrip": "2022-09-19T10:00:00",
        "idStatus": 1,
        "id": 7,
        "lastModified": "2022-09-11T11:38:08.9879755",
        "isDeleted": false
    }
]

export var allTripsJoined = 

[
    {
        "destination": "Palermo",
        "vehicle": "Peugeot 208",
        "dateTrip": "2022-09-13T10:00:00",
        "idStatus": 1,
        "id": 1,
        "lastModified": "2022-09-11T13:54:05.7435041Z",
        "isDeleted": false
    },
    {
        "destination": "Balvanera",
        "vehicle": "Mercedes Benz",
        "dateTrip": "2022-09-14T10:00:00",
        "idStatus": 1,
        "id": 2,
        "lastModified": "2022-09-11T13:54:05.743925Z",
        "isDeleted": false
    },
    {
        "destination": "Retiro",
        "vehicle": "Mercedes Benz",
        "dateTrip": "2022-09-15T10:00:00",
        "idStatus": 1,
        "id": 3,
        "lastModified": "2022-09-11T13:54:05.7439262Z",
        "isDeleted": false
    },
    {
        "destination": "Palermo",
        "vehicle": "Honda CG 125",
        "dateTrip": "2022-09-16T10:00:00",
        "idStatus": 1,
        "id": 4,
        "lastModified": "2022-09-11T13:54:05.7439265Z",
        "isDeleted": false
    },
    {
        "destination": "Avellaneda",
        "vehicle": "Honda CG 125",
        "dateTrip": "2022-09-17T10:00:00",
        "idStatus": 1,
        "id": 5,
        "lastModified": "2022-09-11T13:54:05.7439267Z",
        "isDeleted": false
    },
    {
        "destination": "Palermo",
        "vehicle": "Mercedes Benz",
        "dateTrip": "2022-09-18T10:00:00",
        "idStatus": 1,
        "id": 6,
        "lastModified": "2022-09-11T13:54:05.7439276Z",
        "isDeleted": false
    },
    {
        "destination": "Palermo",
        "vehicle": "Peugeot 208",
        "dateTrip": "2022-09-19T10:00:00",
        "idStatus": 1,
        "id": 7,
        "lastModified": "2022-09-11T13:54:05.7439281Z",
        "isDeleted": false
    }
]

/*
export function set_allPeliculas(peliculas){

    allPeliculas = peliculas

}

export function get_allPeliculas(peliculas){
    return allPeliculas
}

export function set_pelicula(peli){
    pelicula = peli
}*/