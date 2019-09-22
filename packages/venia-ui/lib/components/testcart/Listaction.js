import React , {Fragment} from 'react';

import defaultClasses from './Listaction.css';

const Listaction =props=>{
    console.log (`default class ${defaultClasses}`);
    const ls=["Createcart","additemtoCart","getCartdetails",
        "togglecart","removecart","getcartid","clearcartid","writeimagetocache"];
        const listItems = ls.map((number,index) =>
        <li key={index} className={defaultClasses.root} >
          <button className={defaultClasses.target}>{number.toUpperCase()}</button>
          </li>
      );
        return(

<>
<ul>
{listItems}
</ul>



</>



    );
};
export default Listaction;