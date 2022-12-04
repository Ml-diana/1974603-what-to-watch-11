import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { changeGenreAction } from '../store/action';
import {selectFilm, selectGenre} from '../store/selector';

function GenreList () : JSX.Element {
  const dispatch = useAppDispatch();
  const selectedGenre = useAppSelector(selectGenre);
  const films = useAppSelector(selectFilm);
  const genres = Array.from(new Set((films.map((item) => item.genre))));

  const handleAllGenreClick = () => {
    dispatch(changeGenreAction('All genres'));
  };

  return(
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${selectedGenre === 'All genres' ? 'catalog__genres-item--active' : ''}`}>
        <Link to ="/" className="catalog__genres-link" onClick={handleAllGenreClick}>All genres</Link>
      </li>
      {genres.map((genre) => (
        <li key={genre} className={`catalog__genres-item ${genre === selectedGenre ? 'catalog__genres-item--active' : ''}`}>
          <Link to ="/" className="catalog__genres-link" onClick={() => dispatch(changeGenreAction(genre))}>{genre}</Link>
        </li>
      ))}
    </ul>
  );
}

export default GenreList;
