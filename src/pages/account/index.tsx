import React, { useState } from "react";
import { Button,Card,Container, FormGroup, Input, Label, OutlineButton } from "../../styles/global";
import Layout from "../../components/Layout";
import Avatar from 'react-avatar'
import { Divider } from "./styles";
import { Link } from "react-router-dom";
import axios from "axios";
import { url, apiHeaders } from "../../config";
const token = localStorage.getItem("app_token");

function Account() {
  const user = JSON.parse(localStorage.getItem('user') || "{}");
  const [editMode, setEditMode] = useState(true);
  const [avatar, setAvatar] = useState<string>('');

  const UpdateProfile = async() => {
    // window.alert('Perfil actualizado');
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token,
      "Empresa": user.empresa_id,
    }
    const data = {
      nombre: "Anderson Farina",
      email: "inumansoul@gmail.com",
      avatar: avatar,
      cargo: "propietario",
    }
    console.log(data);
    
    const res = await axios
    .put(url.apiUrl + 'account/1', data, {
      headers: headers,
    })
    .then((res) => {
      console.log(res);
      // localStorage.setItem("user", JSON.stringify(''));
    })
    .catch((error) => {
      console.error(error);
    });
    
    // setEditMode(true);

  }

  const handleAvatar = (e: any) => {
    const file = e.files[0];
    const reader = new FileReader();
    const fileUrl = reader.readAsDataURL(file);
      reader.onloadend = function (e){
        setAvatar(reader.result as string);
      }
  }

  return (
    <Layout>
      <Container>
        <div className="row">
          <div className="col-md-8 col-md-offset-2 col-xs-12">
            <div className="d-flex justify-content-between">
              <h2>Mi Perfil</h2>
              <div className="actions">
                {editMode === true && <OutlineButton onClick={(e) => setEditMode(false)}>Editar</OutlineButton>}
                {editMode === false && (
                  <>
                    <OutlineButton className="mr2" onClick={(e) => setEditMode(true)}>Cancelar</OutlineButton>
                    <Button onClick={(e) => UpdateProfile()}>Guardar Cambios</Button>
                  </>
                )}
              </div>
            </div>
            <Card style={{padding: 25, marginTop: 20,}}>
            <div>
              <h5>Datos Basicos</h5>
              <Divider style={{marginBottom: 20, marginTop: 10,}} />
              <FormGroup>
                <div className="row align-items-center">
                  <div className="col-xs-3">
                    <Label>Nombre</Label>
                  </div>
                  <div className="col-xs-9">
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
                  <div className="col-xs-3">
                    <Label>Fecha de nacimiento</Label>
                  </div>
                  <div className="col-xs-9">
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
                  <div className="col-xs-3">
                    <Label>Avatar</Label>
                  </div>
                  <div className="col-xs-9 d-flex align-items-center">
                    {!avatar && 
                      <>
                        <Avatar name={user.nombre} size="75" round={true} textSizeRatio={2} className="mb4" maxInitials={2}/>
                        <input 
                          type="file" 
                          name="avatar" 
                          id="avatar" 
                          accept="image/png, image/jpeg"
                          placeholder="Elegi una foto"
                          onChange={(e) => handleAvatar(e.target)}
                        />
                      </>
                    }
                    {avatar ? <Avatar size="75" round={true} src={avatar} onClick={(e) => setAvatar('')}/> : null}
                  </div>
                </div>
              </FormGroup>

              <FormGroup>
                <div className="row align-items-center">
                  <div className="col-xs-3">
                    <Label>Cargo</Label>
                  </div>
                  <div className="col-xs-9">
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
                  <div className="col-xs-3">
                    <Label>Email</Label>
                  </div>
                  <div className="col-xs-9">
                    <Input
                      id="email"
                      type="email"
                      value={user.email}
                      disabled={editMode}
                    />
                  </div>
                </div>
              </FormGroup>

            </div>

            <div>
              <h5>Suscripción</h5>
              <Divider style={{marginBottom: 20, marginTop: 10,}} />
              <FormGroup>
                <div className="row align-items-center">
                  <div className="col-xs-3">
                    <Label>Tipo de pago</Label>
                  </div>
                  <div className="col-xs-9">
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
                  <div className="col-xs-3">
                    <Label>Plan</Label>
                  </div>
                  <div className="col-xs-9">
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

            <div>
              <h5>Empresa</h5>
              <Divider style={{marginBottom: 20, marginTop: 10,}} />
              <FormGroup>
                <div className="row align-items-center">
                  <div className="col-xs-3">
                    <Label>Nombre</Label>
                  </div>
                  <div className="col-xs-9">
                    <div className="d-flex justify-content-between">
                      <p>{user.empresa.nombre}</p>
                      <Link to={'/business'}>Ver datos</Link>
                    </div>
                  </div>
                </div>
              </FormGroup>
            </div>
            </Card>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Account;
