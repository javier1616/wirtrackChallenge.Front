
import { postElementos } from "../utils/fetch.js"
import { URLbaseWirtrackAPI } from "../settings/variables.js"


Date.prototype.addDays = function(noOfDays){
    var tmpDate = new Date(this.valueOf());
    tmpDate.setDate(tmpDate.getDate() + noOfDays);
    return tmpDate;
}

const reprogramarViaje = async (codigo) =>  {

    alert(`Reprogramando viaje. Código: "${codigo}"`)

    console.log("reprogramando viaje...")

    const today = new Date()
    
    let fechas = []

    for (var i = 1; i < 10; i++) {
        fechas.push(today.addDays(i))
    }

    let selectorFecha = document.getElementById("dropdownBox")

    fechas.forEach( dia => {
        selectorFecha.innerHTML += `<option value = "${dia}" selected>${dia}</option>`
    })

    let botonReprogramarViaje = document.getElementById("btn_confirmarReprogramarViaje")
    botonReprogramarViaje.addEventListener("click",() => {
        console.log("btn reprogramarViaje clicked")
    })

}

export { reprogramarViaje }
