
import { postElementos } from "../utils/fetch.js"
import { URLbaseWirtrackAPI } from "../settings/variables.js"
import { getDatosVehiculos, getDatosCiudades } from "./getDatos.js"

const CrearViaje = async () =>  {

    console.log("Creando viaje...")

    console.log("waiting....")
    setTimeout(function(){
        getDatosVehiculos()
        getDatosCiudades()
    },5000);

    let datosVehiculos = JSON.parse(window.localStorage.getItem('datosDeVehiculos'))
    console.log(datosVehiculos)
    let datosCiudades = JSON.parse(window.localStorage.getItem('datosDeCiudades'))
    console.log(datosCiudades)

}

export { CrearViaje }
