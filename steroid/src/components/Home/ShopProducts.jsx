import React from 'react'
import ProductsList from './ProductsList'

export const ShopProducts = ({addToCart}) => {
    const pCreate = (id, perIU, price, title, text, count, allowedCoupon, isFilterApplied) => {return {id, price: Number(price), title, text, perIU, count, allowedCoupon, isFilterApplied}};

    const products = [
        pCreate(1, '0.71', '115.00', 'Generostim Standard | J', 'AVG 103.56 IU | 97%+ PURITY | 0 DIMER', 1, {text: '999', percentage: 20}, false),
        pCreate(2, '0.78', '20.00', 'Generostim Supreme | G', 'AVG 280.2 IU | 97.5%+ PURITY | 0 DIMER', 1, {text: '999', percentage: 20}, false),
        pCreate(3, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets', 1, {text: '777', percentage: 5}, false),
        pCreate(4, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets', 1, {text: '777', percentage: 5}, false),
        pCreate(5, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets', 1, {text: '777', percentage: 5}, false),
        pCreate(6, '0.71', '115.00', 'Generostim Standard | J', 'AVG 103.56 IU | 97%+ PURITY | 0 DIMER', 1),
        pCreate(7, '0.78', '20.00', 'Generostim Supreme | G', 'AVG 280.2 IU | 97.5%+ PURITY | 0 DIMER', 1),
        pCreate(8, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets', 1, {text: '777', percentage: 5}, false),
        pCreate(9, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets', 1, {text: '777', percentage: 5}, false),
        pCreate(10, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets', 1, {text: '777', percentage: 5}, false),
        pCreate(11, '0.71', '115.00', 'Generostim Standard | J', 'AVG 103.56 IU | 97%+ PURITY | 0 DIMER', 1),
        pCreate(12, '0.78', '20.00', 'Generostim Supreme | G', 'AVG 280.2 IU | 97.5%+ PURITY | 0 DIMER', 1),
        pCreate(13, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets', 1, {text: '777', percentage: 5}, false),
        pCreate(14, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets', 1, {text: '777', percentage: 5}, false),
        pCreate(15, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets', 1, {text: '777', percentage: 5}, false),
        pCreate(16, '0.71', '115.00', 'Generostim Standard | J', 'AVG 103.56 IU | 97%+ PURITY | 0 DIMER', 1),
        pCreate(17, '0.78', '20.00', 'Generostim Supreme | G', 'AVG 280.2 IU | 97.5%+ PURITY | 0 DIMER', 1),
        pCreate(18, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets', 1, {text: '777', percentage: 5}, false),
        pCreate(19, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets', 1, {text: '777', percentage: 5}, false),
        pCreate(20, '0.75', '75.00', 'Anavar 25mg Bottle of 100', '100 X 25mg Tablets', 1, {text: '777', percentage: 5}, false)
    ]
  return (
    <>
    <ProductsList products={products} titleLabel={'Products'} addToCart={addToCart}/>
    </>
  )
}
