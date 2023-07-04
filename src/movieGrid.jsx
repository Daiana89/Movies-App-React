import { MovieCard } from "./movieCard";
import movies from "./movies.json";
import styles from "./movieGrid.module.css";

export function MoviesGrid() {
  return (
    <><h1>Hello Word!!</h1><ul className={styles.movieGrid}>
      {movies.map((movie) => (<MovieCard key={movie.id} movie={movie}></MovieCard>))}
    </ul></>
  );
}
