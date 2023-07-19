import React from 'react'

const SaveForLaterCard = () => {
  return (
    <div className="checkout-product-container">
        <img src={item.image} alt="item" />
        <div className="checkout-product-info">
            <div className="checkout-product-info-left">
                <p className="checkout-product-title">
                   {item.title}
                </p>
                <strong>${new Intl.NumberFormat('en-IN').format(`${item.price}`)}</strong>
                <span className='amazon-color-success amazon-size-small'>In stock</span>
                <span className='amazon-size-small amazon-color-secondary delivery-message'>Eligible for FREE Shipping</span>
                <img src={AmazonFulfilled} alt="AmazonFulfilled" className='amazon-fulfilled' />
                <button>Move to cart</button>
                <div className='checkout-product-quantity-container'>
                    <span className='amazon-size-small '>
                        {/* <a className='left-right-border amazon-color-link' onClick={() => deleteFromList(item.id)}>Delete</a> */}
                        <a className='left-right-border amazon-color-link' >Delete</a>
                        <a className='left-right-border amazon-color-link' > Add to list </a>
                        <a className='left-right-border amazon-color-link' > See more like this </a>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SaveForLaterCard
