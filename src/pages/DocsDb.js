import React from 'react';
import DocsMenu from './DocsMenu';

function DocsDb() {
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

                <h1 class="mb-2">Manegador de base de datos</h1>
                <p>
                    Un manejador de base de datos, también conocido como sistema de gestión de bases de datos (SGBD o DBMS, por sus siglas en inglés), es un software que permite a los usuarios crear, leer, actualizar y eliminar datos en una base de datos. Estos sistemas proporcionan una interfaz entre el usuario y la base de datos, facilitando la administración y manipulación de los datos de manera eficiente y segura.
                </p>
                <img src="/images/manager_db.jpg" className='img-fluid' />
                <p>
                    Un diagrama de entidad-relación (ERD, por sus siglas en inglés) es una representación visual de los datos y sus relaciones en una base de datos. Los ERD son herramientas esenciales en el diseño de bases de datos, ya que ayudan a definir la estructura de los datos y a entender cómo se relacionan entre sí.
                </p>
                <img src="/images/erd.jpg" className='img-fluid' />
            </div>
        </div>
    )
}

export default DocsDb;