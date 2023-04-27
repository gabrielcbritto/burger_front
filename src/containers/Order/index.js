import React from "react";

import burguerImage from "../../assets/burger_2.png";
import Trash from "../../assets/trash.png";

import {
  Container,
  Image,
  Order,
  H1,
  OrderContainer,
  ImgContainer,
  ContainerIn,
  Button,
} from "./styles";

function App() {
  const orders = [{ id: Math.random(), order: "arrozazazazazazazazarrozarroz", name: "JoaoJoaoJoao" }];

  return (
    <Container>
      <Image src={burguerImage} alt="burguerImage" />
      <ContainerIn>
        <H1>Pedidos</H1>

        <ul>
          {orders.map((order) => (
            <Order key={order.id}>
              <OrderContainer>
                <p>{order.order}</p> <p>{order.name}</p>
              </OrderContainer>
              <ImgContainer>
                <img src={Trash} alt="trash-box" />
              </ImgContainer>
            </Order>
          ))}
        </ul>
        <Button>Voltar</Button>
      </ContainerIn>
    </Container>
  );
}

export default App;
