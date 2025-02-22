import React from 'react';
import DocsMenu from './DocsMenu';

function DocsTemplate() {
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
                <h1 class="mb-2">Plantillas</h1>
                <p>
                    Liquid es un lenguaje de plantillas de código abierto creado por Shopify. Se utiliza para cargar
                    dinámicamente el contenido en las páginas web, especialmente en plataformas de comercio electrónico.
                    Liquid es seguro y está diseñado para ser utilizado en entornos donde el código se ejecuta en servidores
                    controlados por el usuario final. </p>
                <p>Conceptos básicos de Liquid:</p>
                <ul>
                    <li>Objetos: Los datos que puedes cargar en tu plantilla. Por ejemplo, en una tienda en línea, los objetos podrían ser productos, pedidos, clientes, etc.</li>
                    <li>Filtros: Se utilizan para modificar la salida de un objeto. Por ejemplo, puedes usar un filtro para convertir texto a mayúsculas o para formatear una fecha.</li>
                    <li>Etiquetas: Proporcionan la lógica de la plantilla. Las etiquetas se utilizan para crear estructuras de control como bucles y condicionales.</li>
                </ul>
            </div>
        </div>
    )
}

export default DocsTemplate;