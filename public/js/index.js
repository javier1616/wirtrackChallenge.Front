import { Header } from "../components/header.js"
import { Footer } from "../components/footer.js"
import { getDatosViajes } from "../utils/getDatos.js"
import { updateWeather } from "../utils/fetch.js"
import { URLbaseWirtrackAPI } from "../settings/variables.js"
import { ModalViajes } from "../components/modalViajes.js" 
import { ModalCiudades } from "../components/modalCiudades.js" 
import { ModalVehiculos } from "../components/modalVehiculos.js" 
import { CrearVehiculo } from "../utils/crearVehiculo.js"
import { CrearViaje } from "../utils/crearViaje.js"
import { CrearCiudad } from "../utils/crearCiudad.js"
import { cancelarViaje} from "../utils/cancelarViaje.js"
import { reprogramarViaje} from "../utils/reprogramarViaje.js"


window.onload = () => {

    console.log('Page Loaded')

    let headerTag = document.getElementById("header")
    headerTag.innerHTML += Header

    let footerTag = document.getElementById("footer")
    footerTag.innerHTML += Footer

    updateWeather(URLbaseWirtrackAPI+"/cities")

    localStorage.clear()
    getDatosViajes()

    let datosParaTabla = []

    let modalViaje = document.getElementById("modal_viajes")
    modalViaje.innerHTML += ModalViajes
    let modalCiudades = document.getElementById("modal_ciudades")
    modalCiudades.innerHTML += ModalCiudades
    let modalVehiculos = document.getElementById("modal_vehiculos")
    modalVehiculos.innerHTML += ModalVehiculos

    //tiene que estar despues de haber insertado los modals
    let botonCrearViaje = document.getElementById("btn_confirmarNuevoViaje")
    let botonCrearCiudad = document.getElementById("btn_confirmarNuevaCiudad")
    let botonCrearVehiculo = document.getElementById("btn_confirmarNuevoVehiculo")

    console.log("waiting....")
    setTimeout(function(){

        let datosViajes = JSON.parse(window.localStorage.getItem('datosDeViajes'))
        console.log(datosViajes)
        datosViajes.forEach(elem => {

            datosParaTabla.push([elem.id,elem.dateTrip,elem.destination,elem.idStatus,elem.vehicle,elem.vehicleType,elem.carLicense,elem.weatherConditions])
        })


        const grid = new gridjs.Grid({
            columns: ["Codigo","Fecha de Viaje","Destino","Status","Vehiculo","Tipo","Patente","Clima",
                { 
                name: 'Actions',
                formatter: (cell, row) => {
                    return [gridjs.h('button', {
                        className: 'btn btn-primary btn-cell',
                        id:'btn_reprogramar',
                        onClick: () => reprogramarViaje(row.cells[0].data)
                        }, 'Reprogramar'),
                        gridjs.h('button', {
                            className: 'btn btn-primary btn-cell',
                            id:'btn_cancelar',
                            onClick: () => cancelarViaje(row.cells[0].data)
                        }, 'Cancelar')];
                }
                },
            ],
            data: datosParaTabla,
            pagination: {
                enabled: true,
                limit: 5
            },
            sort:true,
            search:{
                enabled:true
            },

        }).render(document.getElementById("main"));

        console.log("done")

    }, 5000);

    
    botonCrearViaje.addEventListener("click",() => {
        console.log("btn viaje clicked")
        CrearViaje()
    })

    botonCrearCiudad.addEventListener("click",() => {
        console.log("btn ciudad clicked")
        CrearCiudad()
    })

    botonCrearVehiculo.addEventListener("click",() => {
        console.log("btn vehiculo clicked")
        CrearVehiculo()
    })


};