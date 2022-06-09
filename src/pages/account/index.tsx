import React, { useState } from "react";
import { Button,Container, FormGroup, Input, Label, OutlineButton } from "../../styles/global";
import Layout from "../../components/Layout";
import Avatar from 'react-avatar'

function Account() {
  const user = JSON.parse(localStorage.getItem('user') || "{}");
  const [editMode, setEditMode] = useState(true);

  return (
    <Layout>
      <Container>
        <div className="row">
          <div className="col-md-5 col-md-offset-3">
            <h2>Mi Perfil</h2>
            <div>
              <h5>Datos Basicos</h5>
              <hr />
              <FormGroup>
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <Label>Nombre</Label>
                  </div>
                  <div className="col-md-9">
                    <Input
                      id="name"
                      type="text"
                      value={user.nombre}
                      disabled={editMode}
                    />
                  </div>
                </div>
              </FormGroup>

              <FormGroup>
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <Label>Fecha de nacimiento</Label>
                  </div>
                  <div className="col-md-9">
                    <Input
                      id="name"
                      type="text"
                      value={user.fecha_nacimiento}
                      disabled={editMode}
                    />
                  </div>
                </div>
              </FormGroup>
              
              <FormGroup>
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <Label>Avatar</Label>
                  </div>
                  <div className="col-md-9 d-flex align-items-center">
                    <Avatar name={user.nombre} size="75" round={true} textSizeRatio={2} className="mb4"/>
                    <small>Cargar foto</small>
                  </div>
                </div>
              </FormGroup>

              <FormGroup>
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <Label>Cargo</Label>
                  </div>
                  <div className="col-md-9">
                    <Input
                      id="name"
                      type="text"
                      value={user.rol}
                      disabled={editMode}
                    />
                  </div>
                </div>
              </FormGroup>

              <FormGroup>
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <Label>Email</Label>
                  </div>
                  <div className="col-md-9">
                    <Input
                      id="email"
                      type="email"
                      value={user.email}
                      disabled={editMode}
                    />
                  </div>
                </div>
              </FormGroup>
              
              {/* <p>Empresa, {user.empresa.nombre}</p> */}

            </div>

            <div>
              <h5>Suscripcion</h5>
              <hr />
              <FormGroup>
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <Label>Tipo de pago</Label>
                  </div>
                  <div className="col-md-9">
                    <Input
                      id="suscripcion"
                      type="text"
                      value="Mensual"
                      disabled={editMode}
                    />
                  </div>
                </div>
              </FormGroup>
              <FormGroup>
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <Label>Plan</Label>
                  </div>
                  <div className="col-md-9">
                      <Input
                      id="plan"
                      type="text"
                      value="Profesional"
                      disabled={editMode}
                    />
                  </div>
                </div>
              </FormGroup>

            </div>
            {editMode == true && <OutlineButton onClick={(e) => setEditMode(false)}>Editar</OutlineButton>}
            {editMode == false && <Button onClick={(e) => setEditMode(true)}>Guardar Cambios</Button>}
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Account;
