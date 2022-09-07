import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import { getByIdProduct } from "../services/productsServices";
import { postCart } from "../services/cartServices";
import ContentCard from "../components/ContentCard";
import style from "./styles/productDescription.module.css";

const ProductDescription = () => {
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const products = useSelector((state) => state.products);
  const token = useSelector((state) => state.login.token);
  const [img, setImg] = useState();
  let { id } = useParams();

  useEffect(() => {
    getByIdProduct(id).then((resp) => {
      setProduct(resp);
    });
  }, [id]);

  const handleImg = (img) => {
    setImg(img);
  };

  const handleIncrement = () => setQuantity(quantity + 1);

  const handleDecrement = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  const handleCart = () => {
    const newObj = {
      id: product.id,
      quantity: quantity,
    };

    postCart(newObj, token).then((resp) => resp);
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        {product && (
          <>
            <div className={style.contentImgs}>
              <div className={style.img}>
                <img
                  src={img ? img : product.productImgs[0]}
                  alt={product.title}
                />
              </div>
              <div className={style.imgLlinks}>
                {product.productImgs.map((img) => {
                  return (
                    <div
                      key={img}
                      className={style.imgLink}
                      onClick={() => handleImg(img)}
                    >
                      <img className={style.link} src={img} alt="image" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={style.contentDescription}>
              <h2 className={style.title}>{product.title}</h2>
              <h3>{product.category}</h3>
              <p>{product.description}</p>
              <div className={style.contentPrice}>
                <div>
                  <p className={style.referencia}>Price</p>
                  <span className={style.price}>$ {product.price}</span>
                </div>
                <div>
                  <p className={style.referencia}>Quantity</p>
                  <div className={style.quantity}>
                    <span
                      onClick={handleDecrement}
                      className={`${style.buttonQuantity} ${style.click}`}
                    >
                      -
                    </span>
                    <span className={style.buttonQuantity}> {quantity} </span>
                    <span
                      onClick={handleIncrement}
                      className={`${style.buttonQuantity} ${style.click}`}
                    >
                      {" "}
                      +{" "}
                    </span>
                  </div>
                </div>
              </div>

              <button onClick={handleCart} className={style.button}>
                Add to cart{" "}
                <span className="material-symbols-outlined">shopping_cart</span>{" "}
              </button>
            </div>
          </>
        )}
      </div>
      <div className={style.contentList}>
        <h3 className={style.listTitle}>Other Products</h3>
        <div className={style.productList}>
          {products &&
            products
              .filter((item) => item.category?.name === product?.category)
              .map((item) => <ContentCard key={item.id} product={item} />)}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
