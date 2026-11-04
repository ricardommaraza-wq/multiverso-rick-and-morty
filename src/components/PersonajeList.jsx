
import PersonajeCard from "./PersonajeCard";

function PersonajeList({ personajes, favoritos, onToggleFavorito }) {
  if (!personajes || personajes.length === 0) {
    return <p className="mensaje">No hay personajes para mostrar.</p>;
  }

  return (
    <div className="grid">
      {personajes.map((personaje) => {
        const esFavorito = favoritos.some(
          (favorito) => favorito.id === personaje.id
        );

        return (
          <PersonajeCard
            key={personaje.id}
            personaje={personaje}
            esFavorito={esFavorito}
            onToggleFavorito={onToggleFavorito}
          />
        );
      })}
    </div>
  );
}

export default PersonajeList;
