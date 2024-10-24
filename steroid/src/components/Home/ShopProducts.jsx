import React from 'react'
import ProductsList from './ProductsList'

export const ShopProducts = ({addToCart}) => {
    const pCreate = (id, perIU, price, title, text, count) => {return {id, price, title, text, perIU, count}};

    const products = [
        pCreate(1, '0.71', '115.00', 'Generostim Standard | J', 'AVG 103.56 IU | 97%+ PURITY | 0 DIMER', 1),
        pCreate(2, '0.78', '20.00', 'Generostim Supreme | G', 'AVG 280.2 IU | 97.5%+ PURITY | 0 DIMER', 1),
        pCreate(3, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets', 1),
        pCreate(4, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets', 1),
        pCreate(5, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets', 1),
        pCreate(6, '0.71', '115.00', 'Generostim Standard | J', 'AVG 103.56 IU | 97%+ PURITY | 0 DIMER', 1),
        pCreate(7, '0.78', '20.00', 'Generostim Supreme | G', 'AVG 280.2 IU | 97.5%+ PURITY | 0 DIMER', 1),
        pCreate(8, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets', 1),
        pCreate(9, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets', 1),
        pCreate(10, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets', 1),
        pCreate(11, '0.71', '115.00', 'Generostim Standard | J', 'AVG 103.56 IU | 97%+ PURITY | 0 DIMER', 1),
        pCreate(12, '0.78', '20.00', 'Generostim Supreme | G', 'AVG 280.2 IU | 97.5%+ PURITY | 0 DIMER', 1),
        pCreate(13, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets', 1),
        pCreate(14, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets', 1),
        pCreate(15, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets', 1),
        pCreate(16, '0.71', '115.00', 'Generostim Standard | J', 'AVG 103.56 IU | 97%+ PURITY | 0 DIMER', 1),
        pCreate(17, '0.78', '20.00', 'Generostim Supreme | G', 'AVG 280.2 IU | 97.5%+ PURITY | 0 DIMER', 1),
        pCreate(18, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets', 1),
        pCreate(19, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets', 1),
        pCreate(20, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets', 1)
    ]
  return (
    <>
    <ProductsList products={products} titleLabel={'Products'} addToCart={addToCart}/>
    </>
  )
}
