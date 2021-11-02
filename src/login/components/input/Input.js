import React from 'react';
import './Input.css';
//import user from "./imagenes/usuario.jpg"
//import password from "./imagenes/contraseña.png"

const Input = ({atributo, handleChange, param})=>{
    
    return (
        <div className="container">
           <span className="icon icon-user">
           <input className="input-container"
           id={atributo.id}
           name={atributo.name}
           placeholder={atributo.placeholder}
           type={atributo.type}
           onChange={(e)=> handleChange(e.target.name, e.target.value)}
           className={param ? 'input-error': 'input'}
           /> </span>
           
        </div>
    )
};

export default Input;