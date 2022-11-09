import React from 'react'
import { Footer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCoffee } from "@fortawesome/pro-regular-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

function PublicFooter() {
  return (
    <Footer>
      <div>
          Logo Printit
      </div>
      <div>
          <h4>Printit</h4>
          <p>Módulos</p>
          <p>Planes</p>
          <p>Términos</p>
          <p>Privacidad</p>
      </div>
      <div>
          <h4>Nosotros</h4>
          <p>Acerca de</p>
          <p>El equipo</p>
          <p>FAQ</p>
      </div>
      <div>
          <h4>Soporte</h4>
          <p>Facebook</p>
          <a>Instagram</a>
          <p>Email</p>
      </div>
      <div>
        <p>© 2021 Printit, hecho con <FontAwesomeIcon icon={faHeart as IconProp} /> y <FontAwesomeIcon icon={faCoffee as IconProp} />, mantenido por el equipo de Mapache.</p>
      </div>
    </Footer>
  )
}

export default PublicFooter