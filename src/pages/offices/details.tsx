import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/pro-regular-svg-icons";

import { Container, OutlineButton } from "../../styles/global";
import Layout from "../../components/Layout";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface JsonObject {
  data: any;
}

function OfficeDetail(props: any) {
  const [apidata, setApidata] = useState<JsonObject>({ data: [] });
  const [isLoading, setIsLoading] = useState(false);
  
  const sucId = props.match.params;
  //Get token from local and configure headers
  const token = localStorage.getItem("app_token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };

  const fetchData = async () => {
    setIsLoading(true);

    const result = await axios.get("http://localhost:8000/api/sucursales/"+sucId.id, {
      headers: headers,
    });
    const formatResult = { data: result.data };
    setApidata(formatResult);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function deleteOffice(){
    axios.delete("http://localhost:8000/api/sucursales/"+sucId.id, {
      headers: headers
    }).then(function (response){
      // Everything is OK
      window.alert(response.statusText);
      props.history.push('/offices');
    }).catch(function (error) {
      if(error.response){
        window.alert(error.response.status)
      } else if (error.request) { 
        window.alert(error.request)
      } else {
        window.alert("Algo salio mal, no es tu culpa...");
      }
    });
    // window.alert("Sucursal eliminada"+sucId.id);
  };

  return (
    <Layout>
      <Container>
        <div>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div className="mt4">
              <Link to="/offices" className="text-decoration-none">
                <FontAwesomeIcon icon={faChevronLeft as IconDefinition} /> Volver
              </Link>
              <h2>{apidata.data.nombre}</h2>
              <p>{apidata.data.direccion}</p>
              <p>{apidata.data.punto_expedicion}</p>
              <OutlineButton onClick={deleteOffice}>Modificar datos</OutlineButton>
              <OutlineButton onClick={deleteOffice}>Eliminar sucursal</OutlineButton>
            </div>
          )}
        </div>
      </Container>
    </Layout>
  );
}

export default OfficeDetail;
