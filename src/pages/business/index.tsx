import React from "react";
import { Link } from 'react-router-dom';
import { Container } from "../../styles/global";
import Layout from "../../components/Layout";

function Business() {
    return (
      <Layout>
        <Container>
          <h2>Empresa</h2>
          <p>Lorem ipsum dolor sit ammet consecteur</p>
          <Link to="/offices">Sucursales</Link>
          <Link to="/offices">Depositos</Link>
        </Container>
      </Layout>
    );
}

export default Business;