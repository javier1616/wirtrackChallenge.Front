
import { postElementos } from "../utils/fetch.js"
import { URLbaseWirtrackAPI } from "../settings/variables.js"

const cancelarViaje = async (codigo) =>  {

    alert(`Cancelando viaje. Código: "${codigo}"`)
    window.localStorage.setItem('codigoReprogramar',`{ "codigo" : ${codigo}}`);
    console.log("reprogramando viaje...")

    console.log("cancelando viaje...")

}

export { cancelarViaje }
