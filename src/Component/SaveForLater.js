import React from 'react'
import './SaveForLater.css'
import { useGlobalAppContext } from '../context/AppContext'
import Product from './Product';
import { ListItemSecondaryAction } from '@mui/material';

const SaveForLater = () => {
  const {ContextState, ContextDispatch} = useGlobalAppContext();
  const {products, saveForLaterItem} = ContextState;
  console.log(ContextState)

  const addSaveForLaterItem = (item) => {
    ContextDispatch({
      type: 'ADD_SAVEFORLATER_ITEM',
      payload: item,
    })
  }
  
  return (
        <div className='save-for-later-container'>
        <h1 > Save for later </h1>
        <hr></hr>
        <div className='product-container'> 
        {saveForLaterItem && saveForLaterItem.map((item) => {
            const {id, image, price, rating, title} = item;
            return <div className='saveforlater-product'>
                        <Product
                            key = {id}
                            id = {id}
                            url = {image}
                            title = {title}
                            rating = {4}
                            price = {price}
                        />
                    </div>
        })}
        </div>
    </div>
    // <div className='save-for-later-container'>
    //     <h1 > Save for later </h1>
    //     <hr></hr>
    //     <div className='product-container'> 
    //     {products.filter((item) => {
    //         if(item.saveForLater === true) {
    //           console.log(item)
    //           SaveForLaterItems.push(item);
    //         }
    //     })}
    //     {console.log(SaveForLaterItems)}
    //     {SaveForLaterItems && SaveForLaterItems.map((item) => {
    //         const {id, image, price, rating, title} = item;
    //         return <div className='saveforlater-product'>
    //                     <Product
    //                         key = {id}
    //                         id = {id}
    //                         url = {image}
    //                         title = {title}
    //                         rating = {rating.rate}
    //                         price = {price}
    //                     />
    //                 </div>
    //     })}
    //     </div>
    // </div>
  )
}

export default SaveForLater
