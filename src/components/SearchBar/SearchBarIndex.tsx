import React, {useState} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/pro-regular-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { InputSearch, SearchBox, SearchResults, SearchBoxContainer } from './styles';

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
        console.log(result);
        setApidata(result.data);
        setShowResults(true);
    }
  }

  return (
    <SearchBoxContainer>
      <SearchBox>
        <FontAwesomeIcon icon={faSearch as IconProp} />
        <InputSearch type="text" placeholder="Buscar" value={searchText} onChange={(e) => setSearchText(e.target.value)} onKeyPress={(e) => handleSearch(e.key)}/>
      </SearchBox>
      <SearchResults className={(showResults == false ? '' : 'active')}>
        { (typeof apidata == null || typeof apidata == undefined) && <p>No hay datos</p> }
        {/* { (typeof apidata == null || typeof apidata == undefined) ? <p>No hay datos</p> :
          apidata.data.map((result) => {
            return (
              <div key={result.id}>
                <p>{result.nombre}</p>
                <p>{result.ruc}</p>
              </div>
            );
          })
        } */}
      </SearchResults>
    </SearchBoxContainer>
  )
}
