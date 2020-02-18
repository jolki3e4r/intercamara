import React, { Component } from 'react';
import info from '../components/respuesta.json'

class inicio extends Component {
    constructor () {

        super()
        this.state={
            nombreEmpresa:'',
            password:''
           
            }
          }
    

    
    onSubmit = (event) =>{
        event.preventDefault()
        
        let ipCamera= event.target.elements[0].value
        let password = event.target.elements[1].value
        console.log('datos capturados', ipCamera , password)
        
        let url= `http://${ipCamera}:8090/getDeviceKey`

        console.log('respuesta',info)
        this.setState({
            password: password,
            nombreEmpresa: info.CompanyName

        
        })
        
        // fetch(url, {
        // method: 'POST', 
        // headers:{
        //     'Content-Type': 'application/json'
        // }
        // }).then(res => res.json())
        // .catch(error => console.error('Error:', error))
        // .then(response => console.log('Success:', response));

    }

    onChangeName = (event)  =>{
        console.log('evento',event)
        const nombreempresa = event.target.value
        console.log('compañia', nombreempresa)
        this.setState({
            // "password":password
        })
    }
   

    render() { 
        return (  
            <>
            <h1>Bienvenido Admin </h1>
            <form className="form-inline" onSubmit={ this.onSubmit} >
                <div class="form-group mb-2">
                    <label htmlFor="staticEmail2" className="sr-only">Ip de la camara</label>
                    <input type="text"
                        readonly className="form-control-plaintext"
                        id="ipCamera" 
                        placeholder="ip de camara"/>
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <label htmlFor="inputPassword2" className="sr-only">Password</label>
                    <input type="password"
                          className="form-control"
                          id="inputPassword2"
                          placeholder="Password"/>
                </div>
                <button type="submit"
                        className="btn btn-primary mb-2">Confirmar </button>
            </form>
        <h2>en monbre de la compañia es: {info.CompanyName}</h2>
        <form>
            <input type="text"
            onChange={this.onChangeName}
            value={this.state.nombreEmpresa}/>
        </form>

            </>
        );
    }
}
 
export default inicio;