import React from "react";
import NavElement from "./NavElement"
import './NaveMenu.css';

let arr=[
  {name:"Home", link:'/home'},
  {name:"Services" ,link:'/services' , drop:["For entrepreneurs","For students","For hobbyists"]},
  {name:"Contact" ,link:'/contact'}
]

export default function NavMenu() {
  return (
    <div className="header-menu">
      <ul className="menu">
      {arr.map(el=> <NavElement array={el} />)}        
       
      </ul>
    </div>
  );
}
