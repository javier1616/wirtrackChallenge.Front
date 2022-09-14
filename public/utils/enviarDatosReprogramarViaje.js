import { putElementos } from "../utils/fetch.js"
import { URLbaseWirtrackAPI } from "../settings/variables.js"

const enviarDatosReprogramarViaje = async (codigo) =>  {

    console.log("waiting...")

        let datosVehiculos = JSON.parse(window.localStorage.getItem('datosDeVehiculos'))
        console.log(datosVehiculos)
        let datosCiudades = JSON.parse(window.localStorage.getItem('datosDeCiudades'))
        console.log(datosCiudades)

        let trips = JSON.parse(window.localStorage.getItem('datosDeViajes')) 
        let updateTrip
        let vehicle
        let city

        //obtengo el viaje, luego el id de vehiculo y de la ciudad
        trips.forEach( elem => {
        if(elem.id == codigo) updateTrip = elem
        })
        
        datosVehiculos.forEach( elem => {
        if(elem.carLicense == updateTrip.carLicense) vehicle = elem
        })

        datosCiudades.forEach( elem =>{
        if(elem.name == updateTrip.destination) city = elem
        })

        let date = document.getElementById("dropdownBox").value

        let body = `{
            "idCity": ${city.id},
            "idVehicle": ${vehicle.id},
            "dateTrip": "${new Date(date).toISOString()}",
            "idStatus": ${updateTrip.idStatus},
            "id": ${updateTrip.id}}`

        console.log("enviando: ",body)
        
        console.log("endpoint: "+URLbaseWirtrackAPI+`/Trips/id?id=${codigo}`)
        let jsonUsuario = putElementos(URLbaseWirtrackAPI+`/Trips/id?id=${codigo}`,body)      
        console.log("Viaje reprogramado")

}

export { enviarDatosReprogramarViaje }