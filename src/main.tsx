import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'
import './styles/main.scss'

// Setup Mocks
import { setupMocks } from './mocks/setup';

if (import.meta.env.DEV) {
  setupMocks();
}
// end Setup Mocks

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
