import { useState } from "react";
import { toast } from "react-toastify";
import { Order } from "../../types/Order";
import { api } from "../../utils/api";
import { OrderModal } from "../OrderModal/index";
import { Board, OrdersContainer } from "./styles";

interface OrdersBoardProps {
  icon: string;
  status: "WAITING" | "IN_PRODUCTION" | "DONE";
  orders: Order[];
  onChangeOrderStatus: (orderId: string, status: Order["status"]) => void;
  onCancelOrder: (orderId: string) => void;
}

export function OrdersBoard({ icon, status, orders, onChangeOrderStatus, onCancelOrder }: OrdersBoardProps) {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  async function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  async function handleChangeStatus() {
    setIsLoading(true);
    const status = selectedOrder?.status === "WAITING"
      ?  "IN_PRODUCTION"
      :  "DONE";
    await api.patch(`/orders/${selectedOrder?._id}`, { status }) ;

    toast.success(`O pedido da mesa ${selectedOrder?.table} teve o status alterado!`);
    onChangeOrderStatus(selectedOrder!._id, status);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  async function handleCancelOrder() {
    setIsLoading(true);
    await api.delete(`/orders/${selectedOrder?._id}`);
    toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado`);
    onCancelOrder(selectedOrder!._id);
    setIsLoading(false);
    setIsModalVisible(false);
  }




  return (

    <Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
        isLoading={isLoading}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleChangeStatus}

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

