import React, { Component } from 'react';
import index from '../index.css';
import users from '../components/users.json'

class login extends Component {

  state={
    error:null,
    login:{
      username:'',
      password:''
    }
  }
 
 

onSubmit =()=>{
    const { username , password} = this.setState.login;
    const res = users.find(data =>{
        if (data.user=== username && data.password === password){
            return true  
        } else{
            return false
        }
    })
}


  handleOnChange = event => {
    const { value, name } = event.target
    this.setState(prevState => ({
      login: {
        ...prevState.login,
        [name]: value
      }
    }))
    this.setState({
      error: null
    })
  }




  render() { 
    return ( 
      
      <div className="accountbg">
      <div className="wrapper-page">
          <div className="panel panel-color panel-primary panel-pages">

              <div className="form-group col-md-6">
                  <h3 className="text-center m-t-0 m-b-30">
                      <span className=""></span>
                  </h3>
                  <h4 className="text-muted text-center m-t-0"><b>Sign In</b></h4>

                  <form className="form-horizontal m-t-8"
                    onSubmit={ this.onSubmit} >

                      <div className="form-group">
                          <div className="col-xs-12">
                              <input 
                                    className="form-control"
                                    type="text"
                                    required="" 
                                    id="username"
                                    onChange={this.handleOnChange}
                                    placeholder="Usuario"
                                    ></input>
                          </div>
                      </div>

                      <div className="form-group">
                          <div className="col-xs-12">
                              <input 
                                    className="form-control"
                                    type="password"
                                    required=""
                                    id="password"
                                    placeholder="Contraseña"
                                    onChange={this.handleOnChange}
                                    ></input>
                          </div>
                      </div>

                      <div className="form-group">
                          <div className="col-xs-12">
                              <div className="checkbox checkbox-primary">
                                  <input id="checkbox-signup"
                                   type="checkbox">
                                   </input>
                                  <label for="checkbox-signup">
                                      Remember me
                                  </label>
                              </div>
                          </div>
                      </div>

                      <div className="form-group text-center m-t-20">
                          <div className="col-xs-12">
                              <button class="btn btn-primary w-md waves-effect waves-light" type="submit">Log In</button>
                          </div>
                      </div>

                      <div className="form-group m-t-30 m-b-0">
                          <div className="col-sm-7">
                              <a href="pages-recoverpw.html" class="text-muted"><i class="fa fa-lock m-r-5"></i> Forgot your password?</a>
                          </div>
                          <div className="col-sm-5 text-right">
                              <a href="pages-register.html" class="text-muted">Create an account</a>
                          </div>
                      </div>
                  </form>
              </div>

          </div>
      </div>
      </div>
     );
  }
}
 
export default login;