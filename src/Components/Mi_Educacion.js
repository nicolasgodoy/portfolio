import React from 'react';
import { Link } from "react-router-dom";




const Mi_Educacion = () => {

    
  
  return (<div className="Contenedor_Estudios">
      
      

      <div className="container animate__animated animate__fadeInLeft text-center" id="Estudios">
   
      
  
      <h3 className="Titulo_Educacion">Arbol Academico</h3> 

        <p> <b> 2019 - 2022 Formacion Autodidacta </b> <i class="Icono-html-Est  fab fa-html5"></i> <i class=" Icono-Css3-Est  fab fa-css3-alt"></i> <i class=" Icono-Js-Est fab fa-js-square"></i> <i class=" Icono-Code-Est  fas fa-code"></i> <i class=" Icono-git-Est  fas fa-code-branch"></i><i class="Icono-React-Est  fab fa-react"></i><i class="Icono-angular-Est  fab fa-angular"></i> </p>  
        <div class="contenido"></div>

      
        <div class="contenido1"></div>

        <div class="contenido2"></div>

        <p><b>22/03/2021 - 22/5/2021 - Certificado Responsive HTML5 y CSS3 </b><i class="Icono-html-Est  fab fa-html5"></i> <i class=" Icono-Css3-Est  fab fa-css3-alt"></i>  </p> 

        <div class="contenido3"></div>

        <div class="contenido4"></div>

        <div class="contenido5"></div>
      
        <p> <b>22/06/2021 - 23/08/2021 - Certificado Programacion Web Con Javascript </b> <i class=" Icono-Js-Est  fab fa-js-square"></i> </p>  

        <div class="contenido6"></div>

        <div class="contenido7"></div>

        <div class="contenido8"></div>

        <p> <b> 2020 - 2021 Facultad - A.Sistemas -  A Finalizar </b> <i class=" Icono-libro-Est  fas fa-book"></i> <i class=" Icono-taza-Est  fas fa-coffee"></i> </p>  
     
   

      <div className="col-md-12">
        <Link to="/about"><button type="button" className="col-md-2 m-1 border-0 btn Boton_Educacion_2 rounded p-2 "> Volver SobreMi </button></Link>
      </div>

      </div>
        </div>);
};

export default Mi_Educacion;
