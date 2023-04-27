import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: pink;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
export const Image = styled.img`
`;

export const ContainerIn = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
`;
export const H1 = styled.h1`
  color: #FFFFFF;
  font-size: 28px;
  text-align: center;
  margin-top: 36px;
  margin-bottom: 50px;
`;

export const Order = styled.li`
  width: 342px;
  height: 101px;
  background: #47474c;
  border-radius: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

`;

export const Button = styled.button`
  width: 342px;
  height: 68px;
  background: #2c2c31;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  color: #ffffff;
`;
