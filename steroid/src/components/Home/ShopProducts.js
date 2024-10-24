import React from 'react'
import ProductsList from './ProductsList'

export const ShopProducts = ({addToCart}) => {
    const pCreate = (id, perIU, price, title, text) => {return {id, price, title, text, perIU}};

    const products = [
        pCreate(1, '0.71', '115.00', 'Generostim Standard | J', 'AVG 103.56 IU | 97%+ PURITY | 0 DIMER'),
        pCreate(2, '0.78', '220.00', 'Generostim Supreme | G', 'AVG 280.2 IU | 97.5%+ PURITY | 0 DIMER'),
        pCreate(3, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets'),
        pCreate(4, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets'),
        pCreate(5, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets'),
        pCreate(6, '0.71', '115.00', 'Generostim Standard | J', 'AVG 103.56 IU | 97%+ PURITY | 0 DIMER'),
        pCreate(7, '0.78', '220.00', 'Generostim Supreme | G', 'AVG 280.2 IU | 97.5%+ PURITY | 0 DIMER'),
        pCreate(8, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets'),
        pCreate(9, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets'),
        pCreate(10, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets'),
        pCreate(11, '0.71', '115.00', 'Generostim Standard | J', 'AVG 103.56 IU | 97%+ PURITY | 0 DIMER'),
        pCreate(12, '0.78', '220.00', 'Generostim Supreme | G', 'AVG 280.2 IU | 97.5%+ PURITY | 0 DIMER'),
        pCreate(13, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets'),
        pCreate(14, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets'),
        pCreate(15, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets'),
        pCreate(16, '0.71', '115.00', 'Generostim Standard | J', 'AVG 103.56 IU | 97%+ PURITY | 0 DIMER'),
        pCreate(17, '0.78', '220.00', 'Generostim Supreme | G', 'AVG 280.2 IU | 97.5%+ PURITY | 0 DIMER'),
        pCreate(18, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets'),
        pCreate(19, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets'),
        pCreate(20, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets')
    ]
  return (
    <>
    <ProductsList products={products} titleLabel={'Products'} addToCart={addToCart}/>
    </>
  )
}
