
import { getDatosVehiculos, getDatosCiudades } from "./getDatos.js"
import { enviarDatosReprogramarViaje } from "./enviarDatosReprogramarViaje.js";
import { getDatosViajes } from "./getDatos.js"


Date.prototype.addDays = function(noOfDays){
    var tmpDate = new Date(this.valueOf());
    tmpDate.setDate(tmpDate.getDate() + noOfDays);
    return tmpDate;
}

const reprogramarViaje = async (codigo) =>  {

    let title = document.getElementById("reprogram-modal-title")
    title.innerHTML = `Reprogramar viaje - Código de viaje: ${codigo}`

    console.log("reprogramando viaje...")

    getDatosVehiculos()
    getDatosCiudades()

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
    botonReprogramarViaje.addEventListener("click", async () => {
            console.log("btn reprogramarViaje clicked")
            enviarDatosReprogramarViaje(codigo)
            location.reload()
    })

}

export { reprogramarViaje }
