import { Container } from "./styles";
import { OrdersBoard } from "../OrdersBoard/index";
import { Order } from "../../types/Order";

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

  const orders2: Order[] = [];

  return (

    <Container>
      <OrdersBoard
        icon="🕔"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
        orders={orders}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={orders2}
      />
    </Container>
  );
}
