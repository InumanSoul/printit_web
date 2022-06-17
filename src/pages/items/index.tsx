import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Badge } from "../../styles/global";
import Layout from "../../components/Layout";
import NumberFormat from 'react-number-format'
import { ProductPhoto, ProductInfo } from './styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImagePolaroid } from '@fortawesome/pro-regular-svg-icons';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { getItems } from "../../API";

interface JsonObject {
  data: Array<any>;
}

function Items() {
  const [apidata, setApidata] = useState<JsonObject>({ data: [] });
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    let res = await getItems();
    setApidata(res);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <Container>
        <div className="row">
          <div className="col-md-6">
            <h2>Productos</h2>
          </div>
          <div className="col-md-6">
            <Link to="/items" className="link-button--primary">Agregar producto</Link>
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
                    to={`/items/${item.id}`}
                    key={item.id}
                    className="col-xs-6 col-md-3 mt4 text-decoration-none text-reset"
                  >
                    <div className="box bg-light bordered rounded">
                      <ProductPhoto>
                        <FontAwesomeIcon icon={faImagePolaroid as IconProp} size={'2x'}/>
                      </ProductPhoto>
                      <ProductInfo>
                        <div>
                          <b>{item.nombre}</b>
                        </div>
                        <NumberFormat
                          value={item.precio}
                          displayType={'text'}
                          thousandSeparator={true}
                          suffix={' G$'}
                        />
                        <div>
                          <p>En stock: 86</p>
                        </div>
                        <div>
                          <Badge>
                            {item.categoria ? item.categoria : 'Sin categoria'}
                          </Badge>
                        </div>
                      </ProductInfo>
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
export default Items;