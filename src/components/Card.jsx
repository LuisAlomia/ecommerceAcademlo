import style from "./styles/card.module.css";

const Card = ({ product }) => {
  return (
    <div>
      <figure className={style.card}>
        <div className={style.cardImg}>
          <img
            className={style.img}
            src={product.productImgs[0]}
            alt={product.title}
          />
        </div>
        <figcaption className={style.cardText}>
          <h3 className={style.textTitle}>{product.title}</h3>
          <p className={style.textPrice}>Price</p>
          <span className={style.price}>$ {product.price}</span>
        </figcaption>
      </figure>
    </div>
  );
};

export default Card;
