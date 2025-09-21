import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { BrowserRouter } from 'react-router-dom'
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Theme>
         <BrowserRouter>
          <App />
        </BrowserRouter>
      </Theme>
    </Provider>
  </StrictMode>,
)
