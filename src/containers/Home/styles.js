import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: #0a0a10;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
export const Image = styled.img`
  margin-bottom: 25px;
`;
export const H1 = styled.h1`
  color: #ffffff;
  font-size: 28px;
  text-align: center;
  padding-bottom: 70px;
`;
export const ContainerIn = styled.div`
  background: #0a0a10;
  display: flex;
  flex-direction: column;
  padding: 50px 100px;
`;
export const InputLabel = styled.p`
  color: #eeeeee;
  font-style: normal;
  font-weight: 700;
  padding-left: 18px;
  font-size: 16px;
  line-height: 22px;
`;
export const Input = styled.input`
  width: 342px;
  height: 58px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 42px;
  padding-left: 15px;

  ::placeholder {
    color: #ffffff;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
  }
`;

export const Button = styled.button`
  width: 342px;
  height: 68px;
  background: #d93856;
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
