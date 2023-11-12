
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {StoreProvider} from 'easy-peasy'
import store from './store/index.js';
import './main.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
)
