import { Container } from "./styles";
import { OrdersBoard } from "../OrdersBoard/index";
import { Order } from "../../types/Order";
import { useState } from "react";

export function Orders() {

  const orders: Order[] = [{
    _id: "63737c5e0c62e55709d71550",
    table: "123",
    status: "IN_PRODUCTION",
    products: [
      {
        product: {
          name: "Pizza quatro queijos",
          imagePath: "1668510204345-quatro-queijos.png",
          price: 40,
        },
        quantity: 3,
        _id: "63737c5e0c62e55709d71551"
      },
      {
        product: {

          name: "Coca cola",
          imagePath: "1668511321990-coca-cola.png",
          price: 7,
        },
        quantity: 2,
        _id: "63737c5e0c62e55709d71552"
      }
    ],
  },
  {
    _id: "63737c5e0c62e55709d71552",
    table: "2",
    status: "WAITING",
    products: [
      {
        product: {

          name: "Coca cola",
          imagePath: "1668511321990-coca-cola.png",
          price: 7,
        },
        quantity: 1,
        _id: "63737c5e0c62e55709d71552"
      }
    ],
  }
  ];
  const [ordersState, setOrdersState] = useState(orders);



  return (

    <Container>
      <OrdersBoard
        icon="🕔"
        status="WAITING"
        orders={ordersState}
        setOrdersState={setOrdersState}
      />
      <OrdersBoard
        icon="👨‍🍳"
        status="IN_PRODUCTION"
        orders={ordersState}
        setOrdersState={setOrdersState}
      />
      <OrdersBoard
        icon="✅"
        status="DONE"
        orders={ordersState}
        setOrdersState={setOrdersState}
      />
    </Container>
  );
}
