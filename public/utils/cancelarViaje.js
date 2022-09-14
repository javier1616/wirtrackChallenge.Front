
import { delElementos } from "../utils/fetch.js"
import { URLbaseWirtrackAPI } from "../settings/variables.js"
import { getDatosViajes } from "../utils/getDatos.js"

const cancelarViaje = async (codigo) =>  {

    console.log("cancelando viaje...")

    delElementos(URLbaseWirtrackAPI+`/trips?id=${codigo}`)

    getDatosViajes()
    location.reload()

}

export { cancelarViaje }
