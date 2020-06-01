import React, { useState } from 'react'
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

function App(props) {
  // useState retorna um array = [value, function]
  const history = useHistory();
  const [ user, setUser ] = useState('');
  const [ erro, setErro ] = useState(false);

  function handlePesquisa() {
    axios.get(`http://api.github.com/users/${ user }/repos`)
      .then(response => {
        const repositories = response.data;
        const respositoriesName = [];

        repositories.map((repository) => {
          respositoriesName.push(repository.name);
        });

        localStorage.setItem('userName', user);
        localStorage.setItem('repositoriesName', JSON.stringify(respositoriesName));
        setErro(false);
        history.push('./repositories');
      })
      .catch(error => {
        setErro(true);
      });
  }

  return(
      <S.HomeContainer>
        <S.Content> 
          <img src="github_white.png" alt="github logo" width="100px"/>
          <h1>Encontre os repositórios de um usuário do Github!</h1>
          <S.Input 
            type="text" 
            className="user-input" 
            placeholder="Username" 
            value={ user } 
            onChange={e => setUser(e.target.value)} 
          />
          <S.Button type="button" onClick={handlePesquisa}>Buscar</S.Button>
        </S.Content>
        { erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : '' }
      </S.HomeContainer>
  );
}

export default App;
