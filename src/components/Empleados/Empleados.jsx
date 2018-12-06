import React, {Component} from 'react'
import './Empleados.css'

//Components
import Item from '../Item/Item'

class Empleados extends Component{
constructor(props){
    super(props);
    this.state = {
        mensaje: "Aun no hay empleados registrados",
        empleados:[],
        
        nombre:"",
        paterno:"",
        materno:"",

        correo:"",
        nacimiento:"",
        direccion:"",
    }
}

componentWillMount(){
    if(JSON.parse(localStorage.getItem("Employees")) == null){
        this.setState({
            empleados: [{nombre: "Name", paterno: "Lastname", correo: "me@example", id: "AAAAAA"}]
        })
    }else{
        this.setState({
            empleados: JSON.parse(localStorage.getItem("Employees"))
        })
    }
}
detalleEmpleado = (id) =>{
    this.state.empleados.map(empleado => {
        if(empleado.id === id){
            this.setState({
                nombre: empleado.nombre,
                paterno: empleado.paterno,
                materno: empleado.materno,

                correo: empleado.correo,
                nacimiento: empleado.nacimiento,
                direccion: empleado.direccion
            })
        }
    })
}
    render(){
        var empleados = this.state.empleados;
        return(
            <div>
                {
                    empleados.map(empleado =>{
                        return <Item nombre={empleado.nombre} apellido={empleado.paterno} correo={empleado.correo} funcion={()=>this.detalleEmpleado(empleado.id)}/>
                    })
                }
                <div className="detalle">
                    <div>
                        <h3>{this.state.nombre}</h3>
                        <h5>{this.state.paterno}</h5>
                        <h5>{this.state.materno}</h5>
                    </div>
                    <div>
                        <h3>{this.state.correo}</h3>
                        <h5>{this.state.nacimiento}</h5>
                        <h5>{this.state.direccion}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Empleados