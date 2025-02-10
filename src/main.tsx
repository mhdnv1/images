import { createRoot } from 'react-dom/client'
import '../src/styles/style.scss'
import App from './App.tsx'
import store from './services/store.ts'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <App />
</Provider>,
)
