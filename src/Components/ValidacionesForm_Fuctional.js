import React,{useState} from 'react';

import {Form, Input,Row,Col,FormGroup,Label,Button,FormFeedback} from 'reactstrap';

const ValidacionesForm_Fuctional = () => {

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
    

    
   /* const handleChangue = (e) => {
    setState((prevProps) => ({
        ...prevProps,
        [e.target.name]: e.target.value,
    }))}; */
    
    
    

    const EnviarFormulario = (e) => {
        e.preventDefault();
        let valido = true;
        if(nombre === ''){
            setInvalidNombre(true)
            setMensajeNombre('El Campo nombre es Obligatorio, Indica Tu  Nombre')
            
        }else{
            setInvalidNombre(false)
            setMensajeNombre('')
        }
        
        if(correo === ''){
            setInvalidCorreo(true)
            setMensajeCorreo('Debe Indicar un Correo Valido')
          
            valido = false; 

        }else{
            setInvalidCorreo(false)
            setMensajeCorreo('')
        }
        if(asunto === ''){

            setInvalidAsunto(true)
            setMensajeAsunto('Debe Ingresar Un Asunto')
              
            valido = false;  

        }else{
            setInvalidAsunto(false)
            setMensajeAsunto('')
        }  
        if(valido){
            // Enviar Datos a la base de datos o otro componente
            console.log("Simulacion de enviar a base de datos")
        }
        setIsSend(true)
        
    } ; 

    


  return (<div>
      <Row>
            <Col xs="3"></Col>
            <Col xs="6">
              <h2>Formulario</h2>
              <Form onSubmit={EnviarFormulario}>
                  <FormGroup>
                      <Label>Nombre</Label>
                      <Input type="text" name="nombre" placeholder="Ingresa Su Nombre" value={nombre}   onChange={ (e) => setNombre(e.target.value) } valid={ isSend && !invalidNombre} invalid={ isSend && invalidNombre} ></Input>
                      <FormFeedback>{mensajeNombre}</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                      <Label>Correo</Label>
                      <Input type="email" name="correo" placeholder="Ingrese Su Correo" value={correo}  onChange={(e) => setCorreo(e.target.value) } valid={ isSend && !invalidCorreo } invalid={isSend && invalidCorreo}></Input>
                      <FormFeedback>{mensajeCorreo}</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                      <Label>Asunto</Label>
                      <Input type="textarea" name="Asunto"placeholder="Asunto"  value={asunto}   onChange={(e) => setAsunto(e.target.value) } valid={ isSend && !invalidAsunto} invalid={isSend && invalidAsunto}></Input>
                      <FormFeedback>{mensajeAsunto}</FormFeedback>
                    
                  </FormGroup>
                  <FormGroup>
                     <Button color="success">Enviar</Button>
                    
                  </FormGroup>
              </Form>
          </Col>
        </Row>
    
    </div>)
};

export default ValidacionesForm_Fuctional; 

