
import React from 'react'
import ProductDetail from './props/ProductDetail'
import SiteHeader from './props/SiteHeader'
import SupplierPage from './samples/SupplierPage'
import CounterStateSample from './stateSample/CounterStateSample'
import ProductList from './stateSample/ProductList'
import StateArraySample from './stateSample/StateArraySample'
import StateArraySample2 from './stateSample/StateArraySample2'
import EffectSample from './useEffectSample/EffectSample'

//Fragment... <></>
function App() {

  let productDetail = {
    name: 'IPhone',
    unitPrice : 5200
  }

  return <>

  <SupplierPage/>
      {/* <SiteHeader title='Kampüs 365' subTitle='Yazılım Eğitimleri...'></SiteHeader>
 
    <ProductDetail product={productDetail}></ProductDetail> */}
  </>

}

export default App


