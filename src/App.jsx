import { MoviesGrid } from "./movieGrid";
import styles from "./App.module.css"

export function App(){
    return <div>
        <header>
           <h1 className={styles.textStyle}>Movies</h1> 
        </header>
        <main>
            <MoviesGrid/>
        </main>
    </div>
}