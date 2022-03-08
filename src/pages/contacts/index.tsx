import React from 'react'
import { Container } from '../../styles/global'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'

function Contacts() {
  return (
    <Layout>
      <Container>
        <h2>Contactos</h2>
        <p>Lorem ipsum dolor sit ammet consecteur</p>

        <Link to="/customers">Clientes</Link>
        <p>Proveedores</p>
      </Container>
    </Layout>
  )
}

export default Contacts;