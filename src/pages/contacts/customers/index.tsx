import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Container } from "../../../styles/global";
import Layout from "../../../components/Layout";
import { ContactCard } from "./styles";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/pro-regular-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface JsonObject {
  data: Array<any>;
}

function Customers() {
  const [apidata, setApidata] = useState<JsonObject>({ data: [] });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //Get token from local and configure headers
    const token = localStorage.getItem("app_token");
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    const headers = {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token,
      "Empresa": user.empresa_id,
    };
    const fetchData = async () => {
        setIsLoading(true);

        const result = await axios
        .get(
            "http://localhost:8000/api/customers", {
                headers: headers,
            });

            setApidata(result.data);
            setIsLoading(false);
    };

    fetchData();
  }, []);

    return (
      <Layout>
        <Container>
        <Link to="/contacts" className="text-decoration-none">
          <FontAwesomeIcon icon={faChevronLeft as IconDefinition} /> Volver
        </Link>
          <h2>Clientes</h2>

          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              {apidata.data.map((customer) => {
                  return (
                    <ContactCard key={customer.id}>
                      <div>
                        <h4>{customer.nombre}</h4>
                        <p>{customer.ruc}</p>
                        <p>{customer.direccion}</p>
                      </div>
                      <div>
                        <Link style={{marginRight: 15}} to={'customers/edit/'+customer.id}>Editar</Link>
                        <Button>Eliminar</Button>
                      </div>
                    </ContactCard>
                  )
                })}
            </>
          )}
        </Container>
      </Layout>
    )
  }

export default Customers;