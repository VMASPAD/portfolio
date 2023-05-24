import { useState, useEffect } from 'react';
import axios from 'axios';

import "./certificate.css"

function Certificate () {
    const [articles, setArticles] = useState([]);
    const [filteredArticles, setFilteredArticles] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('/cdb.json'); // Ruta correcta al archivo JSON
          setArticles(response.data);
        } catch (error) {
          console.error('Error al obtener los datos del archivo JSON:', error);
        }
      };
  
      fetchData();
    }, []);
  
    const handleSearch = (query) => {
      const filtered = articles.filter((article) =>
        article.type.toLowerCase().includes(query.toLowerCase()) ||
        article.title.toLowerCase().includes(query.toLowerCase())  // Utilizar article.type en lugar de article.types
      );
      setFilteredArticles(filtered);
    };
    
    return (
        <>
          <div>
            <input
              className='searchCertificates input input-bordered'
              type="text"
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Buscar certificados..."
            />
          </div>
  
          <div className='certificate' id='Certificadoss'>
            {filteredArticles.length > 0
              ? filteredArticles.map((article) => (
                <div key={article.id} className='card w-96 bg-base-100 shadow-xl image-full'>
                    <figure>
                      <img src={article.img} alt={article.title} />
                    </figure>
                    <div className="card-body">
                      <h2 className='card-title'>{article.title}</h2>
                      <p>{article.description}</p>
                      <div className="card-actions justify-end">
                        <div className="badge badge-outline">{article.type}</div>
                      </div>
                    </div>
                  </div>
                ))
              : articles.map((article) => (
                  <div key={article.id} className='card w-96 bg-base-100 shadow-xl image-full'>
                    <figure>
                      <img src={article.img} alt={article.title} />
                    </figure>
                    <div className="card-body">
                      <h2 className='card-title'>{article.title}</h2>
                      <p>{article.description}</p>
                      <div className="card-actions justify-end">
                        <div className="badge badge-outline">{article.type}</div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </>
    );
}

export default Certificate;
