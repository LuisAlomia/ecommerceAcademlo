import { NavLink } from "react-router-dom";
import Card from "./Card";
import { useSelector } from "react-redux";
import { postCart } from "../services/cartServices";
import style from "./styles/contentCard.module.css";

const ContentCard = ({ product }) => {
  const token = useSelector((state) => state.login.token);

  const handleCart = () => {
    if (token) {
      const newObj = {
        id: product.id,
        quantity: 1,
      };
      postCart(newObj, token).then((resp) => resp);
    }
  };

  return (
    <div className={style.contentProduct}>
      <NavLink className={style.product} to={`/product/${product.id}`}>
        <Card product={product} />
      </NavLink>
      <div onClick={handleCart} className={style.cart}>
        <span className="material-symbols-outlined">shopping_cart</span>
      </div>
    </div>
  );
};

export default ContentCard;
