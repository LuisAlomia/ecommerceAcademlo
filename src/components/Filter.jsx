import { useEffect, useState } from "react";
import { getByFilterProducts } from "../services/productsServices";
import style from "./styles/filter.module.css";

const Filter = ({ setFilter }) => {
  const [category, setCategory] = useState();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    getByFilterProducts().then((resp) => setCategory(resp));
  }, []);

  const handleCategory = (category) => setFilter(category);

  const handleHidden = () => setHidden(!hidden);

  return (
    <div className={style.contentFilter}>
      <p onClick={handleHidden} className={style.filter}>
        <span className="material-symbols-outlined">sort</span> Filter
      </p>
      {hidden === true && (
        <ul className={style.items}>
          <li onClick={() => handleCategory("All")} className={style.item}>
            All
          </li>
          {category &&
            category.map((item) => (
              <li
                className={style.item}
                onClick={() => handleCategory(item.name)}
                key={item.id}
              >
                {item.name}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
