import React from 'react';
import DocsMenu from './DocsMenu';

function Docs() {
    return (
        <div>
            <div className='row'>
                <div className='col-4'>
                    <div class="offcanvas-md offcanvas-start" id="docsSidebar" data-bs-scroll="true">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="docsSidebarLabel">Menu</h5>

                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body pt-0 align-items-center flex-column">
                            <DocsMenu/>
                        </div>
                    </div>
                </div>
                <div className='col-8'>

                    <div class="mb-5" id="intro" style={{ height: 'calc(100vh - 210px)' }}>
                        <h1 class="mb-2">Acerca de SVEN</h1>
                        <p>
                            Bienvenidos a SVEN, tu plataforma integral de desarrollo en la nube. Nuestro entorno de desarrollo (IDE) cuenta con un potente editor de código y un gestor de bases de datos integrado. SVEN proporciona todas las herramientas necesarias para desarrollar aplicaciones de manera eficiente, siguiendo las mejores prácticas de programación.

                        </p>
                        <p>
                            Con SVEN, podrás codificar, probar y desplegar tus aplicaciones en un solo lugar, aprovechando la flexibilidad y accesibilidad que ofrece el desarrollo en la nube. La plataforma está diseñada para optimizar tu flujo de trabajo y maximizar tu productividad como desarrollador.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Docs;