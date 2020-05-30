import React, { useState } from 'react'
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

function App(props) {
  // useState retorna um array = [value, function]
  const [ user, setUser ] = useState('');
  const history = useHistory();

  function handlePesquisa(){
    axios.get(`http://api.github.com/users/${ user }/repos`).then(response => {
      const repositories = response.data;
      const respositoriesName = [];

      repositories.map((repository) => {
        respositoriesName.push(repository.name);
      });

      localStorage.setItem('repositoriesName', JSON.stringify(respositoriesName));
      history.push('./repositories');

    });
  }

  return (
    <S.Container> 
      <h1>Find Github Repos from a User</h1>
      <h2>{ props.title} by { props.user}</h2>
      <p>{user}</p>
      <S.Input type="text" className="user-input" placeholder="user" value={ user } onChange={e => setUser(e.target.value)} />
      <S.Button type="button" onClick={handlePesquisa}>Search</S.Button>
    </S.Container>
  );
}

export default App;
