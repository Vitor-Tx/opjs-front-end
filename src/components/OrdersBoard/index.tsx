import { Board, OrdersContainer } from "./styles";
import { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal/index";
import { useState } from "react";

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  return (

    <Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
      />
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (<OrdersContainer>
        {orders.map((order) => {
          let items = 0;
          order.products.forEach((product) => {
            items += product.quantity;
          });
          return (
            <button key={order._id} type="button" onClick={() => handleOpenModal(order)}>
              <strong>Mesa {order.table}</strong>
              <span>{items} ite{items > 1 ? "ns" : "m"}</span>
            </button>
          );
        })}


      </OrdersContainer>)}
    </Board>
  );

}

