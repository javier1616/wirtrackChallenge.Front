export const ModalVehiculos =
    `<div class="modal fade" id="modalVehiculos">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">

                <!-- cabecera del diálogo -->
                <div class="modal-header">
                    <h4 class="modal-title">Nuevo Vehiculo</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- cuerpo del diálogo -->
                    <div class="modal-body">
                        <div class="container-fluid">   
                            <form>
                                <div class="mb-3 row">
                                    <label for="type" class="col-sm-3 col-form-label">Tipo:</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="type">
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="model" class="col-sm-3 col-form-label">Modelo:</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="model">
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="carLicense" class="col-sm-3 col-form-label">Patente:</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="carLicense">
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <div class="offset-sm-3 col-sm-9">
                                        <button id="btn_confirmarNuevoVehiculo" type="submit" class="btn btn-primary">Confirmar</button> 
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