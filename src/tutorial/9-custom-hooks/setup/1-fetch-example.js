import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch'
import loadingImg from "../../3-conditional-rendering/setup/loadingGif.gif";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
  const {loading, products} = useFetch(url)

  // const inventory =[];
  // inventory.push(products)

  // const lists = products.map((items)=>{return items})

  // console.log(lists)

  // const cat = lists.map((item)=>{return item[0].name})

  // console.log(cat)

  return (
    <div>
      <h2>{loading ? (<img src={loadingImg}/>) :'Now you see me'}</h2>
    </div>
  )
}

export default Example
