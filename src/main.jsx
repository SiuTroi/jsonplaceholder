import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "bootstrap/dist/css/bootstrap.css"
import { UserProvider } from './components/Context/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserProvider>
      <App /> 
    </UserProvider>
  </BrowserRouter>
)
