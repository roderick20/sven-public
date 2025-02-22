import React from 'react';

function WebParts() {
  return (
    <div>
      <div class="pattern-square"></div>
      <section class="py-5 py-lg-8">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 col-md-12 col-12">
              <div class="text-center">

                <h1 class="mt-4">WebParts</h1>
                <p class="lead">Pequeños generadores para tareas especificas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-xl-9 my-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-4 col-md-6">
              <div class="card border-0 shadow-sm h-100 card-lift">
                <figure>
                  <a href="#">
                    <img src="/images/event/webparts.jpg" alt="event" class="card-img-top" />
                  </a>
                </figure>

                <div class="card-body h-100 d-flex align-items-start flex-column border rounded-bottom-3 border-top-0">
                  <div class="mb-5">

                    <h4 class="my-2"><a href="#" class="text-reset">Lista</a></h4>
                    <small>A partir de una tabla podemos crear un CRUD.</small>
                  </div>
                  <div class="d-flex justify-content-between w-100 mt-auto">
                    <small>MVC Net Core 8</small>
                    <small>SVEN</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="card border-0 shadow-sm h-100 card-lift">
                <figure>
                  <a href="#">
                    <img src="/images/event/webparts.jpg" alt="event" class="card-img-top" />
                  </a>
                </figure>
                <div class="card-body h-100 d-flex align-items-start flex-column border rounded-bottom-3 border-top-0">
                  <div class="mb-5">
                    <h4 class="my-2"><a href="#" class="text-reset">Libreria</a></h4>
                    <small>A partir de una tabla podemos crear un CRUD de documentos.</small>
                  </div>
                  <div class="d-flex justify-content-between w-100 mt-auto">
                    <small>MVC Net Core 8</small>
                    <small>SVEN</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WebParts;