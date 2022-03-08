import React,{Component}from"react";
import imagen from '../../src/Components/Imagenes/fotonico_2.jpeg';
import 'animate.css';
import { Link } from "react-router-dom";






const defaultOptions = {
    loop:true,
    autoplay:true,
    rendererSetting: {
        preserveAspectRatio: 'xMidYMid slice'
    }

}; 





class Componente_1 extends Component{
   
      
    
    
    
    
    
render(){
    return <div className="Componente_1 container-fluid animate__animated animate__fadeIn" id="SobreMi">

                    <div class="row Contenido_Componente_1">
                        <div class="col-md-6">
                            <img className="Imagen_Nico animate__animated animate__fadeInLeft" src={imagen}/>
                        </div>
                        <div class="col-md-6">

                            <div class="text-center">
                                <h2 class="Tit_SobreMi text-left   animate__animated animate__fadeInDown"> Acerca de mi </h2>
                                <div className="Contenedor_Subrayado ">
                                    <span className="Subrayado_TituloBienvenida animate__animated animate__fadeInDown"></span>
                                </div>
                                <p class="card-text">
                                    <ul className="Lista_Informacion text-dark text-left p-2   animate__animated animate__fadeInUp">
                                        <li><b>Nombre:Emiliano,Nicolass</b></li> 
                                        <li><b>Apellido:Godoy</b></li> 
                                        <li><b> Nacimiento:18/09/1995</b></li> 
                                        <li><b>Website:nicolasgodoy.github.io</b></li> 
                                        <li><b>Ciudad:Entre Rios, Parana</b></li> 
                                        <li><b>Pais:Argentina</b></li> 
                                        <li><b>Titulo:En proceso </b></li> 
                                    </ul>
                                </p>
                            </div>

                        </div>

                        <div class="col-md-12">
                            <Link to="/Educacion"><button type="button" className="m-1 col-md-3 border-0 btn Boton_Educacion rounded p-2"> Mi Formacion </button></Link> 
                        </div>
                    </div>
              
            
            
          
           
            

        </div>;

       

    
    
    
    
}




}

export default Componente_1;

