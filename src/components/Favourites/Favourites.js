import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Favourites/Favourites.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import { favlistsAction } from "../../Redux/actions/favlist";
import { removeListAction } from "../../Redux/actions/lists";

export function Favourites() {
  const movies = useSelector((state) => state.lists.list);
  const [btn, setBtn] = useState();
  const [btnColor, setBtnColor] = useState();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.value === "") {
      setBtn(false);
      setBtnColor("#575756");
    } else {
      setBtn(true);
      setBtnColor("red");
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (btn) {
      const inputValue = e.target.parentElement.firstChild.firstChild.value;
      dispatch(favlistsAction(movies, inputValue));
    }
  };

  const handleDeleteClick = (e, imdbID) => {
    e.preventDefault();
    const newList = movies.filter((item) => item.imdbID !== imdbID);
    dispatch(removeListAction(newList));
  };

  return (
    <div className="fav">
      <form className="fav-form">
        <div className="fav-container">
          <input type="text" className="fav-input" placeholder="Give the Name to List" onChange={handleChange} />
        </div>
        <div>
          <ul className="fav-lists">
            {movies !== undefined &&
              !!movies.length &&
              movies.map((movie) => {
                return (
                  <li className="fav-list" key={movie.imdbID}>
                    <article className="fav-movie-item">
                      <div className="fav-movie-cont">
                        {" "}
                        <img
                          className="fav-movie-item__poster"
                          src={movie.Poster}
                          alt={movie.Title}
                        />
                      </div>
                      <div className="fav-movie-item__info">
                        <h3 className="fav-movie-item__title">
                          {movie.Title}&nbsp;{movie.Year}
                        </h3>

                        <div
                          className="delete-icon"
                          onClick={(e) => handleDeleteClick(e, movie.imdbID)}
                        >
                          <FontAwesomeIcon
                            icon={faCircleXmark}
                            className="icon"
                          />
                        </div>
                      </div>
                    </article>
                  </li>
                );
              })}
          </ul>
        </div>
        <button
          type="submit"
          className="fav-btn"
          onClick={handleClick}
          style={{ disabled: btn, borderColor: btnColor }}
        >
          Save List
        </button>
      </form>
    </div>
  );
}
