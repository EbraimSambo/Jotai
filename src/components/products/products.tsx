"use client"
import { Product, products } from '@/data/products'
import { cartAtom } from '@/hooks/user'
import { useAtom } from 'jotai'
import React from 'react'
import { Button } from '../ui/button'

const AllProducts = () => {
    const [cartItems, setCartItems] = useAtom(cartAtom)
    console.log(cartItems)
    function addProductCart(product: Product) {
        const currentItem = cartItems.find(cartItem => cartItem.products.id === product.id)

        if (currentItem) {
            const updateCart = cartItems.map(cartItem => {
                if (cartItem.products.id === product.id) return { ...cartItem, quantity: cartItem.quantity + 1 }
                return cartItem
            })
            setCartItems(updateCart)
            return
        }
        setCartItems(prevent => [...prevent, { products: product, quantity: 1 }])
    }
    return (
        <div className='max-w-[1200px] w-full mx-auto mt-5' >
            <ul className='grid grid-cols-4 gap-2'>
                {products.map((product, index) => (
                    <li key={index} className='p-4 shadow-md'>
                        <h1> {product.name}</h1>
                        <p> {product.price} </p>
                        <Button
                            onClick={() => addProductCart(product)}
                        >Adicionar no carrinho</Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AllProducts