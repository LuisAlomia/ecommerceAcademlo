import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/slices/products.slice";
import { useState } from "react";
import ContentCard from "../components/ContentCard";
import Search from "../components/Search";
import Filter from "../components/Filter";
import style from "./styles/home.module.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className={style.content}>
      <Search setSearch={setSearch} />
      <div className={style.filter}>
        <Filter setFilter={setFilter} />
      </div>

      {filter === "All" ? (
        <>
          {search === "" ? (
            <ul className={style.productList}>
              {products?.map((product) => (
                <ContentCard key={product.id} product={product} />
              ))}
            </ul>
          ) : (
            <ul className={style.productList}>
              {products
                ?.filter((product) =>
                  product.title.includes(search.substring(1).toLowerCase())
                )
                .map((product) => (
                  <ContentCard key={product.id} product={product} />
                ))}
            </ul>
          )}
        </>
      ) : (
        <ul className={style.productList}>
          {products
            ?.filter((product) => product.category.name === filter)
            .map((product) => (
              <ContentCard key={product.id} product={product} />
            ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
