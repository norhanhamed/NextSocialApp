'use client'
import React from 'react'
import myStore from './store';
import { Provider } from 'react-redux';

export default function ReduxProvider({ children,} : {children : React.ReactNode;}) {
  return (
    <Provider store = {myStore }>
      {children}
    </Provider>
  )
}
