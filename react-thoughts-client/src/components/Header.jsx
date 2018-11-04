import React from 'react';
 
function Header(props) {
 const { links } = props;
 return (
   <header className="main-header">
    {!props.isLoggedIn ?<button onClick={props.showRegisterForm}> Register</button>: ""}
    {!props.isLoggedIn ?<button onClick={props.showLoginForm}> Login </button>: ""}
    {props.isLoggedIn ?<button onClick={props.logout}> Logout </button>: ""}
    <h1 className="main-title">Welcome to Thoughts</h1>
{props.isLoggedIn ?
    <nav>
        <ul>
       {links.map(link => {
         return <li
           key={link}
           className="link"
           onClick={() => props.onClick(link)}
         >{link}</li>
       })}
       </ul>
    </nav>
    : ""}
   </header>
 );
}
 
export default Header;