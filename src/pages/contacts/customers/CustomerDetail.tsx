import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Container, FormGroup, Input, Label, OutlineButton } from "../../../styles/global";
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

  const [isLoading, setIsLoading] = useState(false);
  const [hasMessage, setMessage] = useState("");
  const customerId = props.match.params;
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

    const res = await axios.get("http://localhost:8000/api/customers/"+customerId.id, {
      headers: headers,
    })
    const formatResult = {data: res.data};
    setNombre(formatResult.data.nombre);
    setRUC(formatResult.data.ruc);
    setDireccion(formatResult.data.direccion);
    setTelefono(formatResult.data.telefono);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [])

  const UpdateCustomer = () => {
    setIsLoading(true);
    const data = {
      ruc,
      nombre,
      direccion,
      telefono,
    }
    
    if (nombre !== null && ruc !== null && direccion !== null) {
      axios
        .put("http://localhost:8000/api/customers/"+customerId.id, data, {
          headers: headers,
        })
        .then((res) => {
          console.log(res);
          setMessage("Cliente actualizado con éxito");
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setMessage("No se pudo actualizar el dato");
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
            <h2 style={{marginTop: 20,marginBottom: 20}}>Detalles del cliente</h2>
            <Card style={{padding: 25}}>
              { hasMessage.length > 0 && <h4>{hasMessage}</h4> }
              <form id="createOfficeForm" className="mb4">
                <FormGroup>
                  <Label htmlFor="nombre">Nombre</Label>
                  <Input
                    id="nombre"
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="ruc">RUC</Label>
                  <Input
                    id="ruc"
                    type="text"
                    value={ruc}
                    onChange={(e) => setRUC(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="direccion">Dirección</Label>
                  <Input
                    id="direccion"
                    type="text"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="telefono">Telefono</Label>
                  <Input
                    id="telefono"
                    type="text"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                  />
                </FormGroup>
                <Button
                  onClick={(e) => {
                    e.preventDefault()
                    UpdateCustomer()
                  }}
                >
                  {isLoading ? (
                    <FontAwesomeIcon icon={faCircleNotch as IconDefinition} spin={true} />
                  ) : (
                    'Actualizar'
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