
import { postElementos } from "../utils/fetch.js"
import { URLbaseWirtrackAPI } from "../settings/variables.js"

const CrearVehiculo = async () =>  {

    let tipo = document.getElementById("type").value
    let modelo = document.getElementById("model").value
    let patente = document.getElementById("carLicense").value

    let body = `{
        "Type":"${tipo}",
        "CarLicense":"${patente}",
        "Model":"${modelo}"}`

    console.log("enviando: ",body)
    console.log("endpoint: "+URLbaseWirtrackAPI+"/Vehicles/create")

    
    let jsonUsuario = await postElementos(URLbaseWirtrackAPI+"/Vehicles/create",body)

    console.log("vehiculo creado")

}

export { CrearVehiculo }
