import { useState } from 'react'
import reactLogo from './assets/react.svg'
import mbdsLogo from '/mbds_logo_transparent.svg'
import './App.css'
import {Header} from './components/HeaderApp.jsx';
import {MainContent, Todo} from './components/BodyApp.jsx';
import {Footer} from './components/FooterApp.jsx';


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
           <Todo title="Ma première" description="ceci est la description de ma premiere tache"/>  
           <Todo {...todo}/>   
           <Todo {...todos[0]}/> 
           <Todo {...todos[1]}/>  
           <Footer/>
                
      </div>
    
    </>
  )
}

export default App
