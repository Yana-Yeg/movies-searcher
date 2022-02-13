import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import {  useRouteMatch, useLocation } from 'react-router-dom';
import { GetMovies } from 'utils/FetchApi';
// import Text from './Text';

function HomeView() {
  //   const { url } = useRouteMatch();
  // const { pathname } = useLocation();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    GetMovies().then(data => {
      setMovies(data);
      //   setTimeout(() => console.log(movies), 2000);
      //   setMovies(prev => {
      //     console.log(prev);
      //     return prev;
      //   });
    });
  }, []);

  // console.log('после эффекта :>> ', movies);

  return (
    <>
      {/* <Text /> */}
      <h1>Tranding today</h1>
      {movies &&
        movies.map(el => (
          <li key={el.id}>
            <Link to={`/movies/${el.id}`}>{el.original_title}</Link>
          </li>
        ))}
    </>
  );
}

export default HomeView;
// to={`/${pathname}/${el.id}`}
