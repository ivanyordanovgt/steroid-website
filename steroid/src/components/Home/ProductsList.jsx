import{ React, useState} from 'react'

const ProductsList = ({products, titleLabel, addToCart}) => {
  const testImageUrl = 'https://kits4less.com/wp-content/uploads/2024/05/standard-closed.png';
  const [selectedProduct, setSelectedProduct] = useState(null);  // Stores the selected item's details

  const handleViewProduct= (product) => {
    setSelectedProduct(product);  // Set the selected item to display in popup
  };

  const closePopup = () => {
    setSelectedProduct(null);  // Close the popup by clearing selected item
  };

  return (
    <div className="products">
        <h4>{titleLabel}</h4>
        <div className="product-grid">
      {products.map((product, index) => (
        <div key={index} className="product">
          <div className="perIU">
            <h1>${product.perIU} per IU</h1>
            </div>
          <img src={testImageUrl} alt={product.title} className="product-image" />
          
          
          <div className="product-details">
            <h2>${product.price.toFixed(2)}</h2>
            <h3 className="product-title">{product.title}</h3>
            <p className="product-text">{product.text}</p>
            <button onClick={() => handleViewProduct(product)}>View Product</button>
            <button onClick={() => addToCart(product)}>Add to card</button>
          </div>

          {selectedProduct && (
            <div className="popup">
              <div className="popup-content">
                <h2>{selectedProduct.name}</h2>
                <p>{selectedProduct.description}</p>
                <button id='close-popup' onClick={closePopup}>Close</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  )
}

export default ProductsList