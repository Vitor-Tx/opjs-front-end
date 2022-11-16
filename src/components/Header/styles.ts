import styled from "styled-components";

export const Container = styled.header`
  background: #D73035;
  display: flex;
  justify-content: center;
  height: 198px;
  align-items: center;

  @media (max-width: 768px){
    height: 300px;
    img {
      max-width: 100%;
    }
  }


`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px){
    text-align: center;
    flex-direction: column-reverse;
    gap: 20px;
    height: 300px;
    justify-content: center;
  }

  h1 {
    color: white;
    font-size: 32px;
  }

  h2 {
    color: white;
    font-weight: 400;
    font-size: 16px;
    opacity: 0.9;
    margin-top: 6px;
  }

`;
