import React,{Component} from 'react';

class Reloj extends Component{
    constructor(props){
        super(props);
    }

    componentWillUnmount(){
        console.log(3,"El componente a sido eliminado del Dom");
    }


    render(){
        return(
            <h3>{this.props.hora}</h3>
        )
    }
}


export default class CicloDeVida extends Component{
    constructor(props){
        super(props);
        console.log(0, "El componente se inicializa pero no esta en el Dom !!")

        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible:false, //Renderizado condicional
        }

        this.Temporizador = null;

    }   

    componentDidMount(){
        console.log(1,"El Componente ya se encuentra en el DOM");
    }

    componentDidUptdate(prevProps,prevState){
        console.log(2,"El estado o las props del componente han cambiado");
        console.log(prevProps);
        console.log(prevState);
    }

   
        tictac = () => {
            this.Temporizador = setInterval(() => {
                this.setState({
                    hora:new Date().toLocaleTimeString()
                })
            }, 1000);
        } 

        Iniciar = () => {
            this.tictac();
            this.setState({
                visible:true
            })
        }


        Detener = () => {
            clearInterval(this.Temporizador);
            this.setState({
                visible:false,
            })
        }

    

    render (){
        console.log(4, "El componente se dibuja o redibuja por algun cambio en el dom");
        return(
            <>
            <h2>Ciclo de Vida Detener o Iniciar Reloj </h2>
            {this.state.visible && <Reloj hora={this.state.hora}></Reloj>}
            <button onClick={this.Iniciar}>Iniciar</button>
            <button onClick={this.Detener}>Detener</button>
            </>
        );
       
    }
}