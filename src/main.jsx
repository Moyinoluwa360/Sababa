import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { AnalyticsProvider } from './services/analytics'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AnalyticsProvider>
        <App />
      </AnalyticsProvider>
    </Provider>
  </StrictMode>
)