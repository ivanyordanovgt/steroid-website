
export const ProductDetails = (product, addToCart) => {

    return(
        <div className="popup">
              <div className="popup-content">
                <img src={product.image} alt="product-image" />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <button id='close-popup' onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
        </div>
    )
}