import { useState } from 'react'
import reactLogo from './assets/react.svg'
import mbdsLogo from '/mbds_logo_transparent.svg'
import './App.css'
import {Header} from './components/HeaderApp.jsx';
import {MainContent, Todo} from './components/BodyApp.jsx';
import {Footer} from './components/FooterApp.jsx';
import {NoteDetail} from './components/NoteDetail.jsx';
import data from './assets/data.json';
import {MenuItem} from './components/Menu.jsx';


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
   
  const randomItem = data[Math.floor(Math.random() * data.length)];
  function handleClick(){
     console.log("Button clicked");
  }

  return (
    <>
      <div>
           <Header />
           <MainContent />
           <Todo title="Ma première" description="ceci est la description de ma premiere tache"/>  
           <Todo {...todo}/>   
           <Todo {...todos[0]}/> 
           <Todo {...todos[1]}/>  
           <Footer/>

           <p>---------------------------TD03 : Utiliser les props---------------------------</p>
          
           <NoteDetail randomItem={randomItem} />

          <p>---------------------------TD04 : Gestion d'événements---------------------------</p>
          
          <>
            <div className="menu-container">
              
               <MenuItem title="Notes" onClick={()=>{alert("Notes sélectionnées")}} />
               <MenuItem title="Etudiants" onClick={()=>{alert("Etudiants sélectionnés")}} />              
               <MenuItem title="Matières" onClick={()=>{alert("Matières sélectionnées")}}/>
               <MenuItem title="A propos" onClick={()=>{alert("A propos sélectionné")}}/>
           </div>
         </>
                         
      </div>
    
    </>
  )
}

export default App
