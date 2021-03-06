import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container } from "../../styles/global";
import Layout from "../../components/Layout";

interface JsonObject {
  data: Array<any>;
}

function Offices() {
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
            "http://localhost:8000/api/sucursales", {
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
        <div className="row">
          <div className="col-md-6">
            <h2>Sucursales</h2>  
          </div>
          <div className="col-md-6">
            <Link to="/offices/new" className="link-button--primary">Nueva sucursal</Link>
          </div>
        </div>

        <div className="row">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              {apidata.data.map((item) => {
                return (
                  <Link
                    to={`/offices/show/${item.id}`}
                    key={item.id}
                    className="col-md-4 mt4 text-decoration-none text-reset"
                  >
                    <div className="box bg-light p4 rounded bordered">
                      <h4>{item.nombre}</h4>
                      <p>{item.direccion}</p>
                    </div>
                  </Link>
                )
              })}
            </>
          )}
        </div>
      </Container>
    </Layout>
  );
}
export default Offices;