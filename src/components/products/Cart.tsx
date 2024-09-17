"use client"
import { cartAtom, orderSummaryCart } from '@/hooks/user'
import { useAtom, useAtomValue } from 'jotai'
import React from 'react'
import { Product } from '@/data/products'
import { Button } from '../ui/button'

const Cart = () => {
    const [cartItems, setCartItems] = useAtom(cartAtom);

    function deleteItemCart(product: Product) {
        const filterCartItems = cartItems.filter(cartItem => cartItem.products.id !== product.id)
        setCartItems(filterCartItems)
    }

    function updateItemCart(product: Product, quantity: number) {
        const updateItem = cartItems.map(cartItem => {
            if (cartItem.products.id === product.id) return { ...cartItem, quantity }
            return cartItem
        })
        setCartItems(updateItem)
    }

    const {total, tax, subTotal, shipping} = useAtomValue(orderSummaryCart) 

    return (
        <div>
            <ul>
                {cartItems.map(item => (
                    <li key={item.products.id}>
                        <h1>nome: {item.products.name}</h1>
                        <h2>quatidade: {item.quantity}</h2>
                        <div>
                            <label htmlFor="">Escolher Quantidade</label>
                            <select value={item.quantity}
                                onChange={(e) => updateItemCart(item.products, Number(e.target.value))}
                            >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                            </select>
                        </div>
                        <Button onClick={() => deleteItemCart(item.products)} >Eleminar</Button>
                    </li>
                ))}
            </ul>

            <div>
                <div>
                    Total: {total||0}
                    <h1> subTotal {subTotal||0} </h1>
                    <h1> taxa {tax||0} </h1>
                </div>
            </div>
        </div>
    )
}

export default Cart