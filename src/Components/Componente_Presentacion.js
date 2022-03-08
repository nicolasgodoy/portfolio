import React from 'react'
import Imagen from "./Imagenes/undraw_code_thinking_re_gka2.svg";





const defaultOptions = {
    loop:true,
    autoplay:true,
    rendererSetting: {
        preserveAspectRatio: 'xMidYMid slice'
    }

}; 




/*
 POR SI QUIERO VOLVER A USAR UN FONDO COMO ANIMACION CON REACT-TSPARTICLES

const particlesInit = (main) => {
   console.log(main)
  
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
};
  
const particlesLoaded = (container) => {
    //container = document.getElementById("tsparticles").style.top = "100px!important";
    console.log(container)
    
};
*/

const Componente_Presentacion = () => {
    
  return (
      
    <div className="container-fluid Componente_Presentacion animate__animated animate__fadeIn">
       
       <div className="row Contenido-Presentacion">
            <div className="Titulos col-md-6">
                
                <h2>
                  <span className="Titulo_Bienvenida animate__animated animate__fadeInUp animate__delay-2s">Bienvenidos</span>
                </h2>
                <h2>
                  <span className="Titulo_Bienvenida_2 animate__animated animate__fadeInUp animate__delay-3s ">a mi portfolio</span>
                </h2>
                <div className="Contenedor_Subrayado ">
                  <span className="Subrayado_TituloBienvenida animate__animated animate__fadeInUp animate__delay-3s"></span>
                </div>
            </div>
              <br></br>
              <br></br>
      </div>

            
          <ul className="Iconos col-md-12 animate__animated animate__fadeInUp animate__delay-4s">
            <div className="col-md-3 Lista-Iconos">
              <li><a href="#"><span><i class="fab fa-instagram Instagram"></i></span> </a> </li>
              <li><a href="#"><span><i class="fab fa-facebook-square Facebook"></i></span> </a> </li>
              <li><a href="#"><span><i class="far fa-envelope Correo"></i></span> </a> </li>
              <li><a href="#"><span><i class="fab fa-linkedin Linkedin"></i></span> </a></li>
              
            </div>
          </ul>
         
        <div className="row col-md-11 animate__animated animate__fadeInUp animate__delay-4s">
          <ul className="col-md-3 redes-presentacion">
            <li><a href="#"><span>correo:xxxxx</span> </a></li>
            <li><a href="#"><span>direccion:xxxxx</span> </a></li>
            
          </ul>  
          <div className="col-md-3 Icono redes-presentacion">
            <li><a href="#"><span><i class="telefono fa fa-solid fa-phone-volume"></i>Para Mas Informacion: xxxx</span> </a></li>
          </div>
          
        </div>
               
      



      
      

            
       


   
</div>
    
  )
}
export default Componente_Presentacion;
