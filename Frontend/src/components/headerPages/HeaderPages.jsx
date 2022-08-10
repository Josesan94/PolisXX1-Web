import React from 'react'
import { useLocation } from 'react-router-dom';

const HeaderPages = () => {

    const path = useLocation().pathname;
    const currentlocation = path.split("/")[1];

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    return (
      <div className="mb-5 d-flex flex-column justify-content-start justify-content-lg-start align-items-start header-main header-pages-background">
        {splitLocation[1] === "aboutUs" && (
          <>
            <h1 className="text-start my-4 title-header-pages">
              SOBRE NOSOTROS
            </h1>
            <p className="text-main text-header-pages d-flex flex-column mx-4 mt-2 jusfity-content-center">
              Somos una institución cuyo propósito es fortalecer acciones y
              lazos comunitarios, la integración, el desarrollo sustentable y el
              bienestar de la sociedad.
              <br />
              Para alcanzar dichos objetivos, nuestros equipos profesionales
              necesitan de la contribución de nuestros socixs, colaboradores y
              suscriptores. Gracias a todos los que, con sus aportes, nos
              permiten seguir trabajando y ampliando todos los proyectos día a
              día.
            </p>
          </>
        )}
        {splitLocation[1] === "novelties" && (
          <>
            <h1 className="text-start my-5 title-header-pages">NOVEDADES</h1>
            <h5 className="text-main text-header-pages">
            </h5>
          </>
        )}
        {splitLocation[1] === "participate" && (
          <>
            <h1 className="text-start my-5 title-header-pages">
              PARTICIPÁ / COLABORÁ
            </h1>
          </>
        )}
      </div>
    );
}

export default HeaderPages