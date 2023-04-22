import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import "../SaveList/SaveList.css"

export function SaveList() { 
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  const movies = useSelector((state) => state.favlist.slice(1));
  return (
    <div className="save-list">
      {isHomePage ? (
        <NavLink className="collection" to={"./collection"}>Collections</NavLink>
      ) : (
        <NavLink className="collection" to="/">Home</NavLink>
      )}
      <ul className="save-lists">
        {movies !== undefined &&
          !!movies.length &&
          movies.map((item) => {
              console.log(item.inputName)
              return (
                  <div className="save-list-container">
                      <h3 className="name">{item.inputName}</h3>
                {item.favlist.map(element => {
                    console.log(element)
                    return (
                        <div className="li-div">
                         <li className="sav-list" key={element.imdbID}>
                <article className="save-item">
                  <div className="save-cont">
                    {" "}
                    <img
                      className="save-item__poster"
                      src={element.Poster}
                      alt={element.Title}
                      width="300px"
                    />
                  </div>
                  <div className="save-item__info">
                    <div className="save-item__cont">
                      <h3 className="save-item__title">
                        {element.Title}&nbsp;({element.Year})
                      </h3>
                    </div>
                  </div>
                </article>
              </li>
                       </div>
                    )
                    
                })}
              </div>
            );
          })}
      </ul>
    </div>
  );
}
