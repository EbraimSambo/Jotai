"use client"
import { cartItemsQuantityAtom } from '@/hooks/user'
import { useAtomValue } from 'jotai'
import { CarrotIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const AppLayout = (
    { children }: { children: React.ReactNode }
) => {
    const cartItemQuantity = useAtomValue(cartItemsQuantityAtom)
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link href={'/'} >Home</Link>
                    </li>
                    <li>
                        <Link href={'/cart'} >Item: {cartItemQuantity}</Link>
                    </li>
                </ul>

            </nav>
            {children}
        </div>
    )
}

export default AppLayout