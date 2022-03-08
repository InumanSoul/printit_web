import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownHeader, DropupMenu } from '../../styles/global';
import { Container, SwitchEmpresa, MenuLink } from './styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faAddressBook, faBox, faFileChartLine, faInboxIn, faInboxOut } from "@fortawesome/pro-regular-svg-icons";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

function Sidemenu() {
    const user = JSON.parse(localStorage.getItem('user') || "{}");

    return (
      <Container>
        <Link to="/">
          <img
            src="https://printit.com.py/img/logo.svg"
            className="brand-mini"
            alt="Printit"
          />
        </Link>
        <MenuLink>
          <Link to="/invoices">
            <FontAwesomeIcon icon={faInboxIn as IconProp} />
            Ingresos
          </Link>
          <Link to="/expenses">
            <FontAwesomeIcon icon={faInboxOut as IconProp} />
            Gastos
          </Link>
          <Link to="/items">
            <FontAwesomeIcon icon={faBox as IconProp} />
            Productos
          </Link>
          <Link to="/contacts">
            <FontAwesomeIcon icon={faAddressBook as IconProp} />
            Contactos
          </Link>
          <Link to="/reports">
            <FontAwesomeIcon icon={faFileChartLine as IconProp} />
            Reportes
          </Link>
          <Link to="/outbuilding">Dependencias</Link>
          <Link to="/settings">Ajustes</Link>
        </MenuLink>

        <Dropdown>
          <SwitchEmpresa>
            <DropdownHeader className="d-flex align-items-center justify-content-between">
              <div>
                <small className="text-bold">Empresa</small>
                <p>{user.empresa.nombre}</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faBuilding as IconProp} />
              </div>
            </DropdownHeader>
            <DropupMenu>
              <Link to="/business" className="dropdown-item">Mi empresa</Link>
              <Link to="/business" className="dropdown-item">Nueva empresa</Link>
            </DropupMenu>
          </SwitchEmpresa>
        </Dropdown>
      </Container>
    )
};

export default Sidemenu;