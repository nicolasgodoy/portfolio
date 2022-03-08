import React from "react";
import { Accordion} from "react-bootstrap";
import Imagen_logo from '../Components/Imagenes/logong_png.png';



export default function React_Boostrap(){
    return <>
    <h1>PRUEBAS DE REACT-BOOSTRAP</h1>

<Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
        <div class="row">
            <div className="col-md-12">
            <img className="logo_Footer" src={Imagen_logo} width={250}></img>
            </div>
        </div>
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
        <div class="row">
        <img className="logo_Footer" src={Imagen_logo} width={250}></img>
        </div>
        </Accordion.Body>
    </Accordion.Item>
</Accordion>
    
    </>
}