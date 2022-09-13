import { getElementos } from "../utils/fetch.js"
import { URLbaseWirtrackAPI, URLbaseOpenWeatherMapAPI } from "../settings/variables.js"

export const getDatosViajes = async () => {

    console.log("obteniendo datos de viajes...")

    let datos = await getElementos(URLbaseWirtrackAPI+"/Trips/join");
    window.localStorage.setItem('datosDeViajes',JSON.stringify(datos));

}

export const getDatosVehiculos = async () => {

    console.log("obteniendo datos de vehiculos...")

    let datos = await getElementos(URLbaseWirtrackAPI+"/Vehicles");
    window.localStorage.setItem('datosDeVehiculos',JSON.stringify(datos));

}

export const getDatosCiudades = async () => {

    console.log("obteniendo datos de ciudades...")

    let datos = await getElementos(URLbaseWirtrackAPI+"/Cities");
    window.localStorage.setItem('datosDeCiudades',JSON.stringify(datos));

}