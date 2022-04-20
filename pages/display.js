import React from 'react';
import { useState, useEffect } from 'react';
import fetch from "isomorphic-unfetch"



const display = () => {

  const [ data, setData] = useState()
  console.log(data)

  const username = "2affd3272f125a9ad6a3ae59b5505e79"
  const password = "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"

  const URL = "https://2affd3272f125a9ad6a3ae59b5505e79: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@jiyang-enterprise.myshopify.com/admin/api/2022-01/products.json";

  const headers = {
        Authorization:
        "Basic" + Buffer.from(username + ":" + password ).toString("base64"),
  }

  useEffect(() => { 
    async function loadProducts() {
      try{
        const response = await fetch(URL, {
          method:"GET",
          headers: headers
        })
        if(response.ok){
          console.log("y")
          const data = await response.json()
          setData(data)
        }
      } catch(error){
    
      }
    }
    loadProducts()

  },[data])

  // const loadProducts = () => {

  //   try{
  //       const response = fetch(URL, {
  //       method:"GET",
  //       headers: headers
  //     });
  //       const data =  response.json()
  //       setData(data)
  //       console.log(data)
  //     } 
  //   catch(error){
  // }

  // }
  // const temp = loadProducts()



  return (
    <div>
    </div>

  )
}

export default display