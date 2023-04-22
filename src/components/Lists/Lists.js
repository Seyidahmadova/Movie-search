import { useDispatch, useSelector } from "react-redux";
import { listsAction } from "../../Redux/actions/lists";
import "../Lists/Lists.css";

export const List = () => {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  const handleClick = (movie) => {
    dispatch(listsAction(movie));
  };

  return (
    <div className="search">
      <ul className="search-lists">
        {movies !== undefined &&
          !!movies.length &&
          movies.map((item) => {
            return (
              <li className="search-list" key={item.imdbID}>
                <article className="movie-item">
                  <div className="movie-cont">
                    {" "}
                    <img
                      className="movie-item__poster"
                      src={item.Poster}
                      alt={item.Title}
                      width="300px"
                    />
                  </div>
                  <div className="movie-item__info">
                    <div className="movie-item__cont">
                      <h3 className="movie-item__title">
                        {item.Title}&nbsp;({item.Year})
                      </h3>
                    </div>
                    <button
                      className="movie-item__add-button"
                      onClick={() => handleClick(item)}
                    >
                      Add to list
                    </button>
                  </div>
                </article>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
