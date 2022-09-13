
import { postElementos } from "../utils/fetch.js"
import { URLbaseWirtrackAPI } from "../settings/variables.js"

const reprogramarViaje = async (codigo) =>  {

    alert(`Reprogramando viaje. Código: "${codigo}"`)
    window.localStorage.setItem('codigoReprogramar',`{ "codigo" : ${codigo}}`);
    console.log("reprogramando viaje...")

}

export { reprogramarViaje }
