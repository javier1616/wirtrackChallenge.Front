
import { getElementos, postElementos } from "../utils/fetch.js"
import { URLbaseWirtrackAPI } from "../settings/variables.js"


Date.prototype.addDays = function(noOfDays){
    var tmpDate = new Date(this.valueOf());
    tmpDate.setDate(tmpDate.getDate() + noOfDays);
    return tmpDate;
}

const reprogramarViaje = async (codigo) =>  {

    let title = document.getElementById("reprogram-modal-title")
    title.innerHTML = `Reprogramar viaje - Código de viaje: ${codigo}`

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
    botonReprogramarViaje.addEventListener("click", async () => {
        console.log("btn reprogramarViaje clicked")
        let trip = await getElementos(URLbaseWirtrackAPI+`/Trips/id?id=${codigo}`)

        let date = document.getElementById("dropdownBox").value

        let body = `{
            "idDestinationCity": ${trip.idDestinationCity},
            "idVehicle": ${trip.idVehicle},
            "dateTrip": "${new Date(date).toISOString()}",
            "idStatus": ${trip.idStatus},
            "id": ${trip.id}}`
    
        console.log("enviando: ",body)
        
        console.log("endpoint: "+URLbaseWirtrackAPI+"/Trips")
        let jsonUsuario = await putElementos(URLbaseWirtrackAPI+`/Trips?id=${codigo}`,body)
    
        console.log("Viaje reprogramado")

    })

}

export { reprogramarViaje }
