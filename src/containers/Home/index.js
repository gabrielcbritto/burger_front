import React from "react";

import burguerImage from '../../assets/burger_1.png'

import {
  Container,
  Image,
  H1,
  ContainerIn,
  InputLabel,
  Input,
  Button,
} from './styles'


function App() {
  return (
    <Container>
      <ContainerIn>
      <Image src={burguerImage} alt="burguerImage" />
        <H1>Faça seu pedido!</H1>
      
        <InputLabel>Pedido:</InputLabel>
        <Input placeholder="Pedido"></Input>

        <InputLabel>Nome do Cliente:</InputLabel>
        <Input placeholder="Nome do Cliente"></Input>

        <Button>Novo Pedido</Button>
      </ContainerIn>
    </Container>
  );
}

export default App;
