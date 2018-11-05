import React from 'react';

const LoginForm = (props) => {
    return (
        <div className="form-container">
            <div className="login">
            { props.isRegister ? <h2>Register</h2> : null }
            { props.isLogin ? <h2>Login</h2> : null }
                
            </div>
            <form>
            <div className="row">
                <div className="col-25">
                    <label for="email" className="login">email</label>
                </div>
                <div className="col-75">
                    <input
                    name="email"
                    id="email"
                    type="email"
                    value={props.email.value}
                    onChange={props.handleChange}
                    />
                </div>
            </div> 
            <div className="row">
                <div className="col-25">
                    <label for="password" className="login">password</label>
                </div>
                <div className="col-75">
                    <input
                    name="password"
                    id="password"
                    type="password"
                    value={props.password.value}
                    onChange={props.handleChange}
                    />
                </div>
            </div>        
            </form>
{
props.isRegister ? 
<button onClick={props.register}>Register</button>
:""
}
{
props.isLogin ?
<button onClick={props.loginButton}> Login </button>
:""
}
</div>
);
}

export default LoginForm;