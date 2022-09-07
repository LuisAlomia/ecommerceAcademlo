import { useState } from "react";
import style from "./styles/search.module.css";

const Search = ({ setSearch }) => {
  const [input, setInput] = useState();

  const onchangeInput = (e) => {
    setInput(e.target.value);
    setSearch(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault;
  };

  return (
    <form onSubmit={submit} className={style.form}>
      <input
        className={style.input}
        type="text"
        value={input}
        onChange={onchangeInput}
      />
      <button className={style.button}>
        <span className="material-symbols-outlined">search</span>
      </button>
    </form>
  );
};

export default Search;
