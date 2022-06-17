import React, {useState} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/pro-regular-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { InputSearch, SearchBox, SearchResults, SearchBoxContainer } from './styles';
import { Divider } from '../../pages/account/styles';
import { Link } from 'react-router-dom';

interface JsonObject {
  data: Array<any>;
}

export default function SearchBar() {
  const user = JSON.parse(localStorage.getItem('user') || "{}");
  const [searchText, setSearchText] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [apidata, setApidata] = useState<JsonObject>({data: []});
  const token = localStorage.getItem('app_token');

  const handleSearch =  async (e: string) => {
    if(e === 'Enter' && searchText !== ''){
      const result = await axios
      .get(
        "http://localhost:8000/api/customers", {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token,
              'Empresa': user.empresa_id,
              'search': searchText,
            },
        });
        console.log(result.data);
        setApidata(result);
        setShowResults(true);
    }
  }

  return (
    <SearchBoxContainer>
      <SearchBox>
        <FontAwesomeIcon icon={faSearch as IconProp} />
        <InputSearch type="text" placeholder="Buscar" value={searchText} onChange={(e) => setSearchText(e.target.value)} onKeyPress={(e) => handleSearch(e.key)}/>
      </SearchBox>
      <SearchResults className={(showResults === false ? '' : 'active')}>
        <FontAwesomeIcon icon={faTimes as IconProp} onClick={(e) => setShowResults(false)}/>
          { Object.keys(apidata.data).length === 0 ? <p>No se encuentran resultados...</p> :
            apidata.data.map((result) => {
              return (
                <Link to={'/customers/edit/'+result.id} key={result.id} style={{paddingTop: 10, paddingBottom: 5,}}>
                  <p>{result.nombre}</p>
                  <p>{result.ruc}</p>
                  <Divider style={{marginTop:10}}/>
                </Link>
              );
            })
          }
      </SearchResults>
    </SearchBoxContainer>
  )
}
