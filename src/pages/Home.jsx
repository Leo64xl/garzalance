import React, { useState } from 'react';
import '../Diseños_css/Home.css';

const Home = () => {

  const [count2, setCount2] = useState(0);
    
  return (    
    <div className="home-container">

        <div>
          <h1 className="text-4xl text-white font-bold">Proyecto React, sección de prueba 🧐</h1>
        </div>            
      
        <div className="fran-guapo">
          <h1 className="fran-title">FRAN DORMIDO</h1>
          <img className="fran-image" src="/img/frannn.jpg" alt="FRAN DORMIDO" />
        </div>

        <p className="texto-fran">FRAN ES GUAPO?</p>
        
        <div className="boton2">
          <button onClick={() => setCount2((count) => count + 1)}>
            {count2} votos a favor
          </button>
        </div>
       
        <div>
          <h1 className='text-yellow-600 font-extrabold text-'>Hello world!</h1>
        </div>

      </div>
  )
}

export default Home