import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ContextProvider } from './components/contexts/ContextProvider'
import './i18n';

import router from './router'

ReactDOM.createRoot(document.getElementById('root')).render(

    <ContextProvider>
        <RouterProvider router={router}></RouterProvider>
    </ContextProvider>

)
