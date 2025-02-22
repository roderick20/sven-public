import React from 'react';
import DocsMenu from './DocsMenu';

function DocsEditor() {
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
                <h1 class="mb-2">Editor</h1>
                <p>
                    Un editor de código web es una herramienta que permite a los desarrolladores escribir, editar y, a menudo, ejecutar código directamente en un navegador web. Estos editores pueden variar desde simples editores de texto hasta entornos de desarrollo integrados (IDE) completos con características avanzadas como resaltado de sintaxis, autocompletado, depuración y control de versiones.
                </p>
                <img src="/images/editor.jpg" className='img-fluid' />
            </div>
        </div>
    )
}

export default DocsEditor;