import React from 'react';
 
function Header(props) {
 const { links } = props;
 return (
   <div className="header">
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
   </div>
 );
}
 
export default Header;

// return (
//     <div className="header">
//         {<nav>
//             <ul>
//             links.map(link => {
//           return <li
//             key={link}
//             className="link"
//             onClick={() => props.onClick(link)}
//           >{link}
//           </li>
//         })}
//              </ul>
//          </nav>
//     </div>
//   );