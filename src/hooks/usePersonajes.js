
import { useState, useEffect } from "react";
import { fetchPersonajes } from "../services/fetchPersonajes";

export function usePersonajes() {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function cargarPersonajes() {
      try {
        setCargando(true);
        setError(null);

        const datos = await fetchPersonajes();
        setPersonajes(datos);
      } catch (err) {
        setError("No se pudieron cargar los personajes. Verifica tu conexión.");
      } finally {
        setCargando(false);
      }
    }

    cargarPersonajes();
  }, []);

  return { personajes, cargando, error };
}
