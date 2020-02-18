import React, { Component } from 'react';

class inicio extends Component {

    onClick = (event) =>{
        event.preventDefault()
        
    }

    render() { 
        return (  
            <>
            <h1>Esta es la pagina de inicio </h1>
            <form className="form-inline">
                <div class="form-group mb-2">
                    <label htmlFor="staticEmail2" className="sr-only">Ip de la camara</label>
                    <input type="text"
                        readonly classNames="form-control-plaintext"
                        id="ipCamera" 
                        value="email@example.com" />
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <label htmlFor="inputPassword2" className="sr-only">Password</label>
                    <input type="password"
                          className="form-control"
                          id="inputPassword2"
                          placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary mb-2" onClick={onclick}>Confirmar </button>
            </form>
            </>
        );
    }
}
 
export default inicio;