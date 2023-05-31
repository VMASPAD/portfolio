import { useState, useEffect } from 'react';
import axios from 'axios';

import "./App.css";

function Proyects() {
    const [articles, setArticles] = useState([]);
    const [filteredArticles, setFilteredArticles] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get('/db.json');
        setArticles(response.data);
      };
  
      fetchData();
    }, []);
  
    const handleSearch = (query) => {
      const filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.type.toLowerCase().includes(query.toLowerCase()) 
      );
      setFilteredArticles(filtered);
    };

    {
        return (
            <>
                  <div>
        <input
          className='searchProyects input input-bordered'
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Buscar proyectos..."
        />
      </div>
<div className='articlesProyects' id='Proyectos'>
  {filteredArticles.length > 0
    ? filteredArticles.map((article) => (
      <div key={article.id} className='card w-96 h-78 bg-gradient-to-b from-base-100 to-transparent shadow-2xl colorCard'>
          <figure>
            <img src={article.img}></img>
          </figure>
          <div className="card-body">
            <h2 className='card-title'>{article.title}</h2>
            <p>{article.description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{article.type}</div>
            </div>
              <a href={article.web}  className="btn btn-accent btn-outline" ><button>Ver</button></a>
          </div>

        </div>
      ))
    : articles.map((article) => (
        <div key={article.id} className='card w-96 h-78 bg-gradient-to-b from-base-100 to-transparent shadow-2xl colorCard'>
          <figure>
            <img src={article.img}></img>
          </figure>
          <div className="card-body">
            <h2 className='card-title'>{article.title}</h2>
            <p>{article.description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{article.type}</div>
            </div>
              <a href={article.web}  className="btn btn-accent btn-outline" ><button>Ver</button></a>
          </div>

        </div>
      ))}
</div>
            </>
        );
    }
}

export default Proyects;