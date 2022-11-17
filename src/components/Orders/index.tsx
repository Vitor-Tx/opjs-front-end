import { Container } from "./styles";
import { OrdersBoard } from "../OrdersBoard/index";
import { Order } from "../../types/Order";
import { useState, useEffect } from "react";
import axios from "axios";

export function Orders() {
  const [ordersState, setOrdersState] = useState(new Array<Order>);

  useEffect(() => {
    axios
      .get("http://localhost:3001/orders")
      .then((res) => {
        console.log(res);
        setOrdersState(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
