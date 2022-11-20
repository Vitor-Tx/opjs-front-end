import { useState, useEffect } from "react";
import socketIo from "socket.io-client";
import { Order } from "../../types/Order";
import { api } from "../../utils/api";
import { toast } from "react-toastify";
import { Container } from "./styles";
import { OrdersBoard } from "../OrdersBoard/index";

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const socket = socketIo("http://localhost:3001", {
      transports: ["websocket"],
    });
    socket.on("orders@new", (order) => {
      setOrders(prevState => prevState.concat(order));
      toast.success(`Novo pedido para a mesa ${order.table}!`);
    });
  }, []);

  useEffect(() => {
    api
      .get("/orders")
      .then(({ data }) => {
        setOrders(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const waiting = orders.filter((order) => order.status === "WAITING");
  const inProduction = orders.filter(
    (order) => order.status === "IN_PRODUCTION"
  );
  const done = orders.filter((order) => order.status === "DONE");

  function handleOrderStatusChange(orderId: string, status: Order["status"]) {
    setOrders((prevState) =>
      prevState.map((order) =>
        order._id === orderId ? { ...order, status } : order
      )
    );
  }

  function handleCancelOrder(orderId: string) {
    setOrders((prevState) =>
      prevState.filter((order) => order._id !== orderId)
    );
  }

  return (
    <Container>
      <OrdersBoard
        icon="🕔"
        status="WAITING"
        orders={waiting}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrdersBoard
        icon="👨‍🍳"
        status="IN_PRODUCTION"
        orders={inProduction}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrdersBoard
        icon="✅"
        status="DONE"
        orders={done}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
    </Container>
  );
}
