import React from 'react';
import './Checkoutproduct.css';
import {useStateValue} from './StateProvider';
function CheckoutProduct({id, title, image, price, rating}) {
    const [{basket},dispatch] = useStateValue();

    const removefrombasket = () =>{
        //remove item from basket....
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        });

    };

    return (
        <div className='checkoutProduct'>
            <img  className='checkoutProduct_image' src={image}
        alt=''/>            
            
       <div className ='checkoutProduct_info'>
    <p className = 'checkoutProduct_title'>{title}</p>

    <p className='product_price'>
            <small>💲</small>
    <strong>{price}</strong>
    </p>

    <div className ='product_rating'>

      {Array(rating)
          .fill()
          .map((_, i)=>(
              <p>⭐</p>
          ))
      }  
    </div>
    <button onClick={removefrombasket}> Remove from basket</button>
    </div>     
        </div>
    );
};

export  default  CheckoutProduct;


