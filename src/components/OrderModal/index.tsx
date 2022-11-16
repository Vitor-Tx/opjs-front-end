import { Overlay, ModalBody, OrderDetails, Actions} from "./styles";
import closeIcon from "../../assets/images/close-icon.svg";
import { Order } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurrency";
import { useEffect } from "react";

interface OrderModalProps {
  visible: boolean;
  order: null | Order;
  onClose: () => void;
  onCancel: (order_id : string) => void;
  onChangeOrderStatus: (order_id : string, nextStatus: "WAITING" | "IN_PRODUCTION" | "DONE") => void;
}

export function OrderModal({ visible, order, onClose, onCancel, onChangeOrderStatus }: OrderModalProps) {

  useEffect(() =>{
    function handleKeyDown(event : KeyboardEvent) {
      if(event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!visible || !order) {
    return null;
  }

  const total = order.products.reduce((total, {product, quantity}) => {
    return total + (product.price * quantity);
  }, 0);

  const nextStatus = order.status === "WAITING" ? "IN_PRODUCTION" : "DONE";

  return (

    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="Ícone para fechar" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>
              {order.status === "WAITING" && "🕔"}
              {order.status === "IN_PRODUCTION" && "👨‍🍳"}
              {order.status === "DONE" && "✅"}
            </span>
            <strong>
              {order.status === "WAITING" && " Fila de espera"}
              {order.status === "IN_PRODUCTION" && " Em produção"}
              {order.status === "DONE" && " Pronto!"}</strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.map(({ _id, product, quantity }) => (
              <div key={_id} className="item">
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  width="48"
                  height="48"
                />
                <span className="quantity">
                  {quantity}x
                </span>

                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          <button type="button" className="primary" onClick={() => onChangeOrderStatus(order._id, nextStatus)}>
            <span>
              {order.status === "WAITING" && "👨‍🍳"}
              {order.status === "IN_PRODUCTION" && "✅"}
            </span>
            <strong>
              {order.status === "WAITING" && " Iniciar Produção"}
              {order.status === "IN_PRODUCTION" && " Concluir Pedido"}
            </strong>
          </button>
          <button type="button" className="secondary" onClick={() => onCancel(order._id)}>
            Cancelar Pedido
          </button>
        </Actions>
      </ModalBody>
    </Overlay>


  );
}
