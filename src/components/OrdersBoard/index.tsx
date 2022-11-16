import { Board, OrdersContainer } from "./styles";
import { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal/index";
import { useState } from "react";

interface OrdersBoardProps {
  icon: string;
  status: "WAITING" | "IN_PRODUCTION" | "DONE";
  orders: Order[];
  /* changeOrderStatus: (order_id: string, nextStatus: "WAITING" | "IN_PRODUCTION" | "DONE") => void; */
  setOrdersState: React.Dispatch<React.SetStateAction<Order[]>>;
}

export function OrdersBoard({ icon, status, orders, setOrdersState }: OrdersBoardProps) {

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

  function cancelOrder(order_id: string) {
    const indexOfOrder = orders.findIndex(order => {
      return order._id === order_id;
    });
    orders.splice(indexOfOrder, 1);
    const aux_orders: Array<Order> = JSON.parse(JSON.stringify(orders));
    setOrdersState(aux_orders);
    handleCloseModal();
  }

  function changeOrderStatus(order_id: string, nextStatus: "WAITING" | "IN_PRODUCTION" | "DONE" ) {

    console.log(nextStatus);
    console.log(orders);
    const indexOfOrder = orders.findIndex(order => {
      return order._id === order_id;
    });
    orders[indexOfOrder].status = nextStatus;
    const aux_orders: Array<Order> = JSON.parse(JSON.stringify(orders));
    setOrdersState(aux_orders);
  }



  return (

    <Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
        onCancel={cancelOrder}
        onChangeOrderStatus={changeOrderStatus}

      />
      <header>
        <span>{icon}</span>
        <strong>
          {status === "WAITING" && " Fila de espera"}
          {status === "IN_PRODUCTION" && " Em produção"}
          {status === "DONE" && " Pronto!"}
        </strong>
        <span>({orders.filter((order) => order.status === status).length})</span>
      </header>

      {orders.length > 0 && (<OrdersContainer>
        {orders.filter((order) => order.status === status).map((order) => {
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

