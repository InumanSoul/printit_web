import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faChevronLeft } from "@fortawesome/pro-regular-svg-icons";
import { Container, Button, FormGroup, Label, Input } from "../../styles/global";
import Layout from "../../components/Layout";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

function OfficeCreate() {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [expedicion, setExpedicion] = useState("");
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

  useEffect(() => {
    if (nombre.trim() && direccion.trim() && expedicion.trim()) {
      setIsBbuttonDisabled(false);
    } else {
      setIsBbuttonDisabled(true);
    }
  }, [nombre, direccion, expedicion]);

  const handleCreate = () => {
    const formData = new FormData();
    setIsLoading(true);
    formData.append("nombre", nombre);
    formData.append("direccion", direccion);
    formData.append("punto_expedicion", expedicion);

    if (nombre !== null && direccion !== null && expedicion !== null) {
      axios
        .post("http://localhost:8000/api/sucursales", formData, {
          headers: headers,
        })
        .then((res) => {
          console.log(res);
          setMessage("Sucursal creada con exito");
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setMessage("No se pudo crear la sucursal");
          setIsLoading(false);
        });
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.keyCode === 13 || e.which === 13) {
      isButtonDisabled || handleCreate();
    }
  };

  return (
    <Layout>
      <Container>
        <Link to="/offices" className="text-decoration-none">
          <FontAwesomeIcon icon={faChevronLeft as IconDefinition} /> Volver
        </Link>

        <div className="row">
          <div className="col-md-5 col-md-offset-3">
            <h2>Nueva sucursal</h2>
            { hasMessage.length > 0 && <h4>{hasMessage}</h4> }
            <form id="createOfficeForm" className="mb4">
              <FormGroup>
                <Label htmlFor="nombre">Nombre</Label>
                <Input
                  id="nombre"
                  type="text"
                  onChange={(e) => setNombre(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="direccion">Dirección</Label>
                <Input
                  id="direccion"
                  type="text"
                  onChange={(e) => setDireccion(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="expedicion">Punto de Expedición</Label>
                <Input
                  id="expedicion"
                  type="expedicion"
                  onChange={(e) => setExpedicion(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e)}
                />
              </FormGroup>
              <Button
                onClick={(e) => {
                  e.preventDefault()
                  handleCreate()
                }}
                disabled={isButtonDisabled}
              >
                {isLoading ? (
                  <FontAwesomeIcon icon={faCircleNotch as IconDefinition} spin={true} />
                ) : (
                  'Registrar sucursal'
                )}
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
export default OfficeCreate;