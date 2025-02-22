import { Helmet } from 'react-helmet';

function HomeVideo() {
   return (
      <div>
         <Helmet>
            <title>Sven - </title>
            <meta name="description" content="Descubre todo lo que Sven tiene para ofrecer." />
         </Helmet>
         <div class="pattern-square"></div>
         <section class="container py-lg-8 py-5" data-cue="fadeIn">
            <div class="row justify-content-center">
               <div class="col-xl-8 col-lg-10 col-12" data-cues="zoomIn" data-group="page-title" data-delay="700">
                  <div class="text-center d-flex flex-column gap-5">
                     <div class="d-flex flex-column gap-3 mx-lg-8">
                        <h1 class="mb-0 display-5">Programación en la nube</h1>
                        <p class="mb-0 lead">SVEN es una aplicación donde se puede diseñar, modelar base de datos y programar todo en la nube. </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <div class="my-xl-7 py-5 px-5 d-none d-lg-block">
            <div class="container-fluid" data-cue="fadeIn">
               <div class="row mb-7 pb-2 text-center justify-content-center gy-4">
                  <div class="col-lg-12 col-12">
                     <iframe width="100%" height="534" src="https://www.youtube.com/embed/KFgOVC6VHBE" title="SVEN Programación en la nube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default HomeVideo;