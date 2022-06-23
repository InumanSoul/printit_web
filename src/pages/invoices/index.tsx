import React, { useEffect, useState } from "react";
import { Badge, BadgeSuccess, Card, Container, OutlineButton } from "../../styles/global";
import Layout from "../../components/Layout";
import { getSales } from "../../API";
import { numberFormatter } from "../../config/utils";

interface Sales{
  data: Array<any>;
  current_page: number;
  last_page: number;
  next_page_url: string;
  prev_page_url: string;
}

function Invoices() {
  const [apidata, setApidata] = useState<Sales>({ 
    data: [],
    current_page: 0, 
    last_page: 0, 
    next_page_url: '', 
    prev_page_url: '', 
  });
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async(url: string) => {
    setIsLoading(true);
    let res = await getSales(url);
    setApidata(res);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData('');
  }, []);
  
    return(
      <Layout>
        <Container>
          <h2>Ventas</h2>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
            <Card style={{padding:25}}>
              <div style={{width: '100%',}}>
                  <div style={{
                    display: 'flex',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    borderBottom: '1px solid #212121',
                    paddingTop: 15,
                    paddingBottom: 15,
                  }}>
                    <div style={{width: '10%',}}>#</div>
                    <div style={{width: '40%',}}>Cliente</div>
                    <div style={{width: '20%',}}>Monto</div>
                    <div style={{width: '20%',}}>Fecha</div>
                    <div style={{width: '10%'}}></div>
                  </div>
                {apidata.data.map((sale) => {
                  return (
                    <div key={sale.id} style={{display: 'flex', borderBottom: '1px solid #ccc', alignItems: 'center', paddingTop: 10, paddingBottom: 10,}}>
                      <div style={{width: '10%',}}>
                        {sale.id}
                      </div>
                      <div style={{width: '40%',}}>
                        <p>{sale.clientes.nombre}</p>
                        <p style={{opacity: .5,}}>{sale.clientes.ruc}</p>
                      </div>
                      <div style={{width: '20%',}}>
                        <p>{numberFormatter(sale.monto_total)} GS</p>
                        {sale.cobrado === 1 ? <BadgeSuccess>Pagado</BadgeSuccess> : <Badge>Pendiente</Badge>}
                      </div>
                      <div style={{width: '20%',}}>
                        {sale.fecha_creada.slice(0,10)}
                      </div>
                      <div style={{width: '10%',}}>
                        <OutlineButton>Ver mas</OutlineButton>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Card>

            <div style={{marginTop: 20,}} className="col-md-8 col-md-offset-2 col-xs-12 d-flex justify-content-between align-items-center">
              <OutlineButton disabled={apidata.prev_page_url === null && true} onClick={e => fetchData(apidata.prev_page_url)}>Anterior</OutlineButton>
              <p>Mostrando pagina {apidata.current_page} de {apidata.last_page}</p>
              <OutlineButton disabled={apidata.next_page_url === null && true} onClick={e => fetchData(apidata.next_page_url)}>Siguiente</OutlineButton>
            </div>
            </>
          )}
        </Container>
      </Layout>
    );
}

export default Invoices;