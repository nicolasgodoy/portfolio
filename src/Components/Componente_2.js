import React,{Component}from"react";
import { ProgressBar } from "react-bootstrap";




class Componente_2 extends Component{
    

render(){

    
    return <div className="Componente_2 container-fluid animate__animated animate__fadeIn" id="Skills">


        
                    
           
            <div className="container Contenido_Componente_2 m-2">
            
                <div className="row">
                <h1 class="Titulo_Leng col-md-12">Skills</h1>
                 <div className="col-md-6">
                     
                    <div className="col-md-12">
                        <i class="Icono-html fab fa-html5"></i>
                        <p class="card-title">HTML-5</p>
                        <ProgressBar className="barra" striped variant="info" animated now={80} />
                    </div>
                   
                    
                    
                  
                    
                    <div class="col-md-12">
                        <i class=" Icono-Css3 fab fa-css3-alt"></i>
                        <p class="card-title "> CSS-3 </p>
                        <ProgressBar className="barra" striped variant="danger" animated now={70} />
                    </div>

                    <div class="col-md-12">
                        <i class="Icono-Js fab fa-js"></i>
                        <p class="card-title"> JS </p>
                        <ProgressBar className="barra" animated now={50} />
                    </div>
                 </div>


                 
                <div className="col-md-6">

                        <div class="col-md-12">
                            <i class="Icono-React fab fa-react"></i>
                            <p class="card-title "> React </p>
                            <ProgressBar className="barra" animated now={40} />
                        </div>



                        <div class="col-md-12">
                            <i class="Icono-GitHub fab fa-github"></i>
                            <p class="card-title "> GitHub </p>
                            <ProgressBar className="barra" striped variant="warning" animated now={50} />
                        </div>

                            
                                
                        <div class="col-md-12">
                            <i class="Icono-Boostrap fab fa-bootstrap"></i>
                            <p class="card-title "> Boostrap </p>
                            <ProgressBar className="barra" striped variant="danger" animated now={70} />
                        </div>



                        </div>
               
            </div>
         </div>
       </div>
     
    }

}

export default Componente_2;