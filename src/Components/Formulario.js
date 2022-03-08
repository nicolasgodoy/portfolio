import React, {Component} from 'react';
import {Form, Input,Row,Col,FormGroup,Label,Button,FormFeedback} from 'reactstrap';

class Formulario extends Component{
    constructor(props){
        super(props);
        this.state = {
            nombre: '',
            correo: '',
            Asunto: '',
            mensajeNombre: '',
            mensajeCorreo: '',
            mensajeAsunto: '',
            invalidNombre: false, 
            invalidCorreo: false,
            invalidAsunto: false,
            isSend: false,

        }
        this.onChange = this.onChange.bind(this); // ligar metodo onchange a la clase para modificarlo
        this.EnviarFormulario = this.EnviarFormulario.bind(this);
    }
    //onChangue va a detectar los cambios de estado en los inputs
    onChange(e){
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value,
           
        })};

    EnviarFormulario(e){
        e.preventDefault();
        let valido = true;
        if(this.state.nombre === ''){
            this.setState({
                invalidNombre: true,
                mensajeNombre: 'El Campo nombre es Obligatorio, Indica Tu  Nombre',
            })
             
             
        }else{
            this.setState({
                invalidNombre: false,
                mensajeNombre: '',
            });   
        }
        
        if(this.state.correo === ''){
            this.setState({
                invalidCorreo: true,
                mensajeCorreo: 'Debe Indicar un Correo Valido',
            });    
            valido = false;  
        }else{
            this.setState({
                invalidCorreo: false,
                mensajeCorreo: '',
            });    
        }
        if(this.state.Asunto === ''){
            this.setState({
                invalidAsunto: true,
                mensajeAsunto: 'Debe Ingresar Un Asunto',
            });    
            valido = false;  
        }else{
            this.setState({
                invalidAsunto: false,
                mensajeAsunto: '',
            });  
        }  
        if(valido){
            // Enviar Datos a la base de datos o otro componente
            console.log("Simulacion de enviar a base de datos" + this.state)
        }

        this.setState({
            isSend: true,
            
        });    

    }

    render(){
        return (

            <div id="Animacion_Cont">
            <Row>
                <Col xs="3"></Col>
                <Col xs="6">
                <h2>Formulario</h2>
                <Form onSubmit={this.EnviarFormulario}>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input type="text" name="nombre" placeholder="Ingresa Su Nombre" value={this.state.nombre} onChange={this.onChange} valid={this.state.isSend && !this.state.invalidNombre} invalid={this.state.isSend && this.state.invalidNombre} ></Input>
                        <FormFeedback>{this.state.mensajeNombre}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label>Correo</Label>
                        <Input type="email" name="correo" placeholder="Ingrese Su Correo" value={this.state.correo} onChange={this.onChange} valid={this.state.isSend && !this.state.invalidCorreo} invalid={this.state.invalidCorreo}></Input>
                        <FormFeedback>{this.state.mensajeCorreo}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label>Asunto</Label>
                        <Input type="textarea" name="Asunto"placeholder="Asunto"  value={this.state.Asunto} onChange={this.onChange}  valid={this.state.isSend && !this.state.invalidAsunto} invalid={this.state.invalidAsunto}></Input>
                        <FormFeedback>{this.state.mensajeAsunto}</FormFeedback>
                        
                    </FormGroup>
                    <FormGroup>
                        <Button color="success">Enviar</Button>
                        
                    </FormGroup>
                </Form>
            </Col>
            </Row>
        </div>
    )}
}
export default Formulario;
    
 
  



