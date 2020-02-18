import React, { Component } from 'react';

class inicio extends Component {

    onSubmit = (event) =>{
        event.preventDefault()
        
        let ipCamenra= event.target.elements[0].value
        let password = event.target.elements[1].value
        console.log('daos capturados', ipCamenra , password)
        
        let url= `http://${ipCamera}:8090/getDeviceKey`

        fetch(url, {
        method: 'POST', 
        headers:{
            'Content-Type': 'application/json'
        }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));

    }




    render() { 
        return (  
            <>
            <h1>Esta es la pagina de inicio </h1>
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
            </>
        );
    }
}
 
export default inicio;