import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import Animacion_Contacto from './Animacion_Contacto';
import Componente_1 from './Componente_1';
import Componente_2 from './Componente_2';
import Componente_3 from './Componente_3';
import Componente_Presentacion from './Componente_Presentacion';
import Mi_Educacion from './Mi_Educacion';
import Contacto from './Contacto';





const Rutas = () => {
  return (
  <div>
     <Routes>
        <Route path="/home"element={<Componente_Presentacion/>}></Route>
        <Route path="/about" element={<Componente_1 />}></Route>
        <Route path="/Skills" element={<Componente_2 />}></Route>
        <Route path="/Proyectos" element={<Componente_3 />}></Route>
        <Route path="/AnimacionContacto" element={<Animacion_Contacto/>}></Route>
        <Route path="/Formulario" element={<Contacto/>}></Route>
        <Route path="/Educacion" element={<Mi_Educacion/>}></Route>
    </Routes>
  </div>);
};

export default Rutas;
