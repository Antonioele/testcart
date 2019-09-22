import React , {Fragment,useState} from 'react';

import defaultClasses from './Listaction.css';

const Listaction =props=>{
 const [evento,setEvento]=useState("CreateCart");
    console.log (`default class ${defaultClasses}`);
    const Vistaevento=() =>{alert};
    const ls=["Createcart","additemtoCart","getCartdetails",
        "togglecart","removecart","getcartid","clearcartid","writeimagetocache"];
        const listItems = ls.map((number,index) =>
        <li key={index}  >
          <button onClick={Vistaevento}   className={defaultClasses.target}>{number.toUpperCase()}</button>
          </li>
      );
        return(

<>
<div className= {defaultClasses.root}>
<ul>
{listItems}
</ul>
<div> <h1>plutooooooooooooooooooooooooo</h1></div>
</div>

</>



    );
};
export default Listaction;