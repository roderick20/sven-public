import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div>
      <Helmet>
        <title>Sven - Tu sitio web de confianza</title>
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
      <div class="my-xl-7 py-5 d-none d-lg-block">
         <div class="container-fluid" data-cue="fadeIn">
            <div class="row mb-7 pb-2 text-center justify-content-center gy-4">
               <div class="col-lg-12 col-12">
                  <div class="marquee h-auto" data-cue="slideInLeft">
                     <div class="track d-flex gap-4">
                        <div>
                           <img src="/images/hero/landing-saas-v1.jpg" alt="Image" class="rounded-3 border"
                              width="360" />
                        </div>

                        <div>
                           <img src="/images/hero/landing-saas-v2.jpg" alt="Image" class="rounded-3 border"
                              width="360" />
                        </div>
                        <div>
                           <img src="/images/hero/creative-agency-template.jpg" alt="Image"
                              class="rounded-3 border" width="360" />
                        </div>

                        <div>
                           <img src="/images/hero/landing-seo.jpg" alt="Image" class="rounded-3 border"
                              width="360" />
                        </div>
                        <div>
                           <img src="/images/hero/landing-accounting.jpg" alt="Image" class="rounded-3 border"
                              width="360" />
                        </div>

                        <div>
                           <img src="/images/hero/landing-saas-finance.jpg" alt="Image" class="rounded-3 border"
                              width="360" />
                        </div>

                        <div>
                           <img src="/images/hero/modern-conference-landing-template.jpg" alt="Image"
                              class="rounded-3 border" width="360" />
                        </div>

                        <div>
                           <img src="/images/hero/landing-mobile-app.jpg" alt="Image" class="rounded-3 border"
                              width="360" />
                        </div>

                        <div>
                           <img src="/images/landings/overview/overview-img-2.jpg" alt="Image"
                              class="rounded-3 border" width="360" />
                        </div>

                        <div>
                           <img src="/images/hero/creative-agency-template.jpg" alt="Image"
                              class="rounded-3 border" width="360" />
                        </div>

                        <div>
                           <img src="/images/hero/landing-saas-v1.jpg" alt="Image" class="rounded-3 border"
                              width="360" />
                        </div>
                        <div>
                           <img src="/images/landings/overview/overview-img-4.jpg" alt="Image"
                              class="rounded-3 border" width="360" />
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-lg-12 col-12">
                  <div class="marquee h-auto" data-cue="slideInRight">
                     <div class="track-2 d-flex gap-4 py-3">
                        <div>
                           <img src="/images/landings/overview/overview-img-1.jpg" alt="Image"
                              class="rounded-3 border" width="360" />
                        </div>

                        <div>
                           <img src="/images/landings/overview/overview-img-9.jpg" alt="Image"
                              class="rounded-3 border" width="360" />
                        </div>

                        <div>
                           <img src="/images/landings/overview/overview-img-3.jpg" alt="Image"
                              class="rounded-3 border" width="360" />
                        </div>

                        <div>
                           <img src="/images/landings/overview/overview-img-8.jpg" alt="Image"
                              class="rounded-3 border" width="360" />
                        </div>
                        <div>
                           <img src="/images/hero/landing-mobile-app.jpg" alt="Image" class="rounded-3 border"
                              width="360" />
                        </div>

                        <div>
                           <img src="/images/landings/overview/overview-img-1.jpg" alt="Image"
                              class="rounded-3 border" width="360" />
                        </div>
                        <div>
                           <img src="/images/landings/overview/overview-img-6.jpg" alt="Image"
                              class="rounded-3 border" width="360" />
                        </div>

                        <div>
                           <img src="/images/landings/overview/overview-img-4.jpg" alt="Image"
                              class="rounded-3 border" width="360" />
                        </div>

                        <div>
                           <img src="/images/landings/overview/overview-img-2.jpg" alt="Image"
                              class="rounded-3 border" width="360" />
                        </div>

                        <div>
                           <img src="/images/hero/creative-agency-template.jpg" alt="Image"
                              class="rounded-3 border" width="360" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <section class="my-xl-7 py-5">
         <div class="container mb-xl-7" data-cue="fadeIn">
            <div class="row row-cols-1 row-cols-md-3 gy-4">
               <div class="col" data-cue="zoomIn">
                  <div class="card card-lift">
                     <div class="card-body d-flex flex-column gap-4">
                        <div>
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                              fill="none">
                              <path opacity="0.2"
                                 d="M28 7V21C28 21.2652 27.8946 21.5196 27.7071 21.7071C27.5196 21.8946 27.2652 22 27 22H24V11C24 10.7348 23.8946 10.4804 23.7071 10.2929C23.5196 10.1054 23.2652 10 23 10H8V7C8 6.73478 8.10536 6.48043 8.29289 6.29289C8.48043 6.10536 8.73478 6 9 6H27C27.2652 6 27.5196 6.10536 27.7071 6.29289C27.8946 6.48043 28 6.73478 28 7Z"
                                 fill="#8B3DFF" />
                              <path
                                 d="M27 5H9C8.46957 5 7.96086 5.21071 7.58579 5.58579C7.21071 5.96086 7 6.46957 7 7V9H5C4.46957 9 3.96086 9.21071 3.58579 9.58579C3.21071 9.96086 3 10.4696 3 11V25C3 25.5304 3.21071 26.0391 3.58579 26.4142C3.96086 26.7893 4.46957 27 5 27H23C23.5304 27 24.0391 26.7893 24.4142 26.4142C24.7893 26.0391 25 25.5304 25 25V23H27C27.5304 23 28.0391 22.7893 28.4142 22.4142C28.7893 22.0391 29 21.5304 29 21V7C29 6.46957 28.7893 5.96086 28.4142 5.58579C28.0391 5.21071 27.5304 5 27 5ZM5 11H23V13H5V11ZM23 25H5V15H23V25ZM27 21H25V11C25 10.4696 24.7893 9.96086 24.4142 9.58579C24.0391 9.21071 23.5304 9 23 9H9V7H27V21Z"
                                 fill="#8B3DFF" />
                           </svg>
                        </div>
                        <div class="d-flex flex-column gap-2">
                           <h3 class="mb-0 fs-4">Diseño de aplicaciones</h3>
                           <p class="mb-0">Puedes diseñar aplicaciones web de forma facil y rápida.</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col" data-cue="zoomIn">
                  <div class="card card-lift">
                     <div class="card-body d-flex flex-column gap-4">
                        <div>
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                              fill="none">
                              <path opacity="0.2" d="M28 10L16 17L4 10L16 3L28 10Z" fill="#8B3DFF" />
                              <path
                                 d="M28.8638 21.5C28.9958 21.7292 29.0317 22.0014 28.9635 22.257C28.8954 22.5126 28.7287 22.7308 28.5 22.8638L16.5 29.8638C16.3471 29.9529 16.1733 29.9999 15.9963 29.9999C15.8192 29.9999 15.6454 29.9529 15.4925 29.8638L3.4925 22.8638C3.26712 22.7283 3.10415 22.5096 3.03888 22.2549C2.9736 22.0001 3.01128 21.73 3.14375 21.5028C3.27622 21.2757 3.49282 21.1099 3.74666 21.0413C4.0005 20.9727 4.27114 21.0068 4.5 21.1363L16 27.8425L27.5 21.1363C27.7292 21.0042 28.0014 20.9683 28.257 21.0365C28.5126 21.1047 28.7308 21.2713 28.8638 21.5ZM27.5 15.1363L16 21.8425L4.5 15.1363C4.27231 15.0229 4.00997 15.0006 3.76638 15.0738C3.5228 15.147 3.31627 15.3103 3.18884 15.5305C3.06141 15.7506 3.02266 16.011 3.08046 16.2587C3.13827 16.5064 3.28829 16.7228 3.5 16.8638L15.5 23.8638C15.6529 23.9529 15.8267 23.9999 16.0037 23.9999C16.1808 23.9999 16.3546 23.9529 16.5075 23.8638L28.5075 16.8638C28.6228 16.7986 28.7239 16.7111 28.8051 16.6065C28.8863 16.5019 28.9459 16.3822 28.9804 16.2543C29.015 16.1265 29.0238 15.9931 29.0064 15.8618C28.9889 15.7305 28.9456 15.604 28.8789 15.4896C28.8122 15.3752 28.7234 15.2752 28.6177 15.1954C28.5121 15.1156 28.3916 15.0576 28.2633 15.0247C28.135 14.9918 28.0015 14.9848 27.8705 15.0039C27.7394 15.0231 27.6135 15.0681 27.5 15.1363ZM3 10C3.0004 9.82487 3.04679 9.6529 3.13454 9.50131C3.22229 9.34973 3.34831 9.22385 3.5 9.13627L15.5 2.13627C15.6529 2.04711 15.8267 2.00012 16.0037 2.00012C16.1808 2.00012 16.3546 2.04711 16.5075 2.13627L28.5075 9.13627C28.6585 9.22434 28.7837 9.35044 28.8707 9.50199C28.9578 9.65354 29.0036 9.82525 29.0036 10C29.0036 10.1748 28.9578 10.3465 28.8707 10.4981C28.7837 10.6496 28.6585 10.7757 28.5075 10.8638L16.5075 17.8638C16.3546 17.9529 16.1808 17.9999 16.0037 17.9999C15.8267 17.9999 15.6529 17.9529 15.5 17.8638L3.5 10.8638C3.34831 10.7762 3.22229 10.6503 3.13454 10.4987C3.04679 10.3471 3.0004 10.1752 3 10ZM5.985 10L16 15.8425L26.015 10L16 4.15752L5.985 10Z"
                                 fill="#8B3DFF" />
                           </svg>
                        </div>
                        <div class="d-flex flex-column gap-2">
                           <h3 class="mb-0 fs-4">Manejador de base de datos</h3>
                           <p class="mb-0">Puedes acceder a la base de datos crear tablas, hacer consultas, crear diagramas de entidad relación.</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col" data-cue="zoomIn">
                  <div class="card card-lift">
                     <div class="card-body d-flex flex-column gap-4">
                        <div>
                           <svg xmlns="http://www.w3.org/2000/svg" width="22" height="32" viewBox="0 0 22 32"
                              fill="none">
                              <mask id="mask0_1700_169" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0"
                                 y="0" width="22" height="32">
                                 <path d="M21.3333 0H0V32H21.3333V0Z" fill="white" />
                              </mask>
                              <g mask="url(#mask0_1700_169)">
                                 <mask id="mask1_1700_169" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0"
                                    y="0" width="21" height="32">
                                    <path d="M20.9633 0.121216H0V31.5598H20.9633V0.121216Z" fill="white" />
                                 </mask>
                                 <g mask="url(#mask1_1700_169)">
                                    <path
                                       d="M5.24186 31.5599C8.13422 31.5599 10.4816 29.2125 10.4816 26.3201V21.0803H5.24186C2.34949 21.0803 0.0020752 23.4277 0.0020752 26.3201C0.0020752 29.2125 2.34949 31.5599 5.24186 31.5599Z"
                                       fill="#0ACF83" />
                                    <path
                                       d="M0.0020752 15.8405C0.0020752 12.9482 2.34949 10.6008 5.24186 10.6008H10.4816V21.0803H5.24186C2.34949 21.0803 0.0020752 18.7329 0.0020752 15.8405Z"
                                       fill="#A259FF" />
                                    <path
                                       d="M0.0022583 5.36099C0.0022583 2.46863 2.34968 0.121216 5.24204 0.121216H10.4818V10.6008H5.24204C2.34968 10.6008 0.0022583 8.25335 0.0022583 5.36099Z"
                                       fill="#F24E1E" />
                                    <path
                                       d="M10.4816 0.121216H15.7213C18.6137 0.121216 20.9612 2.46863 20.9612 5.36099C20.9612 8.25335 18.6137 10.6008 15.7213 10.6008H10.4816V0.121216Z"
                                       fill="#FF7262" />
                                    <path
                                       d="M20.9612 15.8405C20.9612 18.7329 18.6137 21.0803 15.7213 21.0803C12.829 21.0803 10.4816 18.7329 10.4816 15.8405C10.4816 12.9482 12.829 10.6008 15.7213 10.6008C18.6137 10.6008 20.9612 12.9482 20.9612 15.8405Z"
                                       fill="#1ABCFE" />
                                 </g>
                              </g>
                           </svg>
                        </div>
                        <div class="d-flex flex-column gap-2">
                           <h3 class="mb-0 fs-4">Programación en la nube</h3>
                           <p class="mb-0">Tiene un editor en la nube donde se puede editar el código y asi poder personalizar la aplicación.
                           </p>
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

export default Home;