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
                                    <label for="city" class="col-sm-3 col-form-label">Ingresar destino:</label>
                                    <div class="col-sm-9">
                                        <select name = "dropdown" id="dropdownBox_city">
                                        </select>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="city" class="col-sm-3 col-form-label">Ingresar vehiculo:</label>
                                    <div class="col-sm-9">
                                        <select name = "dropdown" id="dropdownBox_vehicle">
                                        </select>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="city" class="col-sm-3 col-form-label">Ingresar fecha:</label>
                                    <div class="col-sm-9">
                                        <select name = "dropdown" id="dropdownBox_date">
                                        </select>
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
                                        <button id="btn_confirmarViaje" type="submit" class="btn btn-primary">Confirmar</button> 
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