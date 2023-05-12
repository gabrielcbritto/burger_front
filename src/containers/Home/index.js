import React, { useState, useRef, useEffect } from "react";
import {useHistory } from 'react-router-dom'

import axios from "axios";

import burguerImage from "../../assets/burger_1.png";

import {
  Container,
  Image,
  H1,
  ContainerIn,
  InputLabel,
  Input,
  Button,
} from "./styles";

function Home() {
  const [fullOrder, setFullOrder] = useState([]);
  const history = useHistory()

  const inputOrder = useRef();
  const inputName = useRef();

  async function addNewOrder() {
    const { data: newOrder } = await axios.post(
      "http://localhost:3001/order",
      { order: inputOrder.current.value, name: inputName.current.value }
    );
    setFullOrder([...fullOrder, newOrder]);
    history.push("/order")
  }

  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrders } = await axios.get(
        "http://localhost:3001/order"
      );

      setFullOrder(newOrders);
    }
    fetchOrders();
  }, []);

  return (
    <Container>
      <ContainerIn>
        <Image src={burguerImage} alt="burguerImage" />
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido:</InputLabel>
        <Input ref={inputOrder} placeholder="Pedido"/>

        <InputLabel>Nome do Cliente:</InputLabel>
        <Input ref={inputName} placeholder="Nome do Cliente" />

        <Button onClick={addNewOrder}>Novo Pedido</Button>
      </ContainerIn>
    </Container>
  );
}

export default Home;
