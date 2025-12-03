import { useState } from 'react'
import reactLogo from './assets/react.svg'
import mbdsLogo from '/mbds_logo_transparent.svg'
import './App.css'
import {StaticDateTime} from './components/StaticDate.jsx'
import {DynamicDateTime} from './components/DynamicDate.jsx'

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

function Todo({title,description}){
  return(
    <div>
         <h2>{title}</h2>
         <p>{description}</p>
    </div>
  );

}


function App() {
  const [count, setCount] = useState(0)
  const todo ={
     title: "Ma Deuxième tache",
     description: "ceci est la description de ma deuxième tache"
  };
  const todos=[
    {
      title: "Ma Troisième tache",
      description: "ceci est la description de ma troisième tache"
    },
    {
      title: "Ma Quatrième tache",
      description: "ceci est la description de ma quatrième tache"
    }
  ]
    

  return (
    <>
      <div>
           <Header />
           <MainContent />       
           <Footer />
           <Todo title="Ma première" description="ceci est la description de ma premiere tache"/>  
           <Todo {...todo}/>   
           <Todo {...todos[0]}/> 
           <Todo {...todos[1]}/>  
           <StaticDateTime/>  
           <DynamicDateTime/>     
      </div>
    
    </>
  )
}

export default App
