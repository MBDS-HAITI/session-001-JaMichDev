import { useState } from 'react'
import reactLogo from './assets/react.svg'
import mbdsLogo from '/mbds_logo_transparent.svg'
import './App.css'
import {Header} from './components/HeaderApp.jsx'
import {Footer} from './components/FooterApp.jsx'
import {StaticDateTime} from './components/StaticDate.jsx'




function MainContent() {
  return (
   <>
       <div>
            <p>Ici, nous afficherons des informations interessantes :) </p>
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
            
      </div>
    
    </>
  )
}

export default App
