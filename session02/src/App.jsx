import { useState } from 'react'
import {Header} from './components/Header.jsx';
import {MainContent} from './components/MainContent.jsx';
import {Footer} from './components/Footer.jsx';
import {MenuItem} from './components/Menu.jsx';
import { MenuContent } from './components/MenuContent.jsx';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [selectedMenu, setSelectedMenu] = useState(null);
   
  const menuItems = [
    { title: "Notes" },
    { title: "Etudiants" },
    { title: "Matières" },
    { title: "A propos" },
  ];

  return (
    <>
      <Header/>
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          title={item.title}
          onClick={() => setSelectedMenu(item.title)}
        />
      ))}

      {/* Le contenu dynamique */}
      <MenuContent selectedMenu={selectedMenu} />

      <MainContent/>
      <Footer/>      
    </>
  )
}

export default App
