import React from 'react';
import Presentacion_Contacto from '../Animacion/88967-food-delivery-service.json';
import Lottie from 'react-lottie';
import { Link } from "react-router-dom";






const defaultOptions = {
    loop:true,
    autoplay:true,
    rendererSetting: {
        preserveAspectRatio: 'xMidYMid slice'
    }
    

}; 


export default function Animacion_Contacto(){

    return <>
                <div class="container-fluid Animacion_Contacto animate__animated animate__fadeIn" id="Animacion_Contacto">

                    <div className="row">
                        

                        <div className="col-md-8">
                            <Lottie  options={{animationData: Presentacion_Contacto,defaultOptions}}/>
                        </div>
                        <div className="col-md-2">
                            <Link to="/Formulario"><button type="button" className="col-md-12 m-1 border-0 btn Boton_Contacto_3 rounded p-3"> Contacto </button></Link>
                        </div>
                            
                    </div>

                </div>
            </>

}