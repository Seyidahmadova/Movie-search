import React from "react";
import { useDispatch } from "react-redux";
import { moviesAction } from "../../Redux/actions/movies";
import "../Search/Search.css";

export function Search() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(moviesAction(e.target.firstChild.firstChild.value));
  };


  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-container">
          <input
            className="search-input"
            type="search"
            name="title"
            placeholder="Ex. Shawshank Redemption"
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
