import React from 'react'
import './SaveForLater.css'
import { useGlobalAppContext } from '../context/AppContext'
import Product from './Product';
import SaveForLaterCard from './SaveForLaterCard';

const SaveForLater = () => {
  const {ContextState} = useGlobalAppContext();
  const {saveForLaterItem} = ContextState;
  console.log(ContextState)
  
  return (
        <div className='saveForlater-container'>
        <h1 > Save for later </h1>
        <hr></hr>
        <div className='saveForLater-products-container'> 
        {saveForLaterItem && saveForLaterItem.map((item, index) => {
            return <SaveForLaterCard
                            key = {index}
                            item = {item}
                        />
        })}
        </div>
    </div>
  )
}

export default SaveForLater
