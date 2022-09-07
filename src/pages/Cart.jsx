import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCart } from "../services/cartServices";
import CardDescriptionCart from "../components/CardDescriptionCart";
import { postPurchase } from "../services/purchaseServices";
import style from "./styles/cart.module.css";

const Cart = ({ setContentCard }) => {
  const token = useSelector((state) => state.login.token);
  const [product, setProduct] = useState();

  const getProductCart = () => {
    getCart(token).then((resp) => {
      setProduct(resp);
      console.log(resp);
    });
  };

  useEffect(() => {
    getProductCart();
  }, []);

  const handlePurchase = () => {
    const data = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references",
    };

    postPurchase(data, token).then((resp) => resp);
    setContentCard(false);
  };

  return (
    <div className={style.content}>
      {product && (
        <>
          <h2>Cart</h2>
          {product.map((item) => (
            <CardDescriptionCart
              key={item.id}
              product={item}
              getProductCart={getProductCart}
            />
          ))}
        </>
      )}
      <button className={style.button} onClick={handlePurchase}>
        Add Purchase
      </button>
    </div>
  );
};

export default Cart;
