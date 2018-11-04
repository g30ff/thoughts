import React from 'react';

const LoginForm = (props) => {

return (
    <div>
<form>
    <label htmlFor="email">Email: </label>
    <br />
        <input
        name="email"
        id="email"
        type="email"
        value={props.email.value}
        onChange={props.handleChange}
        />
        <br /><br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
        name="password"
        id="password"
        type="password"
        value={props.password.value}
        onChange={props.handleChange}
        />
        <br />
        
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