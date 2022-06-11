import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, OutlineButton, SecondaryButton } from "../../../styles/global";
import Layout from "../../../components/Layout";
import { ContactCard } from "./styles";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/pro-regular-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface JsonObject {
  data: Array<any>;
  current_page: number;
  last_page: number;
  next_page_url: string;
  prev_page_url: string;
}

function Customers() {
  const [apidata, setApidata] = useState<JsonObject>({
    data: [], 
    current_page: 0, 
    last_page: 0, 
    next_page_url: '', 
    prev_page_url: '', 
  });
  const [isLoading, setIsLoading] = useState(false);
  //Get token from local and configure headers
  const token = localStorage.getItem("app_token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + token,
    "Empresa": user.empresa_id,
  };

  const fetchData = async (page_url: string) => {
    setIsLoading(true);
    if (page_url === ''){
      const result = await axios
      .get(
        "http://localhost:8000/api/customers", {
            headers: headers,
        });
  
        setApidata(result.data);
        console.log(result);
        setIsLoading(false);
    }
    if (page_url !== '') {
      const result = await axios
      .get(
        page_url, {
            headers: headers,
        });
        setApidata(result.data);
        console.log(apidata);
        setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData('');
  }, []);

  const DeleteCustomer = (id: number) => {
    axios.delete("http://localhost:8000/api/customers/"+id, {
      headers: headers,
    })
    .then((res) => {
      console.log(res);
      window.alert("Cliente eliminado");
    })
    .catch((error) => {
      console.error(error);
      window.alert(error);
    });
    fetchData('');
  }

  return (
    <Layout>
      <Container>
        <Link to="/contacts" className="text-decoration-none">
          <FontAwesomeIcon icon={faChevronLeft as IconDefinition} /> Volver
        </Link>
        <div className="row">
          <div className="col-md-8 col-md-offset-2 col-xs-12 d-flex justify-content-between">
            <h2>Clientes</h2>  
            <Link to="/customers/new">Nuevo Cliente</Link>
          </div>
          
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div className="col-md-8 col-md-offset-2 col-xs-12">
              <Card style={{padding: 25}}>
                {apidata.data.map((customer) => {
                  return (
                    <ContactCard key={customer.id}>
                      <div>
                        <h5>{customer.nombre}</h5>
                        <p>{customer.ruc}</p>
                        <p>{customer.direccion}</p>
                      </div>
                      <div>
                        <Link style={{marginRight: 15}} to={'customers/edit/'+customer.id}>Editar</Link>
                        <SecondaryButton onClick={(e) => DeleteCustomer(customer.id)}>Eliminar</SecondaryButton>
                      </div>
                    </ContactCard>
                  )
                })}
              </Card>
            </div>
          )}

          <div style={{marginTop: 20,}} className="col-md-8 col-md-offset-2 col-xs-12 d-flex justify-content-between align-items-center">
            <OutlineButton onClick={e => fetchData(apidata.prev_page_url)}>Anterior</OutlineButton>
            <p>Mostrando pagina {apidata.current_page} de {apidata.last_page}</p>
            <OutlineButton onClick={e => fetchData(apidata.next_page_url)}>Siguiente</OutlineButton>
          </div>
        </div>
      </Container>
    </Layout>
  )
  }

export default Customers;