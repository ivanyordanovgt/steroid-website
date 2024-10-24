import React from 'react'

const ProductsList = ({products, titleLabel, addToCart}) => {
    const testImageUrl = 'https://kits4less.com/wp-content/uploads/2024/05/standard-closed.png';

  return (
    <div class="products">
        <h4>{titleLabel}</h4>
        <div className="product-grid">
      {products.map((product, index) => (
        <div key={index} className="product">
          <div className="perIU">
            <h1>${product.perIU} per IU</h1>
            </div>
          <img src={testImageUrl} alt={product.title} className="product-image" />
          
          
          <div className="product-details">
            <h2>${product.price}</h2>
            <h3 className="product-title">{product.title}</h3>
            <p className="product-text">{product.text}</p>
            <button onClick={() => addToCart(product)}>Add to card</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default ProductsList