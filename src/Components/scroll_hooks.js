import React,{useState,useEffect }from 'react';


export default function ScrollHooks (){
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        /* console.log('Moviendo Scroll') */

        const detectarScroll = () => {
            setScrollY(window.pageYOffset);
        };

        window.addEventListener("scroll", detectarScroll);
        return() => 
        window.removeEventListener("scroll", detectarScroll);
        
    }, [scrollY]);

    useEffect(() => {
       /*  console.log("Fase de Actualizacion"); */
    },[]);  // Este useEffect se va a ejectuar una sola vez, Podria ser para hacer una sola peticion a una Api


    useEffect(() => {
        return () =>{
          /*   console.log("Fase de Desmontaje"); */
        };
        
    });



    return(
        <>
        <h2>
            Hooks - useEffects y el ciclo de Vida
            <p>Scroll Y del Navegador{scrollY}px</p>
        </h2>
        </>
    );
}

