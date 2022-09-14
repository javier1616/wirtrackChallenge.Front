
import { postElementos } from "../utils/fetch.js"
import { URLbaseWirtrackAPI } from "../settings/variables.js"
import { getDatosVehiculos, getDatosCiudades } from "./getDatos.js"

Date.prototype.addDays = function(noOfDays){
    var tmpDate = new Date(this.valueOf());
    tmpDate.setDate(tmpDate.getDate() + noOfDays);
    return tmpDate;
}

const CrearViaje = async () =>  {

    let city = document.getElementById("dropdownBox_city").value
    let vehicle = document.getElementById("dropdownBox_vehicle").value
    let date = document.getElementById("dropdownBox_date").value

    let body = `{
        "IdCity":${city.split(';')[0]},
        "IdVehicle":${vehicle.split(';')[0]},
        "DateTrip": "${new Date(date).toISOString()}",
        "IdStatus":0}`

    console.log("enviando: ",body)
    
    console.log("endpoint: "+URLbaseWirtrackAPI+"/Trips")
    let jsonUsuario = await postElementos(URLbaseWirtrackAPI+"/Trips",body)

    console.log("Nuevo viaje creado")

}

const NuevoViaje = async () =>  {

    console.log("Creando viaje...")

    let botonConfirmarViaje = document.getElementById("btn_confirmarViaje")
    
        getDatosVehiculos()
        getDatosCiudades()

    console.log("waiting....")
    setTimeout(function(){

        let datosVehiculos = JSON.parse(window.localStorage.getItem('datosDeVehiculos'))
        console.log(datosVehiculos)
        let datosCiudades = JSON.parse(window.localStorage.getItem('datosDeCiudades'))
        console.log(datosCiudades)

        const today = new Date()
    
        let fechas = []
        
        for (var i = 1; i < 10; i++) {
            fechas.push(today.addDays(i))
        }

        let selectorFecha = document.getElementById("dropdownBox_date")
        let selectorVehiculo = document.getElementById("dropdownBox_vehicle")
        let selectorCiudad = document.getElementById("dropdownBox_city")

        fechas.forEach( dia => {
            selectorFecha.innerHTML += `<option value = "${dia}" selected>${dia}</option>`
        })

        datosVehiculos.forEach( elem => {
            selectorVehiculo.innerHTML += `<option value = "${elem.id};${elem.type};${elem.model};${elem.carLicense}" selected>${elem.type};${elem.model};${elem.carLicense}</option>`
        })

        datosCiudades.forEach( elem => {
            selectorCiudad.innerHTML += `<option value = "${elem.id};${elem.name};${elem.countryCode}" selected>${elem.name};${elem.countryCode}</option>`
        })

        botonConfirmarViaje.addEventListener("click",() => {
            console.log("generando nuevo viaje...")
            CrearViaje()
            getDatosViajes()
        })

        console.log("done")

    },5000);

}

export { NuevoViaje }
