import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getPurchase } from "../services/purchaseServices";
import style from "./styles/purchases.module.css";

const Purchases = () => {
  const token = useSelector((state) => state.login.token);
  const [purchases, setPurchases] = useState();

  useEffect(() => {
    getPurchase(token).then((resp) => {
      setPurchases(resp);
    });
  }, [token]);

  return (
    <div className={style.content}>
      <h2 className={style.title}>My purchases</h2>
      {purchases &&
        purchases.map((item) => (
          <div className={style.contentPurchase} key={item.id}>
            <h4 className={style.date}>{item.createdAt}</h4>
            {item.cart.products.map((item) => (
              <div className={style.contentItem} key={item.id}>
                <div className={style.items}>
                  <p className={style.tdTitle}>{item.title}</p>
                  <p className={style.tdQuantity}>
                    {item.productsInCart.quantity}
                  </p>
                  <p className={style.tdPrice}>$ {item.price}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Purchases;
