import styled from "styled-components";

export const Overlay = styled.div`
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBody = styled.div`
  width: 480px;
  background: white;
  padding: 32px;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  :hover {
    transition: all 0.3s ease-out;
    box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
  }
  @media (max-width: 768px){
    width: calc(100% - 40px);
  }

  header {
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      line-height: 0;
      border: 0;
      background: transparent;
      border-radius: 50%;
      background: #D73035;
      height: 100%;
      width: 40px;
      img {
        width: 100%;
        height: 100%;
      }
      :hover {
        transition: all 0.3s ease-out;
        box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
      }
    }


  }

  .status-container {
    width: 100%;
    margin-top: 32px;
    display: flex;
    align-items: start;
    flex-direction: column;
  }

  small {
    font-size: 14px;
    opacity: 0.8;
  }

  div {
    margin-top: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }


`;

export const OrderDetails = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 100%;

  > strong {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;

    .item {
      display: flex;
      align-items: start;

      & + .item {
        margin-top: 16px;
      }

      img {
        object-fit: cover;
        object-position: center center;
        border-radius: 6px;
      }

      .quantity {
        font-size: 14px;
        color:  #666;
        display: block;
        min-width: 20px;
        margin-left: 4px;

      }

      .product-details {
        margin: 0;
        gap: 0;
        display: flex;
        align-items: start;
        flex-direction: column;

        strong {
          margin-bottom: 4px;
        }

        span {
          font-size: 14px;
          color: #666;
        }
      }

    }
  }

  .total {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 24px;

      span {
        font-size: 14px;
        font-weight: 500;
        opacity: 0.8;
      }

  }


`;

export const Actions = styled.footer`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 32px;
  gap: 12px;

  button {
    width: 100%;
    border: 0;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid rgba(204, 204, 204, 0.4);
    border-radius: 48px;
    :hover {
      transition: all 0.3s ease-out;
      box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
    }
  }

  .primary {
    padding: 12px 24px;
    background: #333333;
    color: white;

  }

  .secondary {
    /* border: 2px solid rgba(204, 204, 204, 0.4); */
    padding: 14px 24px;
    color: #d73035;
    font-weight: bold;
    background: transparent;
  }
`;
