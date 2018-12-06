import React, {Component} from 'react'
import {Link } from 'react-router-dom'
import './Inicio.css'

class Inicio extends Component{
    render(){
        return(
            <div className="inicio">
                <Link to='/registro'>Registro</Link>
                <Link to='/empleados'>Empleados</Link>

                <h1>Creado por Alexis Olveres</h1>
            </div>
        )
    }
}

export default Inicio