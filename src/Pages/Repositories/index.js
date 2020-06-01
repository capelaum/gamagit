import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Repositories() {
  const [ repositories, setRepositories ] = useState([]);
  const [ user, setUser ] = useState('');
  const history = useHistory();

  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    let userName = localStorage.getItem('userName');
    setUser(userName);

    if(repositoriesName !== null) {
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
      //localStorage.clear();
    } else {
      history.push('/');
    }
  }, []);

  return(
    <S.Container>
      <S.Title>Repositórios de {user}</S.Title>
      <S.List>
      { 
        repositories.map(repository => {
          return (
            <S.ListItem>Repositório: { repository }</S.ListItem>
          )
        })
      }
      </S.List>
      <S.LinkHome to="/">Voltar</S.LinkHome>
    </S.Container>
  )
}