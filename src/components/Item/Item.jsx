import React, {Component} from 'react'
import './item.css'

class Item extends Component{
    render(){
        return(
            <div className="item">
                <div className="item__nombre">
                    <p>{this.props.nombre}</p>
                </div>
                <div className="item__apellido">
                    <p>{this.props.apellido}</p>
                </div>
                <div className="item__correo">
                {this.props.correo}
                </div>
                <div className="item__button">
                    <button onClick={this.props.funcion}>Ver</button>
                </div>
            </div>
        )
    }
}

export default Item