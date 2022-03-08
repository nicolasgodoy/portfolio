
import './App.css';
import Imagen_logo from './Components/Imagenes/logonico.png';
import Rutas from './Components/Rutas';
import {Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <header>
     
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        
            <div className="">
              <img className="logo" src={Imagen_logo}></img>
            </div>
            <div className="Contenido_nav">
              <h5>Nicolas Godoy</h5>
              <p> <small>DESARROLLADOR WEB</small> </p>
            </div>
         
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="nav-menu">
                <li><Link to="home"><button>Home</button></Link></li>
                <li><Link to="about"><button>Sobre Mi</button></Link></li>
                <li><Link to="Skills"><button>Skills</button></Link> </li>
                <li><Link to="Proyectos"><button>Proyectos</button></Link> </li>
                <li><Link to="AnimacionContacto"><button>Contacto</button></Link> </li>
                
            </ul>
          </div>
        </nav>
      </header>
 
    
    
    
    <Rutas></Rutas>

    

       
    
 
    
     
     
  
    
     
    

    
   
    </div>
  );
}

export default App;
