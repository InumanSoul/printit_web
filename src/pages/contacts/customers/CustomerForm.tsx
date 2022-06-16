import React, { useState } from "react";
import axios from "axios";
import { Button, Card, Container, FormGroup, Input, Label } from "../../../styles/global";
import Layout from "../../../components/Layout";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft, faCircleNotch } from "@fortawesome/pro-regular-svg-icons";

function CustomerForm(props: any) {
  const [nombre, setNombre] = useState("");
  const [ruc, setRUC] = useState("");
  const [direccion , setDireccion] = useState("");
  const [telefono , setTelefono] = useState("");
  const [isButtonDisabled, setIsBbuttonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMessage, setMessage] = useState("");
  //Get token from local and configure headers
  const token = localStorage.getItem("app_token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + token,
    "Empresa": user.empresa_id,
  };

  const CreateCustomer = () => {
    setIsLoading(true);
    const data = {
      ruc,
      nombre,
      direccion,
      telefono,
    }

    if (nombre !== null && ruc !== null && direccion !== null) {
      axios
        .post("http://localhost:8000/api/customers", data, {
          headers: headers,
        })
        .then((res) => {
          console.log(res);
          setMessage("Cliente registrado con éxito");
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setMessage("No se pudo registrar el cliente");
          setIsLoading(false);
        });
    }
  };

  return (
    <Layout>
      <Container>
        <Link to="/customers" className="text-decoration-none">
          <FontAwesomeIcon icon={faChevronLeft as IconDefinition} /> Volver
        </Link>

        <div className="row">
          <div className="col-md-8 col-md-offset-2 col-xs-12">
            <h2>Nuevo Cliente</h2>
            { hasMessage.length > 0 && <h4>{hasMessage}</h4> }
            <Card style={{padding: 25}}>
              <form id="createOfficeForm" className="mb4">
                <FormGroup>
                  <Label htmlFor="nombre">Nombre</Label>
                  <Input
                    id="nombre"
                    type="text"
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="ruc">RUC</Label>
                  <Input
                    id="ruc"
                    type="text"
                    onChange={(e) => setRUC(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="direccion">Dirección</Label>
                  <Input
                    id="direccion"
                    type="direccion"
                    onChange={(e) => setDireccion(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="telefono">Telefono</Label>
                  <Input
                    id="telefono"
                    type="telefono"
                    onChange={(e) => setTelefono(e.target.value)}
                  />
                </FormGroup>
                <Button
                  onClick={(e) => {
                    e.preventDefault()
                    CreateCustomer()
                  }}
                  disabled={isButtonDisabled}
                >
                  {isLoading ? (
                    <FontAwesomeIcon icon={faCircleNotch as IconDefinition} spin={true} />
                  ) : (
                    'Registrar Cliente'
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default CustomerForm;