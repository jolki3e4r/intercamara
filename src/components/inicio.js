import React, { Component } from 'react';

class inicio extends Component {

    

    render() { 
        return (  
            <h1>Esta es la pagina de inicio </h1>
            <form className="form-inline">
                <div class="form-group mb-2">
                    <label for="staticEmail2" className="sr-only">Ip de la camara</label>
                    <input type="text"
                        readonly claclassNamess="form-control-plaintext"
                        id="ipCamera" 
                        value="email@example.com"> </input>
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <label for="inputPassword2" className="sr-only">Password</label>
                    <input type="password"
                          className="form-control"
                          id="inputPassword2"
                          placeholder="Password"></input>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Confirmar </button>
            </form>
        );
    }
}
 
export default inicio;