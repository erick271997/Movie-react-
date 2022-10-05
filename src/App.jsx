import React from "react";
import MoviesGrid from "./MoviesGrid";


const App = () => {
    return(
        <div>
            <header>
                <h1>Movies</h1>
            </header>
            <main>
                <MoviesGrid/> {/* Esta es un comopenete que se creo, se paso asqui para hacerlo aprte para no mezclar todo el codigo aqui se puede hacer aqui pero no es buena practica */} 
                </main>
        </div>
    );
}

export default App;