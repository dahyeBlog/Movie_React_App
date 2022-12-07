import React from "react";
import classes from "./SearchForm.module.css";
import NotFound from "../notFound/NotFound";
import { useGlobalContext } from "../../context/context";

const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();

  // console.log(query);

  return (
    <div className={classes.form__container}>

    <form className={classes.search__form} onSubmit={(e) => e.preventDefault()}>
      <h2>영화 검색하기</h2>
      <input
        type="text"
        className={classes.form__input}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      {error.show && <div>{error.msg}</div>}
    </form>

          
    </div>
  );
};

export default SearchForm;
