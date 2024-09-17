import { Product, products } from "@/data/products";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";


export const useUser = atom([
    {
        name: "Ebraim",
        age: 12,
        height: 1.33
    }, {
        name: "Ballo Januario",
        age: 12,
        height: 1.33
    }
])


export const usersStorage = atomWithStorage('users',[
    {
        name: "Ebraim",
        age: 12,
        height: 1.33
    }, {
        name: "Ballo Januario",
        age: 12,
        height: 1.33
    }
]) 

interface Cart{
    products: Product;
    quantity: number;
}
export const cartAtom = atom<Cart[]>([
    // {products: products[0], quantity: 0},
    // {products: products[1], quantity: 4},
])


export const cartItemsQuantityAtom = atom(get=>{
    const cartItems = get(cartAtom)
    const totalQuantity = cartItems.reduce((total, cartItem)=>total + Number(cartItem.quantity), 0)
    return totalQuantity
})

export const orderSummaryCart = atom(get=>{
    const cartItems = get(cartAtom)
    const subTotal = cartItems.reduce((total, cartItem)=>total + cartItem.products.price * cartItem.quantity, 0)

    const tax = subTotal * 0.14
    const shipping = subTotal * 0.4
    const total = subTotal + tax + shipping;

    return {total, tax, subTotal, shipping}
})