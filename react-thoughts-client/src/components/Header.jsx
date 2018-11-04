import React from 'react';
 
function Header(props) {
 const { links } = props;
 return (

<header className="main-header">
<h1 className="main-title">Welcome to Thoughts</h1>
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
</header>
 );
}
 
export default Header;