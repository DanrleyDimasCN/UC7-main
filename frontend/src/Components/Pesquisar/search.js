import React, { useState, useEffect } from "react";
import api from "../../services/api";
import search from "../../image/logo-search.png";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (query.length < 3) {
      setResults([]);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await api.get(`/pesquisa?q=${query}`);
        setResults(response.data);
      } catch (error) {
        setError("Nenhum vinho encontrado.");
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(fetchData, 500); 
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="box-search">
      <form>
        <div className="box-search-box-btn">
          <input
            type="search"
            placeholder="Pesquisar..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">
            <img src={search} alt="Pesquisar" />
          </button>
        </div>
      </form>

      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}

      <ul className="results-list">
        {results.map((vinho) => (
          <li key={vinho.id}>
            <strong>{vinho.nome}</strong> - {vinho.tipo}
          </li>
        ))}
      </ul>
    </div>
  );
}
