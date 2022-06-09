import React from 'react'
import { Container } from '../../styles/global'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'

function Contacts() {
  return (
    <Layout>
      <Container>
        <h2>Contactos</h2>
        <p>Aqui podes ver un resumen de todos tus contactos, estos son los clientes y proveedores con quien operes.</p>

        <Link to="/customers">Clientes</Link>
        <p>Proveedores</p>
      </Container>
    </Layout>
  )
}

export default Contacts;