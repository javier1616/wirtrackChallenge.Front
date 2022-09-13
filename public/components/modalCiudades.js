export const ModalCiudades =
    `<div class="modal fade" id="modalCiudades">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">

                <!-- cabecera del diálogo -->
                <div class="modal-header">
                    <h4 class="modal-title">Nueva Ciudad</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- cuerpo del diálogo -->
                    <div class="modal-body">
                        <div class="container-fluid">   
                            <form>
                                <div class="mb-3 row">
                                    <label for="city" class="col-sm-3 col-form-label">Ciudad:</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="city">
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="countryCode" class="col-sm-3 col-form-label">Codigo de pais:</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="countryCode">
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <div class="offset-sm-3 col-sm-9">
                                        <button id="btn_confirmarNuevaCiudad" type="submit" class="btn btn-primary">Confirmar</button> 
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