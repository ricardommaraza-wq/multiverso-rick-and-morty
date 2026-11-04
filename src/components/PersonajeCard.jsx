
function PersonajeCard({ personaje, esFavorito, onToggleFavorito }) {
  const claseEstado = personaje.status.toLowerCase();

  return (
    <div className={`card ${esFavorito ? "fav" : ""}`}>
      <img src={personaje.image} alt={personaje.name} />

      <h4>{personaje.name}</h4>

      <p className={`estado estado-${claseEstado}`}>
        {personaje.status}
      </p>

      <p>{personaje.species}</p>

      <button onClick={() => onToggleFavorito(personaje)}>
        {esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}
      </button>
    </div>
  );
}

export default PersonajeCard;
