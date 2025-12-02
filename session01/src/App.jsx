import { useState } from 'react'
import reactLogo from './assets/react.svg'
import mbdsLogo from '/mbds_logo_transparent.svg'
import './App.css'

function Header() {
  return (
   <>
       <div>
            <a href="https://fds.edu.ht/inscriptionMBDS/user/login" target="_blank">
                <img src={mbdsLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
               <img src={reactLogo} className="logo react" alt="React logo" />
            </a>

            <h1>Introduction à React</h1>
            <h2>À la découverte des premières notions de React</h2>
       </div>
   </>
  );
}

function MainContent() {
  return (
   <>
       <div>
            <p>Ici, nous afficherons des informations interessantes :) </p>
       </div>
   </>
  );
}

function Footer() {
  return (
   <>
       <div>
            <p>Tous droits réservés - [Michel] [Jasmin]</p>
       </div>
   </>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
           <Header />
           <MainContent />
           <Footer />
          
      </div>
    
    </>
  )
}

export default App
