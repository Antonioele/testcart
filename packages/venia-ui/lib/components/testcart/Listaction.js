import React , {Fragment,useState,useCallback} from 'react';
import Decraction1 from './Decraction';
import defaultClasses from './Listaction.css';

const Listaction =props=>{
 const [value,setValue]=useState('pluto');
    
  
   const handleChange = useCallback(e =>
    {
    setValue(e);
  console.log(`valore ${e}`);
  }
      ,[]);
  
    const ls=['Createcart','additemtoCart','getCartdetails',
        'togglecart','removecart','getcartid','clearcartid','writeimagetocache'];
        const listItems = ls.map((number,index) =>
        <li key={index}  >
          <button onClick={() => handleChange(number)}   
          className={defaultClasses.target}>{number.toUpperCase()}</button>
          </li>
      );
        return(

<>
<div className= {defaultClasses.root}>
<ul>
{listItems}
</ul>
<div className= {defaultClasses.pluto}> 

<Decraction1 value={value} />
</div>
</div>

</>



    );
};
export default Listaction;