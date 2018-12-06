import React, {Component} from 'react'
import './registro.css'

class Registro extends Component{
    constructor(props) {
        super(props);
        this.state = {
            nombre:'',
            paterno: '',
            materno:'',
            nacimiento:'',
            correo: '',
            direccion: '',
            errorNombre: false,
            errorPaterno: false,
            errorMaterno: false,
            errorCorreo: false};

        this.handleChangeNombre = this.handleChangeNombre.bind(this);
        this.handleChangePaterno = this.handleChangePaterno.bind(this);
        this.handleChangeMaterno = this.handleChangeMaterno.bind(this);
        this.handleChangeNacimiento = this.handleChangeNacimiento.bind(this);
        this.handleChangeCorreo = this.handleChangeCorreo.bind(this);
        this.handleChangeDireccion = this.handleChangeDireccion.bind(this);
      }
  handleChangeNombre(event) {
    this.setState({nombre: event.target.value});
  }
  handleChangePaterno(event) {
    this.setState({paterno: event.target.value});
  }
  handleChangeMaterno(event) {
    this.setState({materno: event.target.value});
  }
  handleChangeNacimiento(event) {
    this.setState({nacimiento: event.target.value});
  }
  handleChangeCorreo(event) {
    this.setState({correo: event.target.value});
  }
  handleChangeDireccion(event) {
    this.setState({direccion: event.target.value});
  }

  comprobaciones = () =>{
    this.comprobarNombre()
    this.comprobarPaterno()
    this.comprobarMaterno()
    this.comprobarCorreo()
    
    if(this.state.errorNombre === false && 
      this.state.errorPaterno === false && 
      this.state.errorMaterno === false &&
      this.state.errorCorreo === false){
        this.saveData()
      }
  }
  comprobarNombre = () =>{
    var valorNombre = this.state.nombre;
    var nombreChar = valorNombre.split('');

      nombreChar.map(letra => {
        if(letra === "0" 
        || letra === "1" 
        || letra === "2" 
        || letra === "3" 
        || letra === "4" 
        || letra === "5" 
        || letra === "6" 
        || letra === "7" 
        || letra === "8" 
        || letra === "9"){
          this.setState({errorNombre: true})
        } else {this.setState({errorNombre: false})}
      })
  }
  comprobarPaterno = () =>{
    var valorPaterno = this.state.paterno;
    var paternoChar = valorPaterno.split('');

      paternoChar.map(letra => {
        if(letra === "0" 
        || letra === "1" 
        || letra === "2" 
        || letra === "3" 
        || letra === "4" 
        || letra === "5" 
        || letra === "6" 
        || letra === "7" 
        || letra === "8" 
        || letra === "9"){
          this.setState({errorPaterno: true})
        } else{this.setState({errorPaterno: false})}
      })
  }
  comprobarMaterno = () =>{
    var valorMaterno = this.state.materno;
    var maternoChar = valorMaterno.split('');

      maternoChar.map(letra => {
        if(letra === "0" 
        || letra === "1" 
        || letra === "2" 
        || letra === "3" 
        || letra === "4" 
        || letra === "5" 
        || letra === "6" 
        || letra === "7" 
        || letra === "8" 
        || letra === "9"){
          this.setState({errorMaterno: true})
        } else {this.setState({errorMaterno: false})}
      })
  }
  comprobarCorreo = () =>{
    var valorCorreo = this.state.correo;
    var correoChar = valorCorreo.split('');
    var at;

      correoChar.map(letra => {
        if(letra === "@"){
          at = true
        } else{at = false}
      })
      if(at === true){
        this.setState({errorCorreo: true})
      } else {this.setState({errorCorreo: false}) }
  }

  saveData = () =>{
    var nombre, paterno, materno, nacimiento, correo, direccion, id, arrayEmployees;

    if(localStorage.Employees == undefined){

      localStorage.setItem("Employees", JSON.stringify([]));
      arrayEmployees = JSON.parse(localStorage.getItem("Employees"));

      nombre = this.state.nombre
      paterno = this.state.paterno
      materno = this.state.materno
      nacimiento = this.state.nacimiento
      correo = this.state.correo
      direccion = this.state.direccion
      id = Math.random().toString(36).substr(2, 16)

      var objeto = {nombre:nombre, 
        paterno: paterno, 
        materno: materno, 
        nacimiento: nacimiento, 
        correo: correo, 
        direccion: direccion,
        id: id}
  
      arrayEmployees.push(objeto)
      localStorage.setItem("Employees", JSON.stringify(arrayEmployees))
    } else {
      arrayEmployees = JSON.parse(localStorage.getItem("Employees"));

      nombre = this.state.nombre
      paterno = this.state.paterno
      materno = this.state.materno
      nacimiento = this.state.nacimiento
      correo = this.state.correo
      direccion = this.state.direccion
      id = Math.random().toString(36).substr(2, 16)

      var objeto = {nombre:nombre, 
        paterno: paterno, 
        materno: materno, 
        nacimiento: nacimiento, 
        correo: correo, 
        direccion: direccion,
        id: id}
  
        arrayEmployees.push(objeto)
        localStorage.setItem("Employees", JSON.stringify(arrayEmployees))
    }
  }
    render(){
      var mensajeNombre, mensajePaterno, mensajeMaterno, mensajeCorreo;
      if(this.state.errorNombre === true){
        mensajeNombre = <p>Revisa tu nombre</p>
      } else{ mensajeNombre = <p></p>}
      if(this.state.errorPaterno === true){
        mensajePaterno = <p>Revisa tu apellido paterno</p>
      } else{ mensajeMaterno = <p></p>}
      if(this.state.errorMaterno === true){
        mensajeMaterno = <p>Revisa tu apellido materno</p>
      } else{ mensajeMaterno = <p></p>}
      if(this.state.errorCorreo === true){
        mensajeCorreo = <p>Revisa tu correo</p>
      } else{ mensajeCorreo = <p></p>}

        return(
            <div className="registro">
                <fieldset>
                    <legend>Registro de Nuevo Empleado</legend>

                    <label>Nombre</label> <br/>
                    <input type="text" placeholder="E.g. Alexis" value={this.state.nombre} onChange={this.handleChangeNombre}/> <br/>

                    <label>Apellido Paterno</label> <br/>
                    <input type="text" placeholder="E.g. Olveres" value={this.state.paterno} onChange={this.handleChangePaterno} /> <br/>

                    <label>Apellido Materno</label> <br/>
                    <input type="text" placeholder="E.g. Medina" value={this.state.materno} onChange={this.handleChangeMaterno} /> <br/>

                    <label>Fecha de Nacimiento</label> <br/>
                    <input type="date" value={this.state.nacimiento} onChange={this.handleChangeNacimiento}/> <br/>

                    <label>Email</label> <br/>
                    <input type="email" placeholder="name@domain.com" value={this.state.correo} onChange={this.handleChangeCorreo}/> <br/>

                    <label>Direccion Postal</label> <br/>
                    <input type="textarea" placeholder="Privada 21 Lote 5 Manzana 1" value={this.state.direccion}onChange={this.handleChangeDireccion}/> <br/>
                </fieldset>
                
               <div className="error">
                {mensajeNombre}
                {mensajePaterno}
                {mensajeMaterno}
                {mensajeCorreo}
               </div>
                
                <button onClick={this.comprobaciones}>Enviar</button>
            </div>
        )
    }
}

export default Registro