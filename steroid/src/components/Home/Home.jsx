import React from 'react'
import './home.css'
import './homeBoxes.css'
import './product.css'
import ArrowMenu from '../arrowMenu/arrowMenu'
import ProductsList from './ProductsList'
const Home = () => {
    const imgUrls = {'lab': 'https://kits4less.com/wp-content/uploads/2023/11/testing-icon.svg',
        'shipping': 'https://kits4less.com/wp-content/uploads/2023/11/shipping-icon.svg',
        'discount': 'https://kits4less.com/wp-content/uploads/2023/11/discounts-icon.svg'
    }
    const infoText = [
        {title: "lab-tested", text: "Every batch of HGH is laboratory tested – that way you know exactly what you’re getting.", imgUrl: imgUrls['lab']}, 
        {title: "Fast Shipping", text: "All orders ship from the USA and most arrive within 1-4 business days.", imgUrl: imgUrls['shipping']},
        {title: "bulk discounts", text: "We provide discounts for orders of 3+ kits – the more you buy, the more you save.", imgUrl: imgUrls['discount']}
    ];

    const pCreate = (perIU, price, title, text) => {return {price, title, text, perIU}};
    const products = [
        pCreate('0.71', '115.00', 'Generostim Standard | J', 'AVG 103.56 IU | 97%+ PURITY | 0 DIMER'),
        pCreate('0.78', '220.00', 'Generostim Supreme | G', 'AVG 280.2 IU | 97.5%+ PURITY | 0 DIMER'),
        pCreate('0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets'),
        pCreate('0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets'),
        pCreate('0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets')
    ]

  return (
    <div class='home'>
    
    <div className='header'>
    
    <div class='content'>
        <img src='https://kits4less.com/wp-content/uploads/2024/08/image-1.png' alt='logo'></img>
        <div class='text'>
                
            <h1>
                #1 US Source <span>for</span>
                <br></br>
                Affordable HGH, PEPTIDES & MORE - <span>backed by HPLC Testing</span>
            </h1>

            <button>Shop now</button>
            <a href='#'>View lab results</a>
        </div>
    </div>

   
    </div>

    <div className="info-boxes">
      {infoText.map((item, index) => (
        <div key={index} className="info-box">
          <div class='box-title'>
            <img src={item.imgUrl} alt={item.title} className="info-box-img" />
            <h3>{item.title}</h3>
          </div>
          <div className="info-box-content">
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
    
    <ProductsList products={products} titleLabel={'Featured products'}/>

    <div class='about'>
      <div class='content'>
        <img src='https://kits4less.com/wp-content/uploads/2023/11/about_icon.svg'></img>
        <h1>About us</h1>
        <p><span>Kits4Less</span> is a <span>USA</span> 
        based company on a mission to change the game of generic HGH. 
        We aim to bridge the gap between 
        <span>affordability</span> and quality with our strict  
        <span> lab-testing & quality control</span> standards. Every batch of HGH is quality tested before it’s listed for sale, & we simultaneously maintain competitive pricing on our products.</p>
      
        </div>
      </div>
    
    <ArrowMenu>

    </ArrowMenu>
    
    </div>
  )
}

export default Home