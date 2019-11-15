import React from 'react'
import './NaveMenu.css'
function NavElement(props) {
    return (
   
    
<li className="list-service"><a href={props.array.link}>{props.array.name}</a>


{props.array.drop && (<ul className="list-menu"> 
        {
props.array.drop.map(el=> <li className="drop-down">{el}</li>)
        }
    
</ul>)}            

</li>
    

    )
}

export default NavElement
