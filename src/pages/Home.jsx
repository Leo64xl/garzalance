import React, { useState } from 'react';
import '../Home.css';


const Home = () => {

  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count6, setCount6] = useState(0);
  const [count7, setCount7] = useState(0);
  
  return (    
    <div className="home-container">

        <div>
          <h1 className="text-4xl text-white font-bold">"Proyecto React sección de prueba"</h1>
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

        <div className='boton3'>
          <button onClick={() => setCount3((count) => count + 1)}>
            {count3} votos en contra
          </button>
        </div>

        <div>
          <h1 className="texto-malo">MALO MALOSO</h1>
          <img className="malo-malin" src="/img/maloo.jpg" alt="Malo malosoo" />
          <p className="Pregunta-malo">MALO ES GUAPO?</p>
        </div>

        <div className='boton4'>
          <button onClick={() => setCount4((count) => count + 1)}>
            {count4} votos a favor
          </button>
        </div>

        <div className='boton5'>
          <button onClick={() => setCount5((count) => count + 1)}>
            {count5} votos en contra
          </button>
        </div>

        <div>
          <h1 className="Isra-Titulo">
            ISRA HERMOSO
          </h1>

          <img className="israLv" src='/img/isra.jpg' alt="isra divina" />
          <p className="Pregunta-Isra">ISRA ESTA DIVINA?</p>
        </div>

        <div className='boton6'>
          <button onClick={() => setCount6((count) => count + 1)}>
            {count6} votos a favor
          </button>

          <div className="boton7">
            <button onClick={() => setCount7((count) => count + 1)}>
              {count7} votos en contra
            </button>
          </div>

          <h1 className='text-yellow-600 font-extrabold text-'>Hello world!</h1>
        </div>
      </div>
  )
}

export default Home