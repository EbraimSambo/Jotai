"use client"
import React, { ReactNode } from 'react'
import { Provider } from "jotai";
const MainProvider = (
  { children }: { children: ReactNode }
) => {
  return (
    <Provider>
      {children}
    </Provider>
  )
}

export default MainProvider