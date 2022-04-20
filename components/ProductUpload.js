import React from 'react'
import { useState } from 'react';
import formstyles from '../styles/Layout.module.css'

const Product = () => {

    const [weight, setWeight] = useState("")
    const [quantity, setQuantity] = useState("")
    const [price, setPrice] = useState("")
    const [name, setName] = useState("")
    const [items, setLineItems] = useState([])
      
        const handleSubmit = (e) => {
          e.preventDefault()
          
        // const productData = [{Name: name}, {Price: price}, {Quantity: quantity}, {Weight: weight}]
        let temp = {title: name, price: price, grams: weight, quantity: quantity}  
        setLineItems(items =>[...items,temp])
          
        }

        const handleClick =  (e) => {
          e.preventDefault()

        const order = {line_items:items} 
        console.log(order)
        }

  return (
    <div >
        <form className={formstyles.form} onSubmit = {(e) => handleSubmit (e)}>
          <h2>Add Products</h2>
        

        
         <input type={"text"} placeholder="Product Name" value={name}
        onChange={(e)=>setName(e.target.value)}></input>
        
        <br></br>
         <input type={"text"} placeholder="Price" value={price}
        onChange={(e)=>setPrice(e.target.value)}></input>

        <br></br>

        <input type={"text"} placeholder="Weight" value={weight}
        onChange={(e)=>setWeight(e.target.value)}></input>

        <br></br>
        <input type={"text"} placeholder="Quantity" value={quantity}
        onChange={(e)=>setQuantity(e.target.value)}></input>
        </form>
        
        <button type='submit' onClick={handleSubmit}>Add</button>

        <div>
          
          <h1>Selected Products</h1>

          {items.map((item,i)=>(
            <h3>{i+1}. {item.title}</h3>
          ))}
          <button type='submit' onClick={handleClick}>submit</button>
        </div>

    </div>
  )
}

export default Product;
