
import { postElementos } from "../utils/fetch.js"
import { URLbaseWirtrackAPI } from "../settings/variables.js"

const CrearCiudad = async () =>  {

    let city = document.getElementById("city").value
    let countryCode = document.getElementById("countryCode").value

    let body = `{
        "Name":"${city}",
        "CountryCode":"${countryCode}"}`

    console.log("enviando: ",body)
    console.log("endpoint: "+URLbaseWirtrackAPI+"/Cities")

    
    let jsonUsuario = await postElementos(URLbaseWirtrackAPI+"/Cities",body)

    console.log("Ciudad creada")

}

export { CrearCiudad }
