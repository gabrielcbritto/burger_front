import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'

import burguerImage from "../../assets/burger_2.png";
import Trash from "../../assets/trash.png";
import axios from "axios";

import {
  Container,
  Image,
  Order,
  ButtonImg,
  H1,
  OrderContainer,
  ImgContainer,
  ContainerIn,
  Button,
} from "./styles";

function OrderPage() {
  const history = useHistory()
  const [fullOrder, setFullOrder] = useState([]);

async function deleteOrder(orderIndex) {
  await axios.delete(`http://localhost:3001/order/${orderIndex}`);
  const newOrders = fullOrder.filter((contentOrder) => contentOrder.id !== orderIndex);
    setFullOrder(newOrders)
  }

  useEffect(() => {

    async function fetchOrders(){
      const {data: newOrders} = await axios.get("http://localhost:3001/order");
      
      setFullOrder(newOrders);
    }
    fetchOrders()
  }, [])

function goBackPage() {
  history.push("/")
}

  return (
    <Container>
      <Image src={burguerImage} alt="burguerImage" />
      <ContainerIn>
        <H1>Pedidos</H1>

        <ul>
          {fullOrder.map((contentOrder) => (
            <Order key={contentOrder.id}>
              <OrderContainer>
                <p>{contentOrder.order}</p> <p>{contentOrder.name}</p>
              </OrderContainer>
              <ImgContainer>
                <ButtonImg onClick={() => deleteOrder(contentOrder.id)}>
                  <img src={Trash} alt="trash-box" />
                </ButtonImg>
              </ImgContainer>
            </Order>
          ))}
        </ul>
        <Button onClick={goBackPage}>Voltar</Button>
      </ContainerIn>
    </Container>
  );
}

export default OrderPage;
