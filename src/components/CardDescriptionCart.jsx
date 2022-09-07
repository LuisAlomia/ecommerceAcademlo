import { useSelector } from "react-redux";
import { deleteCart } from "../services/cartServices";
import style from "./styles/cardDescriptionCart.module.css";

const cardDescriptionCart = ({ product, getProductCart }) => {
  const token = useSelector((state) => state.login.token);

  const HandleDdelete = (id) => {
    deleteCart(id, token).then((resp) => resp);
    getProductCart();
  };

  return (
    <div className={style.content}>
      {
        <>
          <p className={style.text}>{product.brand}</p>
          <h4>{product.title}</h4>
          <p className={style.text}>
            Quantity {product.productsInCart.quantity}
          </p>
          <p className={style.text}>Total: ${product.price}</p>
          <button
            className={style.button}
            onClick={() => HandleDdelete(product.id)}
          >
            <span className="material-symbols-outlined">delete</span>
          </button>
        </>
      }
    </div>
  );
};

export default cardDescriptionCart;
