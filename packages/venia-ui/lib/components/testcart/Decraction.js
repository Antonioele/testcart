import React , {Fragment,useEffect,useState,useCallback,useReducer} from 'react';

 import Createcart from './azioni/Createcart';
 import Additemtocart from './azioni/Additemtocart';
import Defaultclass1 from './Decraction.css';


const Decraction = props => {
const evento =props.value;
var pippo="antonio";
console.log(`evento ${evento}`);
const seleziona_action_cart =() => {
switch (evento) {
    case 'Createcart':
    return <Createcart /> ;
    case 'additemtoCart':
      return <Additemtocart />;
    case 'decrement':
      return "ciao";
    default:
      return "iosono";
  }
}

  

  
 

return(
<>
<div>
  

   {seleziona_action_cart()} 
   </div>
</>
);
}
export default Decraction;