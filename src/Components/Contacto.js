
import React,{useRef,useState} from 'react';
import Imagen_logo from '../Components/Imagenes/logong_png.png';
import { Link } from "react-router-dom";
import {Form, Input,Row,Col,FormGroup,Label,Button,FormFeedback} from 'reactstrap';
import Swal from 'sweetalert2';








export default function Contacto(){
    let refMenu = useRef();
    
   

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [asunto, setAsunto] = useState('');
    const [mensajeNombre, setMensajeNombre] = useState('');
    const [mensajeCorreo, setMensajeCorreo] = useState('');
    const [mensajeAsunto, setMensajeAsunto] = useState('');
    const [invalidNombre, setInvalidNombre] = useState(false);
    const [invalidCorreo, setInvalidCorreo] = useState(false);
    const [invalidAsunto, setInvalidAsunto] = useState(false);
    const [isSend, setIsSend] = useState(false);

    const EnviarFormulario = (e) => {
      
        e.preventDefault();
        let valido = true;
        

        if(nombre === ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes Completar Todos los Campos!',
               
            })
            setInvalidNombre(true)
            setMensajeNombre('El Campo nombre es Obligatorio, Indica Tu  Nombre')
            
        }else{
            setInvalidNombre(false)
            setMensajeNombre('')
        }
        
        if(correo === ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes Completar Todos los Campos!',
               
            })
            setInvalidCorreo(true)
            setMensajeCorreo('Debe Indicar un Correo Valido')
          
            valido = false; 

        }else{
            setInvalidCorreo(false)
            setMensajeCorreo('')
        }
        if(asunto === ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes Completar Todos los Campos!',
               
            })
            setInvalidAsunto(true)
            setMensajeAsunto('Debe Ingresar Un Asunto')
              
            valido = false;  

        }else{
            setInvalidAsunto(false)
            setMensajeAsunto('')
        }  
        if(valido){
            
           Swal.fire({
            icon: 'success',
            title: "Su Mensaje Fue Enviado Correctamente",
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Bien Hecho!'
           
            })
            
            
            
            // Enviar Datos a la base de datos o otro componente
            console.log("Simulacion de enviar a base de datos")
            
           /*  if(refMenuBtn.current.textContent === "Enviado"){
                refMenu.current.style.display = "block"
    
            }else
            {
                refMenu.current.style.display = "none"
                refAnimacion.current.style.display = "block"
    
                setTimeout(() => {
                    refMenu.current.reset()
                    refAnimacion.current.style.display = "none"
                    refMenu.current.style.display = "block"
                },3000)
            }  */
        }
        
        setIsSend(true)
        
        
        
        
    } 

    
    
    
    /* const ToggleMenu = (e) => {
        if(refMenuBtn.current.textContent === "Enviado"){
            refMenu.current.style.display = "block";

        }else
        {
            refMenu.current.style.display = "none";
            refAnimacion.current.style.display = "block";

            setTimeout(() => {
                refMenu.current.reset();
                refAnimacion.current.style.display = "none";
                refMenu.current.style.display = "block";
            },3000);
        } 
       
        
    } */

return <>

    <div class="container-fluid Contacto animate__animated animate__fadeIn" id="Componente_Footer">
        <div className="container">

            <div className="col-md-2">
                <Link to="/AnimacionContacto"><button type="button" className="col-md-12 m-1 border-0 btn Boton_Contacto_2 rounded p-3 "> Volver</button></Link>
            </div>


           

           
            <Row>
                <Col xs="1"></Col>
                    <Col xs="10">
                    <h2 className="Tit-Form text-dark">Formulario</h2>
                    <Form class="col-md-12 text-white" ref={refMenu} onSubmit={EnviarFormulario}>
                        <FormGroup>
                            <Label className="label-Form text-dark" ><b>Nombre</b></Label>
                            <Input className="text-center" type="text" name="nombre" placeholder="Ingresa Su Nombre" value={nombre} onChange={ (e) => setNombre(e.target.value) }  valid={isSend && !invalidNombre} invalid={isSend && invalidNombre} ></Input>
                            <FormFeedback>{mensajeNombre}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label className="label-Form text-dark" ><b>Correo</b></Label>
                            <Input  className="text-center" type="email" name="correo" placeholder="Ingrese Su Correo" value={correo} onChange={ (e) => setCorreo(e.target.value) }  valid={isSend && !invalidCorreo} invalid={invalidCorreo}></Input>
                            <FormFeedback>{mensajeCorreo}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label className="label-Form text-dark" ><b>Asunto</b></Label>
                            <Input  className="p-3 text-center" type="textarea" name="Asunto"placeholder="Asunto"  value={asunto} onChange={ (e) => setAsunto(e.target.value) }   valid={isSend && !invalidAsunto} invalid={invalidAsunto}></Input>
                            <FormFeedback>{mensajeAsunto}</FormFeedback>
                            
                        </FormGroup>
                        <FormGroup>
                            <Button className="Boton_Contacto_2 border-0 col-md-4">Enviar</Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>

            
        </div>
    </div>

    

    
    

    </>

}
    



