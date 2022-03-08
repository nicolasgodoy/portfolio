import React,{useState,useEffect} from 'react';

    // Ambos componentes pueden recibir props
    // Diferencias de usar hooks a componentes de class
    //console.log(useState());  useState devuelve 2 array posicion 0 valor undefined y en la posicion 1 una funcion que actualiza valor
    // me ahorro de usar un constructor 
    // declarar el this.state
    // el bindeo 
    // Con los hooks ya no utilizamos el metodo render 

function Reloj({hora}) {
    return <h3>{hora}</h3>;
}

export default function RelojHooks(){
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let Temporizador;

        if( visible ) {
         Temporizador =setInterval(() => {
            setHora(new Date().toLocaleTimeString());
         },1000)
        }else{
            clearInterval(Temporizador);
        }


        return () => {
            console.log("Fase de Desmontaje");
        }
        

    },[visible]);

    return(
        <>
        <h2>Reloj - Hook </h2>

        {visible && <Reloj hora={hora}></Reloj>}
            <button onClick={()=> setVisible(true)}>Iniciar</button>
            <button onClick={()=> setVisible(false)}>Detener</button>

        </>
        
    );
}