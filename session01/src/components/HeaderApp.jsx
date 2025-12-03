import reactLogo from '../assets/react.svg'; // adjust path if needed


function Header() {
  return (
   <>
                   <a href="https://fds.edu.ht/inscriptionMBDS/user/login" target="_blank">
                <img src="/mbds_logo_transparent.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
               <img src={reactLogo} className="logo react" alt="React logo" />
            </a>

       <div>
            <h1>Introduction à React</h1>
            <h2>À la découverte des premières notions de React</h2>
       </div>
   </>
  );
}

export  { Header };