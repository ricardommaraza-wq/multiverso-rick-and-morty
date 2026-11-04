import { useState } from "react";
import { usePersonajes } from "./hooks/usePersonajes";
import PersonajeList from "./components/PersonajeList";
import FavoritesPanel from "./components/FavoritesPanel";

function MultiversoApp() {
  const { personajes, cargando, error } = usePersonajes();
  const [favoritos, setFavoritos] = useState([]);

  function toggleFavorito(personaje) {
    setFavoritos((actuales) => {
      const existe = actuales.some(
        (favorito) => favorito.id === personaje.id
      );

      return existe
        ? actuales.filter((favorito) => favorito.id !== personaje.id)
        : [...actuales, personaje];
    });
  }

  if (cargando) return <p>Cargando personajes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Multiverso Rick and Morty</h1>

      <div className="layout">
        <PersonajeList
          personajes={personajes}
          favoritos={favoritos}
          onToggleFavorito={toggleFavorito}
        />

        <FavoritesPanel
          favoritos={favoritos}
          onToggleFavorito={toggleFavorito}
        />
      </div>
    </div>
  );
}

export default MultiversoApp;