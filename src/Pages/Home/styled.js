import styled from 'styled-components';

export const HomeContainer = styled.div
`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #333;
  margin: 0;
`

export const Content = styled.div
`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`

export const Input = styled.input 
`
  border: 1px solid #ddd;
  height: 1.5rem;
  padding; 0 .5rem;
  border-radius: .25rem 0 0 .25rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`

export const Button = styled.button
`
  height: 1.6rem;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  border-radius: 0 .25rem .25rem 0;
  margin-top: 20px;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }

  &:hover {
    color: #333;
  }
`

export const ErrorMsg = styled.span
`
  display: block;
  font-size: 20px;
  color: red;
  font-weight: 600;
  margin-top: 1rem;
`