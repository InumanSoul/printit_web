import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import { OutlineButton } from '../../styles/global'
import { Container } from '../home/styles'

interface Product {
  nombre: string;
  costo: number;
  precio: number;
  iva: number;
}

export default function ItemsDetail(props: any) {
  const itemId = props.match.params.id;
  const [apidata, setApidata] = useState<Product>({
    nombre: '',
    costo: 0,
    precio: 0,
    iva: 0,
  });
  const token = localStorage.getItem("app_token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + token,
    "Empresa": user.empresa_id,
  };
  
  const fetchData = async () => {
    const res = await axios
    .get(
      "http://localhost:8000/api/items/" + itemId, {
      headers: headers,
    });
    console.log(res.data);
    setApidata({
      nombre: res.data.nombre,
      costo: res.data.costo,
      precio: res.data.precio,
      iva: res.data.iva,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <Container>
        <Link to={'/items'} className="text-decoration-none">
          <FontAwesomeIcon icon={faChevronLeft as IconDefinition}/> Volver
        </Link>
        <div className='row'>
          <div className="col-md-8 col-xs-12">
            <h5>{apidata?.nombre}</h5>
            <p>Precio: {apidata?.precio}</p>
            <p>Costo: {apidata?.costo}</p>
            <p>IVA: {apidata?.iva}</p>
            <p>Cantidad disponible: ?</p>
            <p>Unidad de medida: ?</p>
          </div>
          <div className="col-md-4 col-xs-12">
            <h5>Inventario</h5>
            <p>Ultimas compras</p>
            <OutlineButton>Agregar compra</OutlineButton>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
