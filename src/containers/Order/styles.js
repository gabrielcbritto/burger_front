import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: black;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 100vh;
`;
export const Image = styled.img`
`;

export const ContainerIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const H1 = styled.h1`
  color: #FFFFFF;
  font-size: 28px;
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
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding-left: 15px;
  max-width: 400px;

  word-wrap: break-word;

  font-style: normal;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
  font-weight: 300;

  p:last-child {
    font-weight: 700;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 15px;
  

`;

export const ButtonImg = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  

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
