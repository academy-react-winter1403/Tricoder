import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/index.jsx'
import { RouterProvider } from 'react-router-dom'
import { routs } from './config/router/Router.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from './redux/store';


const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(

  <StrictMode>
    
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={routs}/>
      </Provider>
      
    </QueryClientProvider>
    
  </StrictMode>,
)
