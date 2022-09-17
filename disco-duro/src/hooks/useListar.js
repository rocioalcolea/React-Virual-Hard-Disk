import { useEffect, useState } from "react";
import { loadListarService } from "../services";
export default function useListar() {
  const [archivos, setArchivos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadListar = async () => {
      try {
        setLoading(true);
        const data = await loadListarService();
        setArchivos(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
  }, []);

  return { error, loading, archivos };
}
