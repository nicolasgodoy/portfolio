import React,{Component}from"react";
import Imagenes_Api from '../../src/Components/Imagenes/API-JS.png';
import Imagenes_Api_Tiempo from '../../src/Components/Imagenes/apiTiempo.jpg';
import Imagenes_Login from '../../src/Components/Imagenes/Login.jpg';
import Imagenes_Seguridad from '../../src/Components/Imagenes/proyecto2.jpg';
import Imagenes_TaTeTi from '../../src/Components/Imagenes/tateti.jpg';
import Imagenes_heroes from '../../src/Components/Imagenes/heroes.jpg';
import Imagenes_spotify from '../../src/Components/Imagenes/spotiApp.jpg';
import { Accordion } from "react-bootstrap";
import Lottie from 'react-lottie';
import Animacion_Proyectos from '../Animacion/78148-project-management.json';






const defaultOptions = {
    loop:true,
    autoplay:true,
    rendererSetting: {
        preserveAspectRatio: 'xMidYMid slice'
    }
    

}; 





class Componente_3 extends Component{

render(){
    return <div className="container_fluid Componente_3 animate__animated animate__fadeIn" id="Proyectos">

   

    <div className="row Proyectos">
        
    <div className="col-md-6">  

            <h2 class="col-md-12 p-2 Tit-Proyectos ">Proyectos</h2>


            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>PROYECTO #1 <i class="fas fa-chevron-down"></i> </Accordion.Header>
                    <Accordion.Body>
                    <div class="row Contenido-Proyectos">
                        <div class="col-md-3">
                            <img  src={Imagenes_spotify} class="card-img-top Imagenes_Proyectos"alt="..."/>
                        </div>
                            <div class="col-md-4">
                                <div class="card-body  body-Proyectos">
                                    <h5 class="card-title">Angular</h5>
                                    <p small class="texto-Proyectos">Simulacion de App Spotify</p>
                                    <a href="https://nicolasgodoy.github.io/SpotiApp/#" target="_blank" class=" p-2 Btn_Proyectos btn">Ver Proyecto</a>
                                </div>
                            </div>
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>PROYECTO #2 <i class="fas fa-chevron-down"></i></Accordion.Header>
                    <Accordion.Body>
                    <div class="card  m-2">
                    <div class="row Contenido-Proyectos">
                        <div class="col-md-3">
                        <img src={Imagenes_heroes} class="card-img-top Imagenes_Proyectos" alt="..."/>
                        </div>
                        <div class="col-md-4">
                        <div class="card-body  body-Proyectos">
                        <h5 class="card-title ">Angular</h5>
                            <p small class="texto-Proyectos ">Curso, Rutas, Servicios y Interface </p>
                            <a href="https://nicolasgodoy.github.io/angular/" target="_blank" class=" p-2  Btn_Proyectos btn">Ver Proyecto</a>
                        </div>
                        </div>
                    </div>
                </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>PROYECTO #3 <i class="fas fa-chevron-down"></i></Accordion.Header>
                    <Accordion.Body>
                    <div class="card  m-2">
                        <div class="row Contenido-Proyectos">
                            <div class="col-md-3">
                            <img src={Imagenes_Api_Tiempo} class="card-img-top Imagenes_Proyectos" alt="..."/>
                            </div>
                            <div class="col-md-4">
                            <div class="card-body  body-Proyectos">
                            <h5 class="card-title">Javascript, HTML y CSS3</h5>
                                <p small class="texto-Proyectos ">Conexion Con Api del Tiempo</p>
                                <a href="https://proyecto-6-e5863.web.app/" target="_blank" class=" p-2  Btn_Proyectos btn">Ver Proyecto</a>
                            </div>
                            </div>
                        </div>
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="3">
                    <Accordion.Header>PROYECTO #4 <i class="fas fa-chevron-down"></i></Accordion.Header>
                    <Accordion.Body>
                    <div class="card  m-2">
                        <div class="row Contenido-Proyectos">
                            <div class="col-md-3">
                            <img src={Imagenes_Seguridad} class="card-img-top Imagenes_Proyectos" alt="..."/>
                            </div>
                            <div class="col-md-4">
                            <div class="card-body  body-Proyectos">
                            <h5 class="card-title ">HTML-5 y CSS3</h5>
                                <p small class="texto-Proyectos">Examen Final de un Curso de Elearning Total</p>
                                <a href="https://cursoproyecto1.000webhostapp.com/" target="_blank" class="p-2  Btn_Proyectos btn">Ver Proyecto</a>
                            </div>
                            </div>
                        </div>
                    </div>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>PROYECTO #5 <i class="fas fa-chevron-down"></i></Accordion.Header>
                    <Accordion.Body>
                    <div class="card  m-2">
                        <div class="row Contenido-Proyectos">
                            <div class="col-md-3">
                                <img src={Imagenes_TaTeTi} class="card-img-top Imagenes_Proyectos" alt="..."/>
                            </div>
                            <div class="col-md-4">
                                <div class="card-body  body-Proyectos">
                                    <h5 class="card-title ">Javascript</h5>
                                    <p small class="texto-Proyectos">Examen Final de un Curso de Elearning Total </p>
                                    <a href="https://proyecto-8-edb1b.web.app/index.html" target="_blank" class="p-2 Btn_Proyectos btn">Ver Proyecto</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>PROYECTO #6 <i class="fas fa-chevron-down"></i></Accordion.Header>
                    <Accordion.Body>
                    <div class="card  m-2">
                        <div class="row Contenido-Proyectos">
                            <div class="col-md-3">
                                <img src={Imagenes_Login} class="card-img-top Imagenes_Proyectos" alt="..."/>
                            </div>
                            <div class="col-md-4">
                                <div class="card-body  body-Proyectos">
                                    <h5 class="card-title ">HTML y CSS3</h5>
                                    <p small class="texto-Proyectos">Templete Login</p>
                                    <a href="https://proyecto-4-6cf1b.web.app/" target="_blank" class=" p-2  Btn_Proyectos btn">Ver Proyecto</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header className="Texto_Proyectos">PROYECTO #7 <i class="fas fa-chevron-down"></i></Accordion.Header>
                    <Accordion.Body>
                    <div class="card m-2">
                        <div class="row Contenido-Proyectos">
                            <div class="col-md-3">
                                <img src={Imagenes_Api} class="card-img-top Imagenes_Proyectos" alt="..."/>
                            </div>
                            <div class="col-md-4">
                                <div class="card-body  body-Proyectos">
                                    <h5 class="card-title">Javascript,HTML y CSS3</h5>
                                    <p small class="texto-Proyectos">Conexion Api Con Javascript</p>
                                    <a href="https://proyecto-5-75fff.web.app/" target="_blank" class=" p-2  Btn_Proyectos btn">Ver Proyecto</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    </Accordion.Body>
                </Accordion.Item>

                
            </Accordion>

    
        </div> 

        <div className="col-md-5">
            <Lottie  options={{animationData: Animacion_Proyectos,defaultOptions}}/>
        </div>

        
    </div>

   

</div>;


    
}




}

export default Componente_3;