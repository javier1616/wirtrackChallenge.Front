export const ModalViajes =
    `<div class="modal fade" id="modalViajes">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">

                <!-- cabecera del diálogo -->
                <div class="modal-header">
                    <h4 class="modal-title">Nuevo viaje</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- cuerpo del diálogo -->
                    <div class="modal-body">
                        <div class="container-fluid">   
                            <form>
                                <div class="mb-3 row">
                                    <label for="toCity" class="col-sm-3 col-form-label">Destino:</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="toCity">
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="vehicle" class="col-sm-3 col-form-label">Vehiculo (patente):</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="vehicle">
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="date" class="col-sm-3 col-form-label">Fecha:</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="date">
                                    </div>
                                </div>
                                <!--div class="mb-3 row">
                                    <label for="clave" class="col-sm-3 col-form-label">Ingrese clave:</label>
                                    <div class="col-sm-9">
                                        <input type="password" class="form-control" id="clave">
                                    </div>
                                </div-->
                                <div class="mb-3 row">
                                    <div class="offset-sm-3 col-sm-9">
                                        <button id="btn_confirmarNuevoViaje" type="submit" class="btn btn-primary">Confirmar</button> 
                                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cancelar</button>
                                    </div>
                                </div>  
                            </form>
                        </div>            
                    </div>

                <!-- pie del diálogo -->
                    <div class="modal-footer">
                        <p>Entrada al sitio</p>
                    </div>

                </div>
            </div>
        </div> 
    </div>`