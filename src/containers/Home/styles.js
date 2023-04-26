import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: #0a0a10;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
export const Image = styled.img`
`;
export const H1 = styled.h1`
  color: #ffffff;
  font-size: 28px;
`;
export const ContainerIn = styled.div`
  background: #0a0a10;
  width: 414px;
  display: flex;
  flex-direction: column;
  padding: 50px 100px;
`;
export const InputLabel = styled.p`
  color: #eeeeee;
  font-weight: 700;
  font-size: 18px;
  display: flex;
  align-items: center;
`;
export const Input = styled.input`
  width: 250px;
  height: 58px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  border: none;
`;
export const Button = styled.button`
  width: 250px;
  height: 68px;
  background: #d93856;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;
