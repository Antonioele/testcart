import React , {Fragment,useEffect,useState,useCallback,useReducer} from 'react';
import defaultClasses from './Createcart.css';
import BrowserPersistence from '../../../../../peregrine/lib/util/simplePersistence';
import { Magento2 }       from '../../../../../peregrine/lib/RestApi';
import { async } from 'q';
const {request} =Magento2;

const Storage = new BrowserPersistence();

const Createcart = () => 
{ 
    const [cartid_guest,set_cartid_guest]=useState();
    const [cartid_customer,set_cartid_customer]=useState();
   const  [cartid_display,setcartiddisplay]=useState(defaultClasses.carid);
    const [txtbuttonid,settxtbuttonid]=useState('fai vedere  cart id');
    const cartid = Storage.getItem('cartId'); ;
const handle = () =>{
    if (cartid_display==defaultClasses.carid) {
setcartiddisplay(defaultClasses.carid1);
settxtbuttonid('nascondi il cart id');
}
else
{
    setcartiddisplay(defaultClasses.carid);
settxtbuttonid('fai vedere carrello id');

}
    
} 

const handlerequest_guest= () => {
 request('/rest/V1/guest-carts',{
    method: 'POST'
}).then(res => set_cartid_guest(res));

async function displayGuestCartItems() {
    const cartResponse = await request('/rest/V1/guest-carts',
        {
            method: 'POST'
        }
    );
    const cart = await cartResponse;
    console.log(`carta item ${cart}`);
}
displayGuestCartItems(cartid_guest);



}

const handlerequest_customer =() => {
    request('rest/V1/carts/mine',{method:'POST'}).then(res=>set_cartid_customer(res));




}



return(
    
<>
<h2 className={defaultClasses.title}>  createcart id</h2>
<h3  className={defaultClasses.fg}>Gia' memorizzato nel browser</h3>

<button className={defaultClasses.bottone}onClick={handle}>{txtbuttonid}</button>
<h2 className={cartid_display} > cartid  :  {cartid}</h2>
<h2 className={defaultClasses.title}> CREA Carrello </h2>
<h2>una delle due  seguenti alla partenza.La seconda in fase di registrazione  </h2>

<button className={defaultClasses.bottone}onClick={handlerequest_guest}>crea  cart ospite</button>

<h2 > cartid_guest  :  {cartid_guest}</h2>
<button className={defaultClasses.bottone}onClick={handlerequest_customer}>crea di un cart customer</button>
<h2 > cartid_customer  :  {cartid_customer}</h2>
    </>
    );

}

export default Createcart;