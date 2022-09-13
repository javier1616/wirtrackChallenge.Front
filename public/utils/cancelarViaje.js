
import { delElementos } from "../utils/fetch.js"
import { URLbaseWirtrackAPI } from "../settings/variables.js"

const cancelarViaje = async (codigo) =>  {

    alert(`Cancelando viaje. Código: "${codigo}"`)
    console.log("cancelando viaje...")

    delElementos(URLbaseWirtrackAPI+`/trips?id=${codigo}`)

}

export { cancelarViaje }
