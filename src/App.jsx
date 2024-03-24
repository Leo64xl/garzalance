import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App() {
  
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)
  const [count4, setCount4] = useState(0)
  const [count5, setCount5] = useState(0)
  const [count6, setCount6] = useState(0)
  const [count7, setCount7] = useState(0)

  return (
    <>
    <div class="fran-guapo">
      <h1 class="fran-title">FRAN DORMIDO</h1>
       <img class="fran-image" src="/img/frannn.jpg" alt="FRAN DORMIDO" />
    </div>
      <p class="texto-fran">FRAN ES GUAPO?</p>
    <div className="boton2"> 
  <button onClick={() => setCount2((count) => count + 1 )}>
    {count2} votos a favor
  </button>
  </div>
  <div className='boton3'>
<button onClick={ () => setCount3((count) => count +1 )}>
   {count3} votos en contra
</button>
  </div>
  <div>
    <h1 class="texto-malo">MALO MALOSO</h1>
    <img class="malo-malin" src="/img/maloo.jpg" alt="Malo malosoo" />
    <p class="Pregunta-malo">MALO ES GUAPO?</p>
    </div>    
    <div className='boton4'>
    <button onClick={ () => setCount4((count) => count + 1)}>
      {count4} votos a favor 
    </button>
    </div>
    <div className='boton5'>
    <button onClick={ () => setCount5((count) => count + 1)}>
      {count5} votos en contra 
    </button>
    </div>
    <div>
      <h1 className="Isra-Titulo">
      ISRA HERMOSO
      </h1>
      <img class="israLv" src='/img/isra.jpg' alt="isra divina" />
      <p class="Pregunta-Isra">ISRA ESTA DIVINA?</p>
    </div>
    <div className='boton6'>
    <button onClick={ ()=> setCount6((count) => count + 1)}>
      {count6} votos a favor
    </button>
    <div className="boton7">
      <button onClick={ () => setCount7((count) => count + 1)}>
        {count7} votos en contra
      </button>
    </div>
    <h1 className='text-yellow-600 font-extrabold'>Hello world!</h1>
    </div>
    </>
  )
}

export default App
