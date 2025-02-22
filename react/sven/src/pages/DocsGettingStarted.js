import React from 'react';
import DocsMenu from './DocsMenu';

function DocsGettingStarted() {
    return (
        <div className='row'>
            <div className='col-4'>
                <div class="offcanvas-md offcanvas-start" id="docsSidebar" data-bs-scroll="true">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="docsSidebarLabel">Menu</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body pt-0 align-items-center flex-column">
                        <DocsMenu />
                    </div>
                </div>
            </div>
            <div className='col-8'>
                <div class="mb-5" id="intro">
                    <h1 class="mb-2">Inicio Rápido</h1>
                    <p>
                        Para poder usar la aplicacion lo que primero tiene que hacer es registrarte con tu nombre, email y password.
                    </p>
                    <img src="/images/01-registrarse-min.jpg" class="img-fluid img-thumbnail" style={{width: '60%'}} />




                    <p class="mt-5">
                        Una vez registrado pocedes a loguearte para el ingreso a la aplicación.
                    </p>
                    <img src="/images/02-iniciar-sesion-min.jpg" class="img-fluid img-thumbnail" style={{width: '60%'}}  />




                    <p class="mt-5">
                        Una vez que ingresamos a la aplicación procedemos a agregar una aplicacion donde nos sale un formulario donde ingresamos el nombre de nuestra aplicación.
                    </p>
                    <p>
                        La aplicación se crea con <b>MVC C# .Net 8</b>.
                    </p>
                    <p>
                        La aplicación es de tipo <b>privada</b>, donde los usuarios se registra por el administrador.
                    </p>
                    <img src="/images/03-agregar-aplicacion-min.jpg" class="img-fluid" style={{width: '60%'}}  />




                    <p class="mt-5">
                        Una vez creada la aplicacion aparece el nombre y una url temporal, ademas de opciones como "Publicar" y "Editor", ediatar y eliminar.
                    </p>
                    <p>
                        <b>Publicar:</b> lo que hace es compilar la aplicación y publicarla.
                    </p>
                    <p>
                        <b>Editor:</b> lo que hace es abrir un editor de código en linea.
                    </p>
                    <img src="/images/04-lista-aplicaciones-min.jpg" class="img-fluid img-thumbnail" style={{width: '60%'}}  />





                    <p class="mt-5">
                        Cunado creamos lla aplicación tambien se crea una base de datos, donde se visualizan las credenciales, ademas tenemos un diseñador y manager.
                    </p>
                    <img src="/images/05-base-datos-min.jpg" class="img-fluid" style={{width: '60%'}}  />




                    <p class="mt-5">
                        En el Manager de base de datos podemos hacer consultas y agregar tablas.
                    </p>
                    <img src="/images/06-manager-db-min.jpg" class="img-fluid img-thumbnail" style={{width: '60%'}}  />





                    <p class="mt-5">
                        Para agregar una tabla debemos seleccionar el esquema, nombre de la tabla y una dirección.
                    </p>
                    <img src="/images/07-agregar-tabla-min.jpg" class="img-fluid img-thumbnail" style={{width: '60%'}}  />




                    <p class="mt-5">
                        Una vez creada la tabla, vamos al editor de tabla, donde podemos agregar columnas y relacionar con otras tablas.
                    </p>
                    <img src="/images/08-editar-tabla-min.jpg" class="img-fluid img-thumbnail" style={{width: '60%'}}  />



                    <p class="mt-5">
                        En el diseñador podemos agregar Diagrama de Entidad Relación, donde podemos ver graficamente la relacion de las tablas.
                    </p>
                    <img src="/images/08-erd-1-min.jpg" class="img-fluid img-thumbnail" style={{width: '60%'}}  />






                    <p class="mt-5">
                        En el diseñador podemos ver Diagrama de Entidad Relación y tambien podemos agregar mas diagramas.
                    </p>
                    <img src="/images/08-erd-2-min.jpg" class="img-fluid img-thumbnail" style={{width: '60%'}}  />






                    <p class="mt-5">
                        En el editor de código podemos editar el código fuente.
                    </p>
                    <img src="/images/09-editor-codigo-min.jpg" class="img-fluid img-thumbnail" style={{width: '60%'}}  />






                    <p class="mt-5">
                        Esta es la ventana de publicación.
                    </p>
                    <img src="/images/10-publicacion-min.jpg" class="img-fluid img-thumbnail" style={{width: '60%'}}  />






                    <p class="mt-5">
                        Ventana de donde podemos ya la aplicación funcionando.
                    </p>
                    <img src="/images/11-app-min.jpg" class="img-fluid img-thumbnail" style={{width: '60%'}}  />















                </div>
            </div>
        </div>
    )
}

export default DocsGettingStarted;